'use client'

import { PropsWithChildren, useEffect, useState } from 'react'

import { graphql } from '@/lib/gql/generates'
import { useHealth } from '@/lib/hooks/use-health'
import { useSession } from '@/lib/tabby/auth'
import { buttonVariants } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle
} from '@/components/ui/dialog'
import { IconSlack } from '@/components/ui/icons'
import { Separator } from '@/components/ui/separator'

const COMMUNITY_DIALOG_SHOWN_KEY = 'community-dialog-shown'

export default function Home() {
  const { status } = useSession()
  const [open, setOpen] = useState(false)
  useEffect(() => {
    if (status !== 'authenticated') return

    if (!localStorage.getItem(COMMUNITY_DIALOG_SHOWN_KEY)) {
      setOpen(true)
      localStorage.setItem(COMMUNITY_DIALOG_SHOWN_KEY, 'true')
    }
  }, [status])

  return (
    <div className="p-4 lg:p-16">
      <MainPanel />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent>
          <DialogHeader className="gap-3">
            <DialogTitle>Join the Tabby community</DialogTitle>
            <DialogDescription>
              Connect with other contributors building Tabby. Share knowledge,
              get help, and contribute to the open-source project.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <a
              target="_blank"
              href="https://join.slack.com/t/tabbycommunity/shared_invite/zt-1xeiddizp-bciR2RtFTaJ37RBxr8VxpA"
              className={buttonVariants()}
            >
              <IconSlack className="-ml-2 h-8 w-8" />
              Join us on Slack
            </a>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}

interface LinkProps {
  href: string
}

function Link({ href, children }: PropsWithChildren<LinkProps>) {
  return (
    <a target="_blank" href={href} className="underline">
      {children}
    </a>
  )
}

function toBadgeString(str: string) {
  return encodeURIComponent(str.replaceAll('-', '--'))
}

const getRegistrationTokenDocument = graphql(/* GraphQL */ `
  query GetRegistrationToken {
    registrationToken
  }
`)

function MainPanel() {
  const { data: healthInfo } = useHealth()

  if (!healthInfo) return

  return (
    <div className="flex w-full flex-col gap-3">
      <h1>
        <span className="font-bold">Congratulations</span>, your tabby instance
        is up!
      </h1>
      <span className="flex flex-wrap gap-1">
        <a
          target="_blank"
          href={`https://github.com/TabbyML/tabby/releases/tag/${healthInfo.version.git_describe}`}
        >
          <img
            src={`https://img.shields.io/badge/version-${toBadgeString(
              healthInfo.version.git_describe
            )}-green`}
          />
        </a>
      </span>
      <Separator />
    </div>
  )
}
