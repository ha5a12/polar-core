import { Metadata } from 'next'

import { ScrollArea } from '@/components/ui/scroll-area'
import { Header } from '@/components/header'

import Sidebar from './components/sidebar'

export const metadata: Metadata = {
  title: {
    default: 'Home',
    template: `Tabby - %s`
  }
}

interface DashboardLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: DashboardLayoutProps) {
  return (
    <main className="flex h-full w-full">
      <Sidebar />
      <ScrollArea className="flex h-[100vh] flex-1 flex-col">
        <Header />
        <div className="flex-1 p-4 lg:p-10">{children}</div>
      </ScrollArea>
    </main>
  )
}
