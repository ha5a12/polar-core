'use client'

import React, { useState } from 'react'
import moment from 'moment'
import { toast } from 'sonner'
import { useQuery } from 'urql'

import { DEFAULT_PAGE_SIZE } from '@/lib/constants'
import { graphql } from '@/lib/gql/generates'
import type { ListUsersQuery } from '@/lib/gql/generates/graphql'
import { useCopyToClipboard } from '@/lib/hooks/use-copy-to-clipboard'
import { useMe } from '@/lib/hooks/use-me'
import { QueryVariables, useMutation } from '@/lib/tabby/gql'
import { listSecuredUsers } from '@/lib/tabby/query'
import type { ArrayElementType } from '@/lib/types'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '@/components/ui/dropdown-menu'
import { IconCheck, IconMore, IconSpinner } from '@/components/ui/icons'
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationNext,
  PaginationPrevious
} from '@/components/ui/pagination'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow
} from '@/components/ui/table'
import LoadingWrapper from '@/components/loading-wrapper'

import { UpdateUserRoleDialog } from './user-role-dialog'

const updateUserActiveMutation = graphql(/* GraphQL */ `
  mutation UpdateUserActive($id: ID!, $active: Boolean!) {
    updateUserActive(id: $id, active: $active)
  }
`)

const generateResetPasswordUrlMutation = graphql(/* GraphQL */ `
  mutation generateResetPasswordUrl($userId: ID!) {
    generateResetPasswordUrl(userId: $userId)
  }
`)

type UserNode = ArrayElementType<ListUsersQuery['users']['edges']>['node']

const PAGE_SIZE = DEFAULT_PAGE_SIZE
export default function UsersTable() {
  const [{ data: me }] = useMe()
  const [queryVariables, setQueryVariables] = React.useState<
    QueryVariables<typeof listSecuredUsers>
  >({ first: PAGE_SIZE })
  const [{ data, error, fetching }, reexecuteQuery] = useQuery({
    query: listSecuredUsers,
    variables: queryVariables
  })
  const [users, setUsers] = React.useState<ListUsersQuery['users']>()
  const [currentUser, setCurrentUser] = React.useState<UserNode>()
  const [updateRoleVisible, setUpdateRoleVisible] = React.useState(false)
  const [isPromote, setIsPromote] = React.useState(false)

  React.useEffect(() => {
    const _users = data?.users
    if (_users?.edges?.length) {
      setUsers(_users)
    }
  }, [data])

  React.useEffect(() => {
    if (error?.message) {
      toast.error(error.message)
    }
  }, [error])

  const updateUserActive = useMutation(updateUserActiveMutation)

  const onUpdateUserActive = (node: UserNode, active: boolean) => {
    updateUserActive({ id: node.id, active }).then(response => {
      if (response?.error || !response?.data?.updateUserActive) {
        toast.error(
          response?.error?.message ||
            `${active ? 'activate' : 'deactivate'} failed`
        )
        return
      }

      reexecuteQuery()
    })
  }

  const onUpdateUserRole = (node: UserNode) => {
    setCurrentUser(node)
    setUpdateRoleVisible(true)
    setIsPromote(!node.isAdmin)
  }

  const pageInfo = users?.pageInfo
  const makeBadge = (node: UserNode) =>
    node.isOwner ? (
      <Badge>OWNER</Badge>
    ) : node.isAdmin ? (
      <Badge>ADMIN</Badge>
    ) : (
      <Badge variant="secondary">MEMBER</Badge>
    )

  return (
    <>
      <LoadingWrapper loading={fetching}>
        {!!users?.edges?.length && (
          <>
            <Table className="border-b">
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[20%]">Name</TableHead>
                  <TableHead className="w-[25%]">Email</TableHead>
                  <TableHead className="w-[15%]">Joined</TableHead>
                  <TableHead className="w-[20%] text-center">Status</TableHead>
                  <TableHead className="w-[20%] text-center">Level</TableHead>
                  <TableHead className="w-[100px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {users.edges.map(x => {
                  const showOperation =
                    !x.node.isOwner && me?.me && x.node.id !== me.me.id

                  return (
                    <TableRow key={x.node.id}>
                      <TableCell>{x.node.name}</TableCell>
                      <TableCell>{x.node.email}</TableCell>
                      <TableCell>
                        {moment.utc(x.node.createdAt).fromNow()}
                      </TableCell>
                      <TableCell className="text-center">
                        {x.node.active ? (
                          <Badge variant="successful">Active</Badge>
                        ) : (
                          <Badge variant="secondary">Inactive</Badge>
                        )}
                      </TableCell>
                      <TableCell className="text-center">
                        {makeBadge(x.node)}
                      </TableCell>
                      <TableCell className="text-end">
                        {showOperation && (
                          <OperationView
                            user={x}
                            onUpdateUserActive={onUpdateUserActive}
                            onUpdateUserRole={onUpdateUserRole}
                          />
                        )}
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
            {(pageInfo?.hasNextPage || pageInfo?.hasPreviousPage) && (
              <Pagination className="my-4">
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      disabled={!pageInfo?.hasPreviousPage}
                      onClick={e =>
                        setQueryVariables({
                          last: PAGE_SIZE,
                          before: pageInfo?.startCursor
                        })
                      }
                    />
                  </PaginationItem>
                  <PaginationItem>
                    <PaginationNext
                      disabled={!pageInfo?.hasNextPage}
                      onClick={e =>
                        setQueryVariables({
                          first: PAGE_SIZE,
                          after: pageInfo?.endCursor
                        })
                      }
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            )}
          </>
        )}
      </LoadingWrapper>

      <UpdateUserRoleDialog
        onSuccess={() => {
          reexecuteQuery()
          setUpdateRoleVisible(false)
        }}
        user={currentUser}
        isPromote={isPromote}
        open={updateRoleVisible}
        onOpenChange={setUpdateRoleVisible}
      />
    </>
  )
}

function OperationView({
  user,
  onUpdateUserActive,
  onUpdateUserRole
}: {
  user: ArrayElementType<ListUsersQuery['users']['edges']>
  onUpdateUserActive: (node: UserNode, active: boolean) => void
  onUpdateUserRole: (node: UserNode) => void
}) {
  const [open, setOpen] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const onOpenChange = (open: boolean) => {
    setOpen(open)
  }
  const { isCopied, copyToClipboard } = useCopyToClipboard({
    timeout: 1000
  })
  const generateResetPasswordUrl = useMutation(generateResetPasswordUrlMutation)
  const handleGenerateResetPassworkURL = () => {
    if (submitting) return

    setSubmitting(true)
    generateResetPasswordUrl({ userId: user.node.id })
      .then(res => {
        const link = res?.data?.generateResetPasswordUrl
        if (link) {
          copyToClipboard(link)
          toast('Password reset link copied to clipboard', {
            classNames: {
              title: 'text-sm font-semibold'
            },
            duration: 10000,
            description: link,
            descriptionClassName: 'underline',
            action: {
              label: 'Copy',
              onClick: e => {
                copyToClipboard(link)
              }
            }
          })
          setTimeout(() => {
            setOpen(false)
          }, 500)
        } else {
          toast.error(
            res?.error?.message || 'Failed to generate password reset link'
          )
        }
      })
      .catch(error => {
        toast.error(error?.message || 'Failed to generate password reset link')
      })
      .finally(() => {
        setSubmitting(false)
      })
  }

  return (
    <DropdownMenu modal={false} open={open} onOpenChange={onOpenChange}>
      <DropdownMenuTrigger asChild>
        <Button size="icon" variant="ghost">
          <IconMore />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent collisionPadding={{ right: 16 }}>
        {!!user.node.active && (
          <DropdownMenuItem
            onSelect={() => onUpdateUserRole(user.node)}
            className="cursor-pointer"
          >
            <span className="ml-2">
              {user.node.isAdmin ? 'Downgrade to member' : 'Upgrade to admin'}
            </span>
          </DropdownMenuItem>
        )}
        {!!user.node.active && (
          <DropdownMenuItem
            onSelect={() => onUpdateUserActive(user.node, false)}
            className="cursor-pointer"
          >
            <span className="ml-2">Deactivate</span>
          </DropdownMenuItem>
        )}
        {!user.node.active && (
          <DropdownMenuItem
            onSelect={() => onUpdateUserActive(user.node, true)}
            className="cursor-pointer"
          >
            <span className="ml-2">Activate</span>
          </DropdownMenuItem>
        )}
        <DropdownMenuItem
          onSelect={e => {
            e.preventDefault()
            handleGenerateResetPassworkURL()
          }}
          className="cursor-pointer gap-1"
        >
          <span className="ml-2">Initate resetting password</span>
          <div className="h-4 w-4">
            {submitting && <IconSpinner />}
            {isCopied && <IconCheck className="text-green-600" />}
          </div>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
