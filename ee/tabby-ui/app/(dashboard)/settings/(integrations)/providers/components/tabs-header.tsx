'use client'

import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { cva } from 'class-variance-authority'

import { cn } from '@/lib/utils'
import { Badge } from '@/components/ui/badge'
import { BANNER_HEIGHT, useShowDemoBanner } from '@/components/demo-banner'

import { PROVIDER_KIND_METAS } from '../constants'

const linkVariants = cva(
  'flex items-center gap-1 rounded-lg px-3 py-2 transition-all hover:bg-accent',
  {
    variants: {
      state: {
        selected: 'bg-accent',
        'not-selected': ''
      }
    },
    defaultVariants: {
      state: 'not-selected'
    }
  }
)

interface SidebarButtonProps {
  href: string
  children: React.ReactNode
}

export default function NavBar({ className }: { className?: string }) {
  const [isShowDemoBanner] = useShowDemoBanner()

  const style = isShowDemoBanner
    ? { height: `calc(100vh - ${BANNER_HEIGHT} - 4rem)` }
    : { height: 'calc(100vh - 4rem)' }

  return (
    <div
      className={cn(
        'space-y-1 border-r pr-4 text-sm font-medium sticky top-16',
        className
      )}
      style={style}
    >
      <SidebarButton href="/settings/providers/git">Git</SidebarButton>
      {PROVIDER_KIND_METAS.map(provider => {
        return (
          <SidebarButton
            href={`/settings/providers/${provider.name}`}
            key={provider.name}
          >
            {provider.meta.displayName}
          </SidebarButton>
        )
      })}
      <SidebarButton href="/settings/providers/web">
        Web
        <Badge className="text-[10px] h-4 px-1.5">Beta</Badge>
      </SidebarButton>
    </div>
  )
}

function SidebarButton({ href, children }: SidebarButtonProps) {
  const pathname = usePathname()
  const isSelected = React.useMemo(() => {
    const matcher = pathname.match(/^(\/settings\/providers\/[\w-]+)/)?.[1]
    return matcher === href
  }, [pathname, href])

  const state = isSelected ? 'selected' : 'not-selected'
  return (
    <Link className={cn('relative', linkVariants({ state }))} href={href}>
      {children}
    </Link>
  )
}
