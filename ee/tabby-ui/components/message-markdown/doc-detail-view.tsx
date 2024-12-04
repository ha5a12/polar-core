import DOMPurify from 'dompurify'
import he from 'he'
import { marked } from 'marked'
import { useQuery } from 'urql'

import { ListUsersQuery } from '@/lib/gql/generates/graphql'
import { listSecuredUsers } from '@/lib/tabby/query'
import type { ArrayElementType, AttachmentDocItem } from '@/lib/types'
import { getContent } from '@/lib/utils'

import LoadingWrapper from '../loading-wrapper'
import { SiteFavicon } from '../site-favicon'
import { Badge } from '../ui/badge'
import {
  IconCheckCircled,
  IconCircleDot,
  IconGitMerge,
  IconGitPullRequest
} from '../ui/icons'
import { UserAvatar } from '../user-avatar'

export function DocDetailView({
  relevantDocument,
  user,
  fetchingUser
}: {
  relevantDocument: AttachmentDocItem
  user?: ArrayElementType<ListUsersQuery['users']['edges']>['node']
  fetchingUser?: boolean
}) {
  const sourceUrl = relevantDocument ? new URL(relevantDocument.link) : null
  const isIssue = relevantDocument?.__typename === 'MessageAttachmentIssueDoc'
  const isPR = relevantDocument?.__typename === 'MessageAttachmentPullDoc'

  return (
    <div className="prose max-w-none break-words dark:prose-invert prose-p:leading-relaxed prose-pre:mt-1 prose-pre:p-0">
      <div className="flex w-full flex-col gap-y-1 text-sm">
        <div className="m-0 flex items-center space-x-1 text-xs leading-none text-muted-foreground">
          <SiteFavicon
            hostname={sourceUrl!.hostname}
            className="m-0 mr-1 leading-none"
          />
          <p className="m-0 leading-none">{sourceUrl!.hostname}</p>
        </div>
        <p
          className="m-0 cursor-pointer font-bold leading-none transition-opacity hover:opacity-70"
          onClick={() => window.open(relevantDocument.link)}
        >
          {relevantDocument.title}
        </p>
        <div className="mb-2 w-auto">
          {isIssue && (
            <IssueDocInfoView
              closed={relevantDocument.closed}
              author={relevantDocument.author}
            />
          )}
          {isPR && (
            <PullDocInfoView
              merged={relevantDocument.merged}
              author={relevantDocument.author}
            />
          )}
        </div>
        <p className="m-0 line-clamp-4 leading-none">
          {normalizedText(getContent(relevantDocument))}
        </p>
      </div>
    </div>
  )
}

function PullDocInfoView({
  merged,
  author
}: {
  merged: boolean
  author: string
}) {
  // FIXME me: if a user data pass, no need to query
  const [{ data, fetching }] = useQuery({
    query: listSecuredUsers,
    variables: {
      emails: [author]
    },
    pause: !author
  })

  const user = data?.users?.edges[0]?.node

  return (
    <LoadingWrapper>
      <div className="flex items-center gap-3">
        <PRStateBadge merged={merged} />
        <div className="flex items-center gap-1.5 flex-1">
          {!user || fetching ? null : (
            <>
              <UserAvatar user={user} className="w-5 h-5 shrink-0 not-prose" />
              <span className="text-muted-foreground font-semibold">
                {user.name || user.email}
              </span>
            </>
          )}
        </div>
      </div>
    </LoadingWrapper>
  )
}

function IssueDocInfoView({
  closed,
  author
}: {
  closed: boolean
  author: string
}) {
  const [{ data, fetching }] = useQuery({
    query: listSecuredUsers,
    variables: {
      emails: [author]
    },
    pause: !author
  })

  const user = data?.users?.edges[0]?.node

  return (
    <div className="flex items-center gap-3">
      <IssueStateBadge closed={closed} />
      <div className="flex items-center gap-1.5 flex-1">
        {!user || fetching ? null : (
          <>
            <UserAvatar user={user} className="w-5 h-5 shrink-0 not-prose" />
            <span className="text-muted-foreground font-semibold">
              {user.name || user.email}
            </span>
          </>
        )}
      </div>
    </div>
  )
}

function IssueStateBadge({ closed }: { closed: boolean }) {
  return (
    <Badge
      variant={closed ? 'default' : 'secondary'}
      className="gap-1 py-1 text-xs shrink-0"
    >
      {closed ? (
        <IconCheckCircled className="h-3.5 w-3.5" />
      ) : (
        <IconCircleDot className="h-3.5 w-3.5" />
      )}
      {closed ? 'Closed' : 'Open'}
    </Badge>
  )
}

function PRStateBadge({ merged }: { merged: boolean }) {
  return (
    <Badge
      variant={merged ? 'default' : 'secondary'}
      className="gap-1 py-1 text-xs shrink-0"
    >
      {merged ? (
        <IconGitMerge className="h-3.5 w-3.5" />
      ) : (
        <IconGitPullRequest className="h-3.5 w-3.5" />
      )}
      {merged ? 'Merged' : 'Open'}
    </Badge>
  )
}

const normalizedText = (input: string) => {
  const sanitizedHtml = DOMPurify.sanitize(input, {
    ALLOWED_TAGS: [],
    ALLOWED_ATTR: []
  })
  const parsed = marked.parse(sanitizedHtml) as string
  const decoded = he.decode(parsed)
  const plainText = decoded.replace(/<\/?[^>]+(>|$)/g, '')
  return plainText
}
