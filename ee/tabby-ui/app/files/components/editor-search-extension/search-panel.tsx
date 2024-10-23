import { useEffect } from 'react'
import { createRoot, Root } from 'react-dom/client'

import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  IconCaseSensitive,
  IconChevronLeft,
  IconChevronRight,
  IconClose,
  IconRegex
} from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Toggle } from '@/components/ui/toggle'

import {
  SearchPanelState,
  SearchPanelView,
  SearchPanelViewCreationOptions
} from './search'

export class SearchPanel implements SearchPanelView {
  private root: Root
  public input: HTMLInputElement | null = null

  constructor(private options: SearchPanelViewCreationOptions) {
    this.root = createRoot(this.options.root)
    this.render(options.initialState)
  }

  public update(state: SearchPanelState): void {
    this.render(state)
  }

  public destroy(): void {
    this.root.unmount()
  }

  private render({
    searchQuery,
    inputValue,
    currentMatchIndex,
    matches
  }: SearchPanelState): void {
    const totalMatches = matches.size

    this.root.render(
      <Container
        onMount={() => {
          this.input?.focus()
        }}
      >
        <div className="flex items-center justify-between py-2 pl-3 bg-secondary text-secondary-foreground ">
          <div className="flex-1 flex items-center gap-2">
            <div className={cn('cm-text-editor-search-input relative')}>
              <Input
                ref={element => (this.input = element)}
                className="max-w-[300px] pr-24 bg-input/40"
                placeholder="Find..."
                autoComplete="off"
                value={inputValue}
                onChange={event => this.options.onSearch(event.target.value)}
              />
              <div
                className="absolute top-0 right-2 flex items-center gap-1"
                onClick={e => {
                  this.input?.focus()
                }}
              >
                <Toggle
                  pressed={searchQuery.caseSensitive}
                  onPressedChange={v => this.options.setCaseSensitive(v)}
                  size="sm"
                >
                  <IconCaseSensitive />
                </Toggle>
                <Toggle
                  pressed={searchQuery.regexp}
                  onPressedChange={v => this.options.setRegexp(v)}
                  size="sm"
                >
                  <IconRegex />
                </Toggle>
              </div>
            </div>
            {totalMatches > 1 && (
              <div className="space-x-1">
                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={this.options.findPrevious}
                  aria-label="previous result"
                >
                  <IconChevronLeft />
                </Button>

                <Button
                  type="button"
                  size="icon"
                  variant="secondary"
                  onClick={this.options.findNext}
                  aria-label="next result"
                >
                  <IconChevronRight />
                </Button>
              </div>
            )}

            {searchQuery.search ? (
              <div className="text-sm">
                {currentMatchIndex !== null && `${currentMatchIndex} of `}{' '}
                {totalMatches} {totalMatches <= 1 ? 'result' : 'results'}
              </div>
            ) : null}
          </div>
          <Button
            className="shrink-0"
            size="icon"
            variant="ghost"
            onClick={e => this.options.close()}
          >
            <IconClose />
          </Button>
        </div>
      </Container>
    )
  }
}

function Container({
  children,
  onMount
}: React.PropsWithChildren<{
  onMount: () => void
  // onRender: () => void
}>) {
  useEffect(() => {
    onMount?.()
  }, [])

  return <>{children}</>
}
