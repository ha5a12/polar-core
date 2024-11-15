'use client'

import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import tabbyUrl from '@/assets/logo-dark.png'
import { useQuery } from 'urql'
import { useStore } from 'zustand'

import { SESSION_STORAGE_KEY } from '@/lib/constants'
import { useMe } from '@/lib/hooks/use-me'
import { useSelectedModel } from '@/lib/hooks/use-models'
import {
  useIsChatEnabled,
  useIsFetchingServerInfo
} from '@/lib/hooks/use-server-info'
import { setThreadsPageNo } from '@/lib/stores/answer-engine-store'
import { updateSelectedModel } from '@/lib/stores/chat-actions'
import {
  clearHomeScrollPosition,
  setHomeScrollPosition,
  useScrollStore
} from '@/lib/stores/scroll-store'
import { contextInfoQuery } from '@/lib/tabby/query'
import { ThreadRunContexts } from '@/lib/types'
import { cn } from '@/lib/utils'
import { ScrollArea } from '@/components/ui/scroll-area'
import { ClientOnly } from '@/components/client-only'
import { BANNER_HEIGHT, useShowDemoBanner } from '@/components/demo-banner'
import SlackDialog from '@/components/slack-dialog'
import TextAreaSearch from '@/components/textarea-search'
import { ThemeToggle } from '@/components/theme-toggle'
import { MyAvatar } from '@/components/user-avatar'
import UserPanel from '@/components/user-panel'

import { AnimationWrapper } from './components/animation-wrapper'
import Stats from './components/stats'
import { ThreadFeeds } from './components/thread-feeds'

function MainPanel() {
  const resettingScroller = useRef(false)
  const scroller = useRef<HTMLDivElement>(null)
  const [{ data }] = useMe()
  const isFetchingServerInfo = useIsFetchingServerInfo()
  const isChatEnabled = useIsChatEnabled()
  const [isShowDemoBanner] = useShowDemoBanner()
  const elementRef = useRef<HTMLDivElement | null>(null)
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [{ data: contextInfoData, fetching: fetchingContextInfo }] = useQuery({
    query: contextInfoQuery
  })
  const scrollY = useStore(useScrollStore, state => state.homePage)

  const { selectedModel, isModelLoading, models } = useSelectedModel()

  const showMainSection = !!data?.me || !isFetchingServerInfo

  // Prefetch the search page
  useEffect(() => {
    router.prefetch('/search')
  }, [router])

  useLayoutEffect(() => {
    const resetScroll = () => {
      if (scrollY) {
        setTimeout(() => {
          scroller.current?.scrollTo({
            top: Number(scrollY)
          })
          clearHomeScrollPosition()
        })
      }
    }

    if (resettingScroller.current) return
    resetScroll()
    resettingScroller.current = true
  }, [])

  const handleSelectModel = (model: string) => {
    updateSelectedModel(model)
  }

  const onSearch = (question: string, ctx?: ThreadRunContexts) => {
    setIsLoading(true)
    sessionStorage.setItem(SESSION_STORAGE_KEY.SEARCH_INITIAL_MSG, question)
    sessionStorage.setItem(
      SESSION_STORAGE_KEY.SEARCH_INITIAL_CONTEXTS,
      JSON.stringify(ctx)
    )
    router.push('/search')
  }

  const style = isShowDemoBanner
    ? { height: `calc(100vh - ${BANNER_HEIGHT})` }
    : { height: '100vh' }

  return (
    <ScrollArea style={style} ref={scroller}>
      <header
        className="transition-top fixed right-0 z-10 flex h-16 items-center justify-end px-4 lg:px-10"
        style={{
          top: isShowDemoBanner ? BANNER_HEIGHT : 0
        }}
      >
        <div className="flex items-center gap-x-6">
          <ClientOnly>
            <ThemeToggle />
          </ClientOnly>
          <UserPanel showHome={false} showSetting>
            <MyAvatar className="h-10 w-10 border" />
          </UserPanel>
        </div>
      </header>

      {showMainSection && (
        <main
          className="flex-col items-center justify-center pb-4 pt-16 lg:flex"
          ref={elementRef}
        >
          <div className="mx-auto flex w-full flex-col items-center gap-6 px-10 lg:-mt-[2vh] lg:max-w-4xl lg:px-0">
            <AnimationWrapper
              viewport={{
                margin: '-70px 0px 0px 0px'
              }}
            >
              <Image
                src={tabbyUrl}
                alt="logo"
                width={192}
                className={cn('mt-4 invert dark:invert-0', {
                  'mb-4': isChatEnabled,
                  'mb-2': !isChatEnabled
                })}
              />
            </AnimationWrapper>
            {isChatEnabled && (
              <AnimationWrapper
                viewport={{ margin: '-140px 0px 0px 0px' }}
                style={{ width: '100%' }}
                delay={0.05}
              >
                <TextAreaSearch
                  onSearch={onSearch}
                  showBetaBadge
                  autoFocus
                  loadingWithSpinning
                  isLoading={isLoading}
                  cleanAfterSearch={false}
                  contextInfo={contextInfoData?.contextInfo}
                  fetchingContextInfo={fetchingContextInfo}
                  modelName={selectedModel}
                  onModelSelect={handleSelectModel}
                  isModelLoading={isModelLoading}
                  models={models}
                />
              </AnimationWrapper>
            )}
            <Stats />
            <ThreadFeeds
              className="lg:mt-8"
              onNavigateToThread={({ pageNo }) => {
                if (!scroller.current) return
                setHomeScrollPosition(scroller.current.scrollTop)
                setThreadsPageNo(pageNo)
              }}
            />
          </div>
        </main>
      )}
    </ScrollArea>
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
