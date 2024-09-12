import {
  HTMLAttributes,
  useContext,
  useEffect,
  useMemo,
  useRef,
  useState
} from 'react'
import { pick } from 'lodash-es'
import { useInView } from 'react-intersection-observer'
import { toast } from 'sonner'

import { graphql } from '@/lib/gql/generates'
import {
  UpsertUserGroupMembershipInput,
  User,
  UserGroupMembership,
  UserGroupsQuery
} from '@/lib/gql/generates/graphql'
import { useMutation } from '@/lib/tabby/gql'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList
} from '@/components/ui/command'
import {
  IconChevronUpDown,
  IconPlus,
  IconSpinner,
  IconTrash,
  IconUser
} from '@/components/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/components/ui/select'
import { Table, TableBody, TableCell, TableRow } from '@/components/ui/table'

import { UserGroupItemContext } from './user-group-item'
import { UserGroupContext } from './user-group-page'

const deleteUserGroupMembershipMutation = graphql(/* GraphQL */ `
  mutation DeleteUserGroupMembership($userGroupId: ID!, $userId: ID!) {
    deleteUserGroupMembership(userGroupId: $userGroupId, userId: $userId)
  }
`)

const upsertUserGroupMembershipMutation = graphql(/* GraphQL */ `
  mutation UpsertUserGroupMembership($input: UpsertUserGroupMembershipInput!) {
    upsertUserGroupMembership(input: $input)
  }
`)

interface MembershipViewProps extends HTMLAttributes<HTMLDivElement> {
  userGroupId: string
  userGroupName: string
  members: UserGroupMembership[]
  editable: boolean
}

export function MembershipView({
  className,
  members: propsMembers,
  editable
}: MembershipViewProps) {
  const containerRef = useRef<HTMLDivElement>(null)
  const [members, setMembers] = useState(propsMembers)
  const [emptyItemVisible, setEmptyItemVisible] = useState(false)

  useEffect(() => {
    setMembers(propsMembers)
  }, [propsMembers])

  const handleAddMember = () => {
    if (!emptyItemVisible) {
      setEmptyItemVisible(true)
    }

    // const container = containerRef.current?.children?.[1] as HTMLDivElement
    // if (container) {
    //   setTimeout(() => {
    //     container.scrollTo({
    //       top: container.scrollHeight,
    //       behavior: 'smooth'
    //     })
    //   }, 100)
    // }
  }

  return (
    <div className={cn('flex-col gap-1 overflow-hidden border-b', className)}>
      {/* <ScrollArea ref={containerRef} className="flex-1 pt-2 px-1"> */}
      <Table>
        <TableBody>
          {members?.map(member => {
            return (
              <MembershipItem
                key={member.user.id}
                member={member}
                // onUpdate={() => {
                //   // todo cache?
                //   refreshUserGroups()
                // }}
                onRemoveEmptyItem={() => setEmptyItemVisible(false)}
              />
            )
          })}
          {emptyItemVisible && (
            <MembershipItem
              onRemoveEmptyItem={() => setEmptyItemVisible(false)}
            />
          )}
        </TableBody>
      </Table>
      {/* </ScrollArea> */}
      {editable && (
        <div className="mb-4 mt-2 ml-3 flex justify-start">
          <Button variant="outline" onClick={handleAddMember}>
            <IconPlus className="mr-2" />
            Add Member
          </Button>
        </div>
      )}
    </div>
  )
}

interface MembershipItemProps {
  member?: UserGroupMembership
  // onUpdate: () => void
  onRemoveEmptyItem: () => void
}

function roleToSelectItemValue(role: string) {
  return role === '1'
}

function MembershipItem({ member, onRemoveEmptyItem }: MembershipItemProps) {
  const { isServerAdmin, memberIds, userGroupId } =
    useContext(UserGroupItemContext)

  const [role, setRole] = useState(
    !isServerAdmin ? '0' : memberIds.length ? '0' : '1'
  )

  // update role after call upsert endpoint
  useEffect(() => {
    if (!!member && member.isGroupAdmin !== roleToSelectItemValue(role)) {
      setRole(member.isGroupAdmin ? '1' : '0')
    }
  }, [member])

  const deleteUserGroupMembership = useMutation(
    deleteUserGroupMembershipMutation
  )
  const upsertUserGroupMembership = useMutation(
    upsertUserGroupMembershipMutation
  )

  const handleDeleteUserGroupMembership = () => {
    if (!member) {
      onRemoveEmptyItem()
      return
    }
    deleteUserGroupMembership({
      userGroupId,
      userId: member.user.id
    })
      .then(res => {
        if (!res?.data?.deleteUserGroupMembership) {
          const errorMessage =
            res?.error?.message ||
            `Failed to delete ${member.user.name || member.user.email}`
          toast.error(errorMessage)
          return
        }
      })
      .catch(error => {
        toast.error(
          error.message ||
            `Failed to delete ${member.user.name || member.user.email}`
        )
      })
  }

  const handleUpsertUserGroupMembership = (
    isInsert: boolean,
    input: UpsertUserGroupMembershipInput,
    user: User
  ) => {
    const prevRole = role

    return upsertUserGroupMembership({ input, extraParams: { user, isInsert } })
      .then(res => {
        if (!res?.data?.upsertUserGroupMembership) {
          const errorMessage =
            res?.error?.message || `Failed to update ${user.name || user.email}`
          toast.error(errorMessage)
          setRole(prevRole)
          return
        }
      })
      .catch(error => {
        toast.error(
          error.message || `Failed to update ${user.name || user.email}`
        )
        setRole(prevRole)
      })
  }

  const onRoleChange = (role: string) => {
    setRole(role)

    if (member) {
      handleUpsertUserGroupMembership(
        false,
        {
          userGroupId,
          userId: member.user.id,
          isGroupAdmin: role === '1'
        },
        member.user
      )
    }
  }

  const onSelectMember = (userId: string, user: User) => {
    handleUpsertUserGroupMembership(
      true,
      {
        userId,
        userGroupId,
        isGroupAdmin: role === '1'
      },
      pick(user, 'createdAt', 'id', 'name', 'email')
    )
    onRemoveEmptyItem()
  }

  return (
    <TableRow className="border-0 !bg-background pl-1">
      <TableCell>
        <MemberSelect membership={member} onChange={onSelectMember} />
      </TableCell>
      <TableCell className="w-[30%]">
        <Select
          onValueChange={onRoleChange}
          value={role}
          disabled={!isServerAdmin}
        >
          <SelectTrigger>
            <SelectValue placeholder="Select role" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="1">Group Admin</SelectItem>
            <SelectItem value="0">Group Member</SelectItem>
          </SelectContent>
        </Select>
      </TableCell>
      <TableCell className="text-right">
        <Button
          size="icon"
          variant="hover-destructive"
          onClick={handleDeleteUserGroupMembership}
        >
          <IconTrash />
        </Button>
      </TableCell>
    </TableRow>
  )
}

function MemberSelect({
  membership,
  onChange
}: {
  membership?: UserGroupMembership
  onChange: (userId: string, user: User) => void
}) {
  const userId = membership?.user.id
  const { fetchingAllUsers, allUsers } = useContext(UserGroupContext)
  const { memberIds } = useContext(UserGroupItemContext)
  const [open, setOpen] = useState(false)
  const commandListRef = useRef<HTMLDivElement>(null)
  const options = useMemo(() => {
    return allUsers.filter(user => {
      return !memberIds.includes(user.id)
    })
  }, [memberIds, allUsers])
  const scrollCommandListToTop = () => {
    requestAnimationFrame(() => {
      if (commandListRef.current) {
        commandListRef.current.scrollTop = 0
      }
    })
  }

  const onSearchChange = () => {
    scrollCommandListToTop()
  }

  const selectMember = (id: string) => {
    setOpen(false)
    onChange(id, options.find(user => user.id === id) as User)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          className={cn('h-9 w-full justify-between font-normal', {
            'text-muted-foreground hover:text-muted-foreground': !userId,
            'cursor-auto shadow-none hover:bg-background': !!userId
          })}
          onClick={e => {
            if (userId) {
              e.preventDefault()
            }
          }}
        >
          {fetchingAllUsers ? (
            'Loading...'
          ) : userId ? (
            <UserInfoView user={membership.user} />
          ) : (
            'Select member'
          )}
          {!userId && <IconChevronUpDown />}
        </Button>
      </PopoverTrigger>
      <PopoverContent
        className="w-[var(--radix-popover-trigger-width)] p-0"
        align="start"
        side="bottom"
      >
        <Command className="transition-all">
          <CommandInput
            placeholder="Search member..."
            onValueChange={onSearchChange}
          />
          <CommandList className="max-h-[30vh]" ref={commandListRef}>
            <CommandEmpty>
              {fetchingAllUsers ? (
                <div className="flex justify-center">
                  <IconSpinner className="h-6 w-6" />
                </div>
              ) : (
                'No user found'
              )}
            </CommandEmpty>
            <CommandGroup>
              {options.map(user => (
                <CommandItem
                  key={user.id}
                  onSelect={selectMember}
                  value={user.id}
                >
                  <UserInfoView user={user} />
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  )
}

function UserInfoView({ user }: { user: UserGroupMembership['user'] }) {
  const userName = user.name
  return (
    <div className="flex items-center gap-2">
      <IconUser />
      <span className="space-x-1">
        {user.name}
        <span
          className={cn('text-sm', {
            'text-muted-foreground': !!userName
          })}
        >
          {userName ? `(${user.email})` : user.email}
        </span>
      </span>
    </div>
  )
}
