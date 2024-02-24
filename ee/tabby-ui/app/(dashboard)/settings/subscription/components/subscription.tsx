'use client'

import { capitalize } from 'lodash-es'
import moment from 'moment'
import { useQuery } from 'urql'

import { graphql } from '@/lib/gql/generates'
import { LicenseInfo } from '@/lib/gql/generates/graphql'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingWrapper from '@/components/loading-wrapper'
import { SubHeader } from '@/components/sub-header'

import { LicenseForm } from './license-form'
import { LicenseTable } from './license-table'

const getLicenseInfo = graphql(/* GraphQL */ `
  query GetLicenseInfo {
    license {
      type
      status
      seats
      seatsUsed
      issuedAt
      expiresAt
    }
  }
`)

export default function Subscription() {
  const [{ data, fetching }, reexecuteQuery] = useQuery({
    query: getLicenseInfo
  })
  const license = data?.license
  const onUploadLicenseSuccess = () => {
    reexecuteQuery()
  }

  return (
    <div className="p-4">
      <SubHeader
        className="mb-8"
        externalLink="https://links.tabbyml.com/schedule-a-demo"
        externalLinkText="📆 Book a 30-minute product demo"
      >
        You can upload your Tabby license to unlock team/enterprise features.
      </SubHeader>
      <div className="flex flex-col gap-8">
        <LoadingWrapper
          loading={fetching}
          fallback={
            <div className="grid grid-cols-3 space-x-8">
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
              <Skeleton className="h-16" />
            </div>
          }
        >
          {license && <License license={license} />}
        </LoadingWrapper>
        <LicenseForm onSuccess={onUploadLicenseSuccess} />
        <LicenseTable />
      </div>
    </div>
  )
}

function License({ license }: { license: LicenseInfo }) {
  const expiresAt = license.expiresAt
    ? moment(license.expiresAt).format('MM/DD/YYYY')
    : '–'

  const seatsText = `${license.seatsUsed} / ${license.seats}`

  return (
    <div className="grid font-bold lg:grid-cols-3">
      <div>
        <div className="mb-1 text-muted-foreground">Expires at</div>
        <div className="text-3xl">{expiresAt}</div>
      </div>
      <div>
        <div className="mb-1 text-muted-foreground">Assigned / Total Seats</div>
        <div className="text-3xl">{seatsText}</div>
      </div>
      <div>
        <div className="mb-1 text-muted-foreground">Current plan</div>
        <div className="text-3xl text-primary">
          {capitalize(license?.type ?? 'Community')}
        </div>
      </div>
    </div>
  )
}
