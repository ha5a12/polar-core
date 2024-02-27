import React from 'react'

import { cn } from '@/lib/utils'
import { CardContent, CardTitle } from '@/components/ui/card'

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
  footer?: React.ReactNode
  footerClassname?: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  description,
  footer,
  footerClassname,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn(
        'flex flex-col gap-8 rounded-lg border p-6 pb-0',
        className
      )}
      {...props}
    >
      <div>
        <CardTitle>{title}</CardTitle>
        {description && (
          <div className="mt-4 text-sm text-muted-foreground">
            {description}
          </div>
        )}
      </div>
      <CardContent className="p-0">{children}</CardContent>
      <div
        className={cn(
          'pb-6 rounded-b-lg text-muted-foreground text-sm',
          footerClassname
        )}
      >
        {footer}
      </div>
    </div>
  )
}

export { ProfileCard }
