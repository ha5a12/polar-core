import { createThreadFromIframe, createThreadFromInsideIframe } from '@quilted/threads'

export interface LineRange {
  start: number
  end: number
}

export interface FileContext {
  kind: 'file'
  range: LineRange
  filepath: string
  content: string
  git_url: string
}

export type Context = FileContext

export interface FetcherOptions {
  authorization: string
}

export interface InitRequest {
  fetcherOptions: FetcherOptions
}

export interface ServerApi {
  init: (request: InitRequest) => void
  sendMessage: (message: ChatMessage) => void

}

export interface ClientApi {
  navigate: (context: Context) => void
}

export interface ChatMessage {
  message: string
  selectContext?: Context
  relevantContext?: Array<Context>
}

export function createClient(target: HTMLIFrameElement, api: ClientApi, signal?: AbortSignal): ServerApi {
  return createThreadFromIframe(target, {
    expose: {
      navigate: api.navigate,
    },
    signal
  })
}

export function createServer(api: ServerApi, signal?: AbortSignal): ClientApi {
  return createThreadFromInsideIframe({
    expose: {
      init: api.init,
      sendMessage: api.sendMessage,
    },
    signal
  })
}
