(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[1908],{50613:function(n,e,t){Promise.resolve().then(t.bind(t,77930))},77930:function(n,e,t){"use strict";t.r(e),t.d(e,{default:function(){return x}});var s=t(36164),r=t(3546),i=t(11978),a=t(70787),o=t(97651),d=t.n(o),u=t(99092),c=t.n(u),l=t(40055),f=t(70410),g=t(1544),$=t(81565),h=t(90379),m=t(17484);function x(){var n,e,t;let a=(0,i.useRouter)(),o=(0,i.useSearchParams)(),u=o.get("id"),[{data:g,error:x,fetching:p},I]=(0,l.aM)({query:f.GG,variables:{ids:[u]},pause:!u}),v=null==g?void 0:null===(t=g.jobRuns)||void 0===t?void 0:null===(e=t.edges)||void 0===e?void 0:null===(n=e[0])||void 0===n?void 0:n.node,j=(0,m.H)(v),y=("Pending"===j||"Running"===j)&&!(null==v?void 0:v.stdout);return r.useEffect(()=>{let n;return(null==v?void 0:v.createdAt)&&!(null==v?void 0:v.finishedAt)&&(n=window.setTimeout(()=>{I()},5e3)),()=>{n&&clearInterval(n)}},[v]),(0,s.jsx)(s.Fragment,{children:p?(0,s.jsx)(h.cg,{}):(0,s.jsx)("div",{className:"flex flex-1 flex-col items-stretch gap-2",children:v&&(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)("div",{onClick:()=>a.back(),className:"-ml-1 flex cursor-pointer items-center transition-opacity hover:opacity-60",children:[(0,s.jsx)($.IconChevronLeft,{className:"mr-1 h-6 w-6"}),(0,s.jsx)("h2",{className:"scroll-m-20 text-3xl font-bold tracking-tight first:mt-0",children:(0,m.Y)(v.job)})]}),(0,s.jsxs)("div",{className:"mb-2 flex gap-x-5 text-sm text-muted-foreground lg:gap-x-10",children:[(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)($.IconStopWatch,{}),(0,s.jsxs)("p",{children:["State: ",j]})]}),v.createdAt&&(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)($.IconClock,{}),(0,s.jsxs)("p",{children:["Created:"," ",c()(v.createdAt).format("YYYY-MM-DD HH:mm")]})]}),v.startedAt&&(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)($.IconClock,{}),(0,s.jsxs)("p",{children:["Started:"," ",c()(v.startedAt).format("YYYY-MM-DD HH:mm")]})]}),v.createdAt&&v.finishedAt&&(0,s.jsxs)("div",{className:"flex items-center gap-1",children:[(0,s.jsx)($.IconHistory,{}),(0,s.jsxs)("p",{children:["Duration:"," ",d()(c().duration(c()(v.finishedAt).diff(v.startedAt)).asMilliseconds())]})]})]}),(0,s.jsx)("div",{className:"flex flex-1 flex-col",children:(0,s.jsx)(b,{value:null==v?void 0:v.stdout,pending:y})})]})})})}function b(n){let{children:e,className:t,value:r,pending:i,...o}=n;return(0,s.jsxs)("div",{className:(0,g.cn)("relative mt-2 h-[72vh] w-full overflow-y-auto overflow-x-hidden rounded-lg border bg-gray-50 font-mono text-[0.9rem] dark:bg-gray-800",t),...o,children:[i&&!r&&(0,s.jsx)("div",{className:"absolute inset-0 flex items-center justify-center bg-background/60",children:(0,s.jsx)($.IconSpinner,{className:"h-8 w-8"})}),r&&(0,s.jsx)("pre",{className:"whitespace-pre-wrap p-4",children:(0,s.jsx)(a.Z,{children:r})})]})}},17484:function(n,e,t){"use strict";t.d(e,{H:function(){return a},Y:function(){return i}});var s=t(74630);let r={scheduler_git:"Git",scheduler_github_gitlab:"Github / Gitlab",web_crawler:"Docs"};function i(n){return n in r?r[n]:n}function a(n){return n?(0,s.Z)(n.exitCode)?n.startedAt?"Running":"Pending":0===n.exitCode?"Success":"Failed":"Pending"}},90379:function(n,e,t){"use strict";t.d(e,{PF:function(){return d},cg:function(){return a},tB:function(){return o}});var s=t(36164),r=t(1544),i=t(3448);let a=n=>{let{className:e,...t}=n;return(0,s.jsxs)("div",{className:(0,r.cn)("space-y-3",e),...t,children:[(0,s.jsx)(i.O,{className:"h-4 w-full"}),(0,s.jsx)(i.O,{className:"h-4 w-full"}),(0,s.jsx)(i.O,{className:"h-4 w-full"}),(0,s.jsx)(i.O,{className:"h-4 w-full"})]})},o=n=>{let{className:e,...t}=n;return(0,s.jsx)(i.O,{className:(0,r.cn)("h-4 w-full",e),...t})},d=n=>{let{className:e,...t}=n;return(0,s.jsxs)("div",{className:(0,r.cn)("flex flex-col gap-3",e),...t,children:[(0,s.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(i.O,{className:"h-4 w-full"}),(0,s.jsx)(i.O,{className:"h-4 w-[20%]"}),(0,s.jsx)(i.O,{className:"h-4 w-full"})]})}},3448:function(n,e,t){"use strict";t.d(e,{O:function(){return i}});var s=t(36164),r=t(1544);function i(n){let{className:e,...t}=n;return(0,s.jsx)("div",{className:(0,r.cn)("h-4 animate-pulse rounded-md bg-border",e),...t})}},70410:function(n,e,t){"use strict";t.d(e,{Cl:function(){return l},D7:function(){return h},DQ:function(){return d},GG:function(){return a},Gx:function(){return m},S1:function(){return i},TH:function(){return u},XL:function(){return p},Y6:function(){return c},gI:function(){return x},hA:function(){return b},kb:function(){return f},lE:function(){return r},r4:function(){return I},ts:function(){return g},yB:function(){return o},zz:function(){return $}});var s=t(43240);let r=(0,s.BX)("\n  query ListInvitations(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    invitations(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          code\n          createdAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),i=(0,s.BX)("\n  query gitRepositories(\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    gitRepositories(\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          name\n          gitUrl\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),a=(0,s.BX)("\n  query ListJobRuns(\n    $ids: [ID!]\n    $jobs: [String!]\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    jobRuns(\n      ids: $ids\n      jobs: $jobs\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          job\n          createdAt\n          startedAt\n          finishedAt\n          exitCode\n          stdout\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),o=(0,s.BX)("\n  query GetJobRunStats($jobs: [String!]) {\n    jobRunStats(jobs: $jobs) {\n      success\n      failed\n      pending\n    }\n  }\n"),d=(0,s.BX)("\n  query ListJobs {\n    jobs\n  }\n"),u=(0,s.BX)("\n  query ListUsers($after: String, $before: String, $first: Int, $last: Int) {\n    users(after: $after, before: $before, first: $first, last: $last) {\n      edges {\n        node {\n          id\n          email\n          isAdmin\n          isOwner\n          createdAt\n          active\n          name\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),c=(0,s.BX)("\n  query DailyStatsInPastYear($users: [ID!]) {\n    dailyStatsInPastYear(users: $users) {\n      start\n      end\n      completions\n      selects\n      views\n    }\n  }\n"),l=(0,s.BX)("\n  query DailyStats(\n    $start: DateTime!\n    $end: DateTime!\n    $users: [ID!]\n    $languages: [Language!]\n  ) {\n    dailyStats(start: $start, end: $end, users: $users, languages: $languages) {\n      start\n      end\n      completions\n      selects\n      views\n      language\n    }\n  }\n"),f=(0,s.BX)("\n  query ListIntegrations(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integrations(\n      ids: $ids\n      kind: $kind\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          status\n          apiBase\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),g=(0,s.BX)("\n  query ListIntegratedRepositories(\n    $ids: [ID!]\n    $kind: IntegrationKind\n    $active: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    integratedRepositories(\n      ids: $ids\n      kind: $kind\n      active: $active\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          displayName\n          gitUrl\n          active\n          sourceId\n          jobInfo {\n            lastJobRun {\n              id\n              job\n              createdAt\n              finishedAt\n              startedAt\n              exitCode\n            }\n            command\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),$=(0,s.BX)("\n  query RepositoryList {\n    repositoryList {\n      id\n      name\n      kind\n      gitUrl\n      refs {\n        name\n        commit\n      }\n    }\n  }\n"),h=(0,s.BX)("\n  query RepositorySearch(\n    $kind: RepositoryKind!\n    $id: ID!\n    $rev: String\n    $pattern: String!\n  ) {\n    repositorySearch(kind: $kind, id: $id, rev: $rev, pattern: $pattern) {\n      type\n      path\n      indices\n    }\n  }\n"),m=(0,s.BX)("\n  query ContextInfo {\n    contextInfo {\n      sources {\n        id\n        sourceKind\n        sourceId\n        sourceName\n      }\n    }\n  }\n"),x=(0,s.BX)("\n  query UserGroups {\n    userGroups {\n      id\n      name\n      createdAt\n      updatedAt\n      members {\n        user {\n          id\n          email\n          name\n          createdAt\n        }\n        isGroupAdmin\n        createdAt\n        updatedAt\n      }\n    }\n  }\n"),b=(0,s.BX)("\n  query sourceIdAccessPolicies($sourceId: String!) {\n    sourceIdAccessPolicies(sourceId: $sourceId) {\n      sourceId\n      read {\n        id\n        name\n      }\n    }\n  }\n"),p=(0,s.BX)("\n  query ListThreads(\n    $ids: [ID!]\n    $isEphemeral: Boolean\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threads(\n      ids: $ids\n      isEphemeral: $isEphemeral\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          userId\n          createdAt\n          updatedAt\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n"),I=(0,s.BX)("\n  query ListThreadMessages(\n    $threadId: ID!\n    $after: String\n    $before: String\n    $first: Int\n    $last: Int\n  ) {\n    threadMessages(\n      threadId: $threadId\n      after: $after\n      before: $before\n      first: $first\n      last: $last\n    ) {\n      edges {\n        node {\n          id\n          threadId\n          role\n          content\n          attachment {\n            code {\n              gitUrl\n              filepath\n              language\n              content\n              startLine\n            }\n            clientCode {\n              filepath\n              content\n              startLine\n            }\n            doc {\n              __typename\n              ... on MessageAttachmentWebDoc {\n                title\n                link\n                content\n              }\n              ... on MessageAttachmentIssueDoc {\n                title\n                link\n                body\n                closed\n              }\n              ... on MessageAttachmentPullDoc {\n                title\n                link\n                body\n                merged\n                patch\n              }\n            }\n          }\n        }\n        cursor\n      }\n      pageInfo {\n        hasNextPage\n        hasPreviousPage\n        startCursor\n        endCursor\n      }\n    }\n  }\n")}},function(n){n.O(0,[8415,7565,1386,55,617,7651,1600,1544,1565,3240,3375,5289,1744],function(){return n(n.s=50613)}),_N_E=n.O()}]);