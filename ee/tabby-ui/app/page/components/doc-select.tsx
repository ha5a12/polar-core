import { useRef, useState } from 'react'

import { ContextInfo } from '@/lib/gql/generates/graphql'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator
} from '@/components/ui/command'
import { IconCheck, IconEmojiBook } from '@/components/ui/icons'
import {
  Popover,
  PopoverContent,
  PopoverTrigger
} from '@/components/ui/popover'
import { Skeleton } from '@/components/ui/skeleton'
import LoadingWrapper from '@/components/loading-wrapper'
import { SourceIcon } from '@/components/source-icon'

interface RepoSelectProps {
  docs: ContextInfo['sources'] | undefined
  value: string | undefined
  onChange: (v: string | undefined) => void
  isInitializing?: boolean
}

export function DocSelect({
  docs,
  value,
  onChange,
  isInitializing
}: RepoSelectProps) {
  const [open, setOpen] = useState(false)
  const commandListRef = useRef<HTMLDivElement>(null)

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

  const selectedDoc = value
    ? docs?.find(repo => repo.sourceId === value)
    : undefined
  const selectedRepoName = selectedDoc?.sourceName

  // if there's no repo, hide the repo select
  if (!isInitializing && !docs?.length) return null

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
        <PopoverTrigger className="outline-none" asChild>
          <Button
            variant="ghost"
            className="gap-2 px-1.5 py-1 font-normal"
            title={selectedRepoName || 'select docs'}
          >
            <IconEmojiBook />
            <div className="flex flex-1 items-center gap-1.5 truncate break-all">
              <span
                className={cn('truncate', {
                  'text-muted-foreground': !selectedRepoName
                })}
              >
                {selectedRepoName || 'Docs'}
              </span>
            </div>
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="bottom"
          align="start"
          className="max-h-[50vh] min-w-[20vw] max-w-[80vw] overflow-x-hidden rounded-md border bg-popover p-2 pb-0 text-popover-foreground shadow animate-in"
        >
          <Command>
            <CommandInput
              placeholder="Search docs..."
              onValueChange={onSearchChange}
            />
            <CommandList className="max-h-[30vh]" ref={commandListRef}>
              <CommandEmpty>No context found</CommandEmpty>
              <CommandGroup>
                {docs?.map(repo => {
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
                          className={cn('truncate', {
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
            <CommandSeparator />
            <CommandGroup>
              <CommandItem
                disabled={!value}
                className="flex justify-center"
                onSelect={() => {
                  onChange(undefined)
                  setOpen(false)
                }}
              >
                Clear
              </CommandItem>
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>
    </LoadingWrapper>
  )
}
