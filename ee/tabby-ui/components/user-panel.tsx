import React from 'react'
import Link from 'next/link'

import {
  useAuthenticatedSession,
  useIsAdminInitialized,
  useSession,
  useSignOut
} from '@/lib/tabby/auth'
import { cn } from '@/lib/utils'

import { IconLogout, IconUnlock } from './ui/icons'

export default function UserPanel() {
  const session = useAuthenticatedSession()
  const signOut = useSignOut()

  return session && <div className="py-4 flex justify-center text-sm font-medium">
    <span className="flex items-center gap-2">
      <span title="Sign out">
        <IconLogout className="cursor-pointer" onClick={signOut} />
      </span>
      {session.email}
    </span>
  </div>
}