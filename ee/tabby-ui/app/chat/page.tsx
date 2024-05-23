'use client'

import { useRef, useState } from 'react'
import type { ChatMessage, Context, FetcherOptions } from 'tabby-chat-panel'
import { useServer } from 'tabby-chat-panel/react'

import { nanoid } from '@/lib/utils'
import { Chat, ChatRef } from '@/components/chat/chat'
import { QuestionAnswerPair } from '@/lib/types/chat'

export default function ChatPage() {
  const [isInit, setIsInit] = useState(false)
  const [fetcherOptions, setFetcherOptions] = useState<FetcherOptions | null>(
    null
  )
  const [activeChatId, setActiveChatId] = useState('')
  const [initialMessages, setInitialMessages] = useState<QuestionAnswerPair[]>([])
  const chatRef = useRef<ChatRef>(null)

  const sendMessage = (message: ChatMessage) => {
    if (chatRef.current) {
      chatRef.current.sendUserChat(message)
    } else {
      const newInitialMessages = [...initialMessages]
      newInitialMessages.push({
        user: {
          ...message,
          id: nanoid()
        }
      })
      setInitialMessages(newInitialMessages)
    }
  }

  const server = useServer({
    init: request => {
      if (chatRef.current) return
      setActiveChatId(nanoid())
      setIsInit(true)
      setFetcherOptions(request.fetcherOptions)
    },
    sendMessage: (message: ChatMessage) => {
      return sendMessage(message)
    }
  })

  const onNavigateToContext = (context: Context) => {
    server?.navigate(context)
  }

  if (!isInit || !fetcherOptions) return <></>
  const headers = {
    Authorization: `Bearer ${fetcherOptions.authorization}`
  }
  return (
    <Chat
      chatId={activeChatId}
      key={activeChatId}
      ref={chatRef}
      headers={headers}
      initialMessages={initialMessages}
      onThreadUpdates={() => {}}
      onNavigateToContext={onNavigateToContext}
    />
  )
}
