import { cn } from '@/lib/utils'
import { CardContent, CardTitle } from '@/components/ui/card'

interface ProfileCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  description?: string
}

const ProfileCard: React.FC<ProfileCardProps> = ({
  title,
  description,
  className,
  children,
  ...props
}) => {
  return (
    <div
      className={cn('flex flex-col gap-8 rounded-lg border p-6', className)}
      {...props}
    >
      <div>
        <CardTitle>{title}</CardTitle>
        {description && (
          <div className="mt-2 text-sm text-muted-foreground">
            {description}
          </div>
        )}
      </div>
      <CardContent className="p-0">{children}</CardContent>
    </div>
  )
}

export { ProfileCard }
