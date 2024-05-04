use std::str::FromStr;

use apalis::{
    cron::{CronStream, Schedule},
    prelude::{Data, Job, Monitor, WorkerBuilder, WorkerFactoryFn},
    utils::TokioExecutor,
};
use chrono::{DateTime, Utc};
use serde::{Deserialize, Serialize};
use tabby_db::DbConn;
use tracing::debug;

use super::{
    cinfo,
    layer::{JobLogLayer, JobLogger},
};

#[derive(Debug, Serialize, Deserialize, Clone)]
pub struct DbMaintainanceJob;

impl Job for DbMaintainanceJob {
    const NAME: &'static str = "db_maintainance";
}

impl DbMaintainanceJob {
    async fn cron(
        _now: DateTime<Utc>,
        logger: Data<JobLogger>,
        db: Data<DbConn>,
    ) -> tabby_schema::Result<()> {
        cinfo!(logger, "Running db maintainance job");
        db.delete_expired_token().await?;
        db.delete_expired_password_resets().await?;
        Ok(())
    }

    pub fn register(monitor: Monitor<TokioExecutor>, db: DbConn) -> Monitor<TokioExecutor> {
        let schedule = Schedule::from_str("@hourly").expect("unable to parse cron schedule");

        monitor.register(
            WorkerBuilder::new(DbMaintainanceJob::NAME)
                .stream(CronStream::new(schedule).into_stream())
                .layer(JobLogLayer::new(db.clone(), DbMaintainanceJob::NAME))
                .data(db)
                .build_fn(DbMaintainanceJob::cron),
        )
    }
}
