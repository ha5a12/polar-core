'use client'

import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import logoDarkUrl from '@/assets/logo-dark.png'
import logoUrl from '@/assets/logo.png'
import tabbyUrl from '@/assets/tabby.png'
import AOS from 'aos'
import { noop } from 'lodash-es'
import { useTheme } from 'next-themes'

import { useEnableSearch } from '@/lib/experiment-flags'
import { graphql } from '@/lib/gql/generates'
import { useHealth } from '@/lib/hooks/use-health'
import { useMe } from '@/lib/hooks/use-me'
import { useExternalURL } from '@/lib/hooks/use-network-setting'
import { useIsChatEnabled } from '@/lib/hooks/use-server-info'
import { useMutation } from '@/lib/tabby/gql'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { CardContent, CardFooter } from '@/components/ui/card'
import { IconJetBrains, IconRotate, IconVSCode } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger
} from '@/components/ui/tooltip'
import { ClientOnly } from '@/components/client-only'
import { CopyButton } from '@/components/copy-button'
import { BANNER_HEIGHT, useShowDemoBanner } from '@/components/demo-banner'
import SlackDialog from '@/components/slack-dialog'
import TextAreaSearch from '@/components/textarea-search'
import { ThemeToggle } from '@/components/theme-toggle'
import { UserAvatar } from '@/components/user-avatar'
import UserPanel from '@/components/user-panel'

import { Search, SearchRef } from './components/search'
import Stats from './components/stats'

import 'aos/dist/aos.css'

const resetUserAuthTokenDocument = graphql(/* GraphQL */ `
  mutation ResetUserAuthToken {
    resetUserAuthToken
  }
`)

function Configuration({ className }: { className?: string }) {
  const [{ data }, reexecuteQuery] = useMe()
  const externalUrl = useExternalURL()

  const resetUserAuthToken = useMutation(resetUserAuthTokenDocument, {
    onCompleted: () => reexecuteQuery()
  })

  if (!data?.me) return <></>

  return (
    <div className={className}>
      <CardContent className="flex flex-col gap-6 px-0">
        <div className="flex flex-col">
          <span className="flex items-center gap-1">
            <Label className="text-xs font-semibold">Endpoint URL</Label>
            <CopyButton value={externalUrl} />
          </span>
          <span className="flex items-center gap-1">
            <Input
              value={externalUrl}
              onChange={noop}
              className="h-7 max-w-[320px] rounded-none border-x-0 !border-t-0 border-muted-foreground p-0 shadow-none dark:border-primary/50"
            />
          </span>
        </div>

        <div className="flex flex-col">
          <span className="flex items-center gap-1">
            <Label className="text-xs font-semibold">Token</Label>
            <CopyButton value={data.me.authToken} />
            <Button
              title="Rotate"
              size="icon"
              variant="hover-destructive"
              onClick={() => resetUserAuthToken()}
            >
              <IconRotate />
            </Button>
          </span>
          <span className="flex items-center gap-1">
            <Input
              className="h-7 max-w-[320px] rounded-none border-x-0 !border-t-0 border-muted-foreground p-0 font-mono shadow-none dark:border-primary/50"
              value={data.me.authToken}
              onChange={noop}
            />
          </span>
        </div>
      </CardContent>
      <CardFooter className="px-0 pb-2 text-xs text-muted-foreground">
        <span>
          Use information above for IDE extensions / plugins configuration, see{' '}
          <a
            className="underline"
            target="_blank"
            href="https://tabby.tabbyml.com/docs/extensions/configurations#server"
          >
            documentation website
          </a>{' '}
          for details
        </span>
      </CardFooter>

      <div className="mb-6 mt-3 flex gap-x-3 lg:mb-0">
        <IDELink
          href="https://marketplace.visualstudio.com/items?itemName=TabbyML.vscode-tabby"
          name="Visual Studio Code"
          icon={<IconVSCode className="h-5 w-5" />}
        />
        <IDELink
          href="https://plugins.jetbrains.com/plugin/22379-tabby"
          name="JetBrains"
          icon={<IconJetBrains className="h-5 w-5" />}
        />
      </div>
    </div>
  )
}

function IDELink({
  href,
  name,
  icon
}: {
  href: string
  name: string
  icon: React.ReactNode
}) {
  return (
    <Tooltip>
      <TooltipTrigger>
        <Link
          href={href}
          className="transition-all hover:opacity-80 dark:text-muted-foreground"
          target="_blank"
        >
          {icon}
        </Link>
      </TooltipTrigger>
      <TooltipContent>
        <p>{name}</p>
      </TooltipContent>
    </Tooltip>
  )
}

function MainPanel() {
  const [searchFlag] = useEnableSearch()
  const { data: healthInfo } = useHealth()
  const [{ data }] = useMe()
  const isChatEnabled = useIsChatEnabled()
  const { theme } = useTheme()
  const [isShowDemoBanner] = useShowDemoBanner()
  const [isSearch, setIsSearch] = useState(false)
  const [initialMsg, setInitialMsg] = useState('')
  const elementRef = useRef<HTMLDivElement | null>(null)
  const searchRef = useRef<SearchRef>(null)

  useEffect(() => {
    setTimeout(() => {
      if (elementRef.current) {
        const disable =
          elementRef.current.scrollHeight > elementRef.current.clientHeight
        AOS.init({
          once: true,
          duration: 250,
          disable
        })
      }
    }, 100)
  }, [elementRef.current])

  useEffect(() => {
    if (isSearch && searchRef.current) {
      searchRef.current.onSubmitSearch(initialMsg)
    }
    if (!isSearch) {
      document.title = 'Tabby'
    }
  }, [isSearch])

  if (!healthInfo || !data?.me) return <></>

  const onSearch = (question: string) => {
    setInitialMsg(question)
    setIsSearch(true)
  }

  const hideSearch = () => {
    if (searchRef.current) {
      searchRef.current.stop()
    }
    setIsSearch(false)
  }

  const style = isShowDemoBanner
    ? { height: `calc(100vh - ${BANNER_HEIGHT})` }
    : { height: '100vh' }
  return (
    <div className="transition-all" style={style}>
      <header className="flex h-16 items-center justify-between px-10">
        <div>
          {isSearch && (
            <Image
              src={theme === 'dark' ? logoDarkUrl : logoUrl}
              className="cursor-pointer"
              alt="logo"
              width={80}
              onClick={hideSearch}
            />
          )}
        </div>
        <div className="flex items-center gap-x-3">
          <ClientOnly>
            <ThemeToggle />
          </ClientOnly>
          <UserPanel>
            <UserAvatar className="h-10 w-10 border" />
          </UserPanel>
        </div>
      </header>

      <main
        className={cn('h-[calc(100%-4rem)] overflow-auto py-10 lg:py-0', {
          'lg:flex flex-col items-center justify-center': !isSearch
        })}
        ref={elementRef}
      >
        {!isSearch && (
          <div className="mx-auto flex w-full flex-col items-center px-10 lg:-mt-[2vh] lg:max-w-4xl lg:px-0">
            <Image
              src={tabbyUrl}
              alt="logo"
              width={45}
              data-aos="fade-down"
              data-aos-delay="150"
            />
            <p
              className="mb-6 scroll-m-20 text-xl font-semibold tracking-tight text-secondary-foreground"
              data-aos="fade-down"
              data-aos-delay="100"
            >
              The Private Search Assistant
            </p>
            {isChatEnabled && searchFlag.value && (
              <div className="w-full" data-aos="fade-down">
                <TextAreaSearch onSearch={onSearch} isExpanded />
              </div>
            )}
            <div className="mt-10 flex w-full flex-col gap-x-5 lg:flex-row">
              <div
                className="mb-10 w-full rounded-lg p-4 lg:mb-0 lg:w-[21rem]"
                style={{ background: theme === 'dark' ? '#423929' : '#e8e1d3' }}
                data-aos="fade-up"
                data-aos-delay="100"
              >
                <Configuration />
              </div>
              <Stats />
            </div>
          </div>
        )}
        {isSearch && <Search ref={searchRef} />}
      </main>
    </div>
  )
}

export default function Home() {
  return (
    <div>
      <MainPanel />
      <SlackDialog />
    </div>
  )
}
