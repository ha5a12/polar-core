import { useRef, useState } from 'react'
import { useWindowSize } from '@uidotdev/usehooks'

import { ContextInfo } from '@/lib/gql/generates/graphql'
import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
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
  IconCheck,
  IconChevronUpDown,
  IconFolderGit,
  IconRemove
} from '@/components/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingWrapper from '@/components/loading-wrapper'

import { SourceIcon } from '../source-icon'

interface RepoSelectProps {
  repos: ContextInfo['sources']
  value: string | undefined
  onChange: (v: string | undefined) => void
  isInitializing?: boolean
  // sourceId
  workspaceRepoId?: string
}

export function RepoSelect({
  repos,
  value,
  onChange,
  isInitializing,
  workspaceRepoId
}: RepoSelectProps) {
  const [open, setOpen] = useState(false)
  const commandListRef = useRef<HTMLDivElement>(null)

  const { width } = useWindowSize()
  const isExtraSmallScreen = typeof width === 'number' && width < 360

  const onSelectRepo = (v: string) => {
    onChange(v)
  }

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

  const selectedRepo = value
    ? repos?.find(repo => repo.sourceId === value)
    : undefined
  const selectedRepoName = selectedRepo?.sourceName

  // if there's no repo, hide the repo select
  if (!isInitializing && !repos.length) return null

  return (
    <LoadingWrapper
      loading={isInitializing}
      fallback={
        <div className="w-full pl-2">
          <Skeleton className="h-3 w-[10rem]" />
        </div>
      }
    >
      <Popover open={open} onOpenChange={setOpen}>
        <Badge
          variant="outline"
          className="h-7 items-center gap-1 overflow-hidden break-all rounded-md px-0 text-sm font-semibold hover:bg-muted/50"
        >
          <PopoverTrigger className="outline-none" asChild>
            <div
              className={cn(
                'flex flex-1 cursor-pointer items-center gap-1.5 overflow-hidden pl-2.5',
                {
                  'min-w-[10rem]': !selectedRepo
                }
              )}
            >
              {selectedRepo ? (
                <SourceIcon
                  kind={selectedRepo.sourceKind}
                  className="h-3.5 w-3.5 shrink-0"
                />
              ) : (
                <IconFolderGit className="shrink-0" />
              )}
              <div className="flex flex-1 items-center gap-1.5 truncate break-all">
                <span
                  className={cn('truncate', {
                    'text-muted-foreground': !selectedRepoName
                  })}
                >
                  {selectedRepoName || 'Workspace'}
                </span>
              </div>
              {!value && (
                <div className="flex h-7 w-7 shrink-0 items-center justify-center">
                  <IconChevronUpDown />
                </div>
              )}
            </div>
          </PopoverTrigger>
          {!!value && (
            <Button
              type="button"
              size="icon"
              variant="ghost"
              className="h-7 w-7 shrink-0 rounded-l-none bg-background"
              onClick={e => {
                e.stopPropagation()
                onChange(undefined)
              }}
            >
              <IconRemove />
            </Button>
          )}
        </Badge>
        <PopoverContent
          side="top"
          align="start"
          className="dropdown-menu w-[80vw] overflow-x-hidden rounded-md border bg-popover p-2 text-popover-foreground shadow animate-in"
        >
          <Command>
            <CommandInput
              placeholder="Search context..."
              onValueChange={onSearchChange}
            />
            <CommandList className="max-h-[30vh]" ref={commandListRef}>
              <CommandEmpty>No context found</CommandEmpty>
              <CommandGroup>
                {repos.map(repo => {
                  const isSelected = repo.sourceId === value

                  return (
                    <CommandItem
                      key={repo.sourceId}
                      onSelect={() => {
                        onSelectRepo(repo.sourceId)
                        setOpen(false)
                      }}
                      title={repo.sourceName}
                    >
                      <IconCheck
                        className={cn(
                          'mr-1 shrink-0',
                          repo.sourceId === value ? 'opacity-100' : 'opacity-0'
                        )}
                      />
                      <div className="flex flex-1 items-center gap-1 overflow-x-hidden">
                        <SourceIcon
                          kind={repo.sourceKind}
                          className="shrink-0"
                        />
                        <div
                          className={cn('truncate font-medium', {
                            'font-semibold': isSelected
                          })}
                        >
                          {repo.sourceName}
                        </div>
                      </div>
                    </CommandItem>
                  )
                })}
              </CommandGroup>
            </CommandList>
          </Command>
        </PopoverContent>
      </Popover>
    </LoadingWrapper>
  )
}
