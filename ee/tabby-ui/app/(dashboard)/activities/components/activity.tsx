'use client'

import React from 'react'
import moment from 'moment'
import { useTheme } from 'next-themes'
import { DateRange } from 'react-day-picker'
import ReactJson from 'react-json-view'
import { toast } from 'sonner'
import { useQuery } from 'urql'
import { capitalize } from 'lodash-es'

import { DEFAULT_PAGE_SIZE } from '@/lib/constants'
import { graphql } from '@/lib/gql/generates'
import { EventKind, ListUserEventsQuery } from '@/lib/gql/generates/graphql'
import { Member, useAllMembers } from '@/lib/hooks/use-all-members'
import { QueryVariables } from '@/lib/tabby/gql'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import {
  IconChevronLeft,
  IconChevronRight,
  IconFileSearch
} from '@/components/ui/icons'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import DateRangePicker from '@/components/date-range-picker'
import LoadingWrapper from '@/components/loading-wrapper'

const DEFAULT_DATE_RANGE = '-24h'
const KEY_SELECT_ALL = 'all'

export const listUserEvents = graphql(/* GraphQL */ `
  query ListUserEvents(
    $after: String
    $before: String
    $first: Int
    $last: Int
    $start: DateTimeUtc!
    $end: DateTimeUtc!
    $users: [ID!]
  ) {
    userEvents(
      after: $after
      before: $before
      first: $first
      last: $last
      start: $start
      end: $end
      users: $users
    ) {
      edges {
        node {
          id
          userId
          createdAt
          kind
          payload
        }
        cursor
      }
      pageInfo {
        hasNextPage
        hasPreviousPage
        startCursor
        endCursor
      }
    }
  }
`)

export default function Activity() {
  const defaultFromDate = moment().add(parseInt(DEFAULT_DATE_RANGE, 10), 'day')
  const defaultToDate = moment()

  const [members] = useAllMembers()
  const [dateRange, setDateRange] = React.useState<DateRange>({
    from: defaultFromDate.toDate(),
    to: defaultToDate.toDate()
  })
  const [page, setPage] = React.useState(1)
  const [userEvents, setUserEvents] =
    React.useState<ListUserEventsQuery['userEvents']>()
  const [selectedMember, setSelectedMember] = React.useState(KEY_SELECT_ALL)

  const [queryVariables, setQueryVariables] = React.useState<
    Omit<QueryVariables<typeof listUserEvents>, 'start' | 'end'>
  >({
    last: DEFAULT_PAGE_SIZE
  })

  const [{ data, error, fetching }] = useQuery({
    query: listUserEvents,
    variables: {
      start: moment(dateRange.from!).utc().format(),
      end: dateRange.to
        ? moment(dateRange.to).utc().format()
        : moment(dateRange.from!).utc().format(),
      users: selectedMember === KEY_SELECT_ALL ? undefined : [selectedMember],
      ...queryVariables
    }
  })

  React.useEffect(() => {
    if (data?.userEvents.edges.length) {
      setUserEvents(data.userEvents)
    }
  }, [data])

  React.useEffect(() => {
    if (error?.message) {
      toast.error(error.message)
    }
  }, [error])

  const updateDateRange = (range: DateRange) => {
    setDateRange(range)
    setPage(1)
    setQueryVariables({ last: DEFAULT_PAGE_SIZE })
  }

  return (
    <>
      <div className="flex w-full flex-col">
        <div className="flex flex-col sm:gap-4 sm:py-4">
          <main className="grid flex-1 items-start gap-4 py-4 sm:py-0">
            <div className="flex flex-col gap-y-2 xl:flex-row xl:items-center xl:justify-between">
              <p className="text-sm text-muted-foreground">
                View a log of code completion events. Tracing the progression from initiation to final insertion.
              </p>

              {!fetching && (
                <div className="flex flex-col items-center gap-2 md:flex-row xl:ml-auto">
                <Select
                  defaultValue={KEY_SELECT_ALL}
                  onValueChange={setSelectedMember}
                >
                  <SelectTrigger className="w-[calc(100vw-2rem)] py-0 md:w-auto">
                    <div className="flex h-6 items-center">
                      <div className="overflow-hidden text-ellipsis text-left md:w-[190px]">
                        <SelectValue />
                      </div>
                    </div>
                  </SelectTrigger>
                  <SelectContent align="end">
                    <SelectGroup>
                      <SelectItem value={KEY_SELECT_ALL}>All members</SelectItem>
                      {members.map(member => (
                        <SelectItem value={member.id} key={member.id}>
                          {member.email}
                        </SelectItem>
                      ))}
                    </SelectGroup>
                  </SelectContent>
                </Select>

                <DateRangePicker
                  className="w-[calc(100vw-2rem)] md:w-[240px]"
                  options={[
                    { label: 'Last 24 hours', value: '-24h' },
                    { label: 'Last 7 days', value: '-7d' },
                    { label: 'Last 14 days', value: '-14d' }
                  ]}
                  defaultValue={DEFAULT_DATE_RANGE}
                  onSelect={updateDateRange}
                  hasToday
                  hasYesterday
                />
              </div>
              )}
              
            </div>
            <LoadingWrapper loading={fetching}>
              <>
              <Card x-chunk="dashboard-06-chunk-0" className="bg-transparent">
              {(!data?.userEvents.edges ||
                data?.userEvents.edges.length === 0) && (
                <CardContent className="flex flex-col items-center py-40 text-sm">
                  <IconFileSearch className="mb-2 h-10 w-10" />
                  <p className="font-semibold">
                    No data available for the chosen dates
                  </p>
                  <p className="text-muted-foreground">
                    Please try a different date range
                  </p>
                </CardContent>
              )}

              {data?.userEvents.edges && data?.userEvents.edges.length > 0 && (
                <>
                  <CardContent className="w-[calc(100vw-2rem)] overflow-x-auto px-0 pb-0 md:w-auto">
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead className="pl-4 md:w-[30%] md:pl-8">Event</TableHead>
                          <TableHead className="md:w-[40%]">User</TableHead>
                          <TableHead className="pl-4 md:w-[30%] md:pr-8">Time</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {userEvents?.edges
                          .sort(
                            (a, b) =>
                              new Date(b.node.createdAt).getTime() -
                              new Date(a.node.createdAt).getTime()
                          )
                          .map(userEvent => (
                            <ActivityRow
                              key={userEvent.cursor}
                              activity={userEvent.node}
                              members={members}
                            />
                          ))}
                      </TableBody>
                    </Table>
                    </CardContent>
                  </>
                )}
              </Card>

              {(data?.userEvents.pageInfo?.hasNextPage ||
                data?.userEvents.pageInfo?.hasPreviousPage) && (
                <div className="flex justify-end">
                  <div className="flex w-[100px] items-center justify-center text-sm font-medium">
                    {' '}
                    Page {page}
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0"
                      disabled={!data?.userEvents.pageInfo?.hasNextPage}
                      onClick={e => {
                        setQueryVariables({
                          first: DEFAULT_PAGE_SIZE,
                          after: data?.userEvents.pageInfo?.endCursor
                        })
                        setPage(page - 1)
                      }}
                    >
                      <IconChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button
                      variant="outline"
                      className="h-8 w-8 p-0"
                      disabled={!data?.userEvents.pageInfo?.hasPreviousPage}
                      onClick={e => {
                        setQueryVariables({
                          last: DEFAULT_PAGE_SIZE,
                          before: data?.userEvents.pageInfo?.startCursor
                        })
                        setPage(page + 1)
                      }}
                    >
                      <IconChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              )}
              </>

            </LoadingWrapper>
            
          </main>
        </div>
      </div>
    </>
  )
}

function ActivityRow({
  activity,
  members
}: {
  activity: ListUserEventsQuery['userEvents']['edges'][0]['node']
  members: Member[]
}) {
  const { theme } = useTheme()
  const [isExpanded, setIsExpanded] = React.useState(false)

  let payloadJson
  try {
    payloadJson = JSON.parse(activity.payload) as {
      [key: string]: { language?: string }
    }
  } catch (error: any) {
    if (error?.message) {
      toast.error(error.message)
    }
  }

  if (!payloadJson) return null

  let tooltip = ''
  switch (activity.kind) {
    case EventKind.Completion: {
      tooltip = 'Code completion supplied'
      break
    }

    case EventKind.Dismiss: {
      tooltip = 'Code completion viewed but not used'
      break
    }
    case EventKind.Select: {
      tooltip = 'Code completion accepted and inserted'
      break
    }
    case EventKind.View: {
      tooltip = 'Code completion shown in editor'
      break
    }
  }
  return (
    <>
      <TableRow
        key={`${activity.id}}-1`}
        className="cursor-pointer text-sm"
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <TableCell className="pl-4 font-medium md:pl-8">
          <Tooltip>
            <TooltipTrigger>{capitalize(activity.kind)}</TooltipTrigger>
            <TooltipContent>
              <p>{tooltip}</p>
            </TooltipContent>
          </Tooltip>
        </TableCell>
        <TableCell>
          {members.find(user => user.id === activity.userId)?.email ||
            activity.userId}
        </TableCell>
        <TableCell className="pl-4 md:pr-8">
          {moment(activity.createdAt).isBefore(moment().subtract(1, 'days'))
            ? moment(activity.createdAt).format('YYYY-MM-DD HH:mm')
            : moment(activity.createdAt).fromNow()}
        </TableCell>
      </TableRow>

      {isExpanded && (
        <TableRow key={`${activity.id}-2`} className="w-full bg-muted/30">
          <TableCell className="px-8 font-medium" colSpan={4}>
            <ReactJson
              src={payloadJson}
              name={false}
              collapseStringsAfterLength={50}
              theme={theme === 'dark' ? 'tomorrow' : 'rjv-default'}
              style={theme === 'dark' ? { background: 'transparent' } : {}}
            />
          </TableCell>
        </TableRow>
      )}
    </>
  )
}
