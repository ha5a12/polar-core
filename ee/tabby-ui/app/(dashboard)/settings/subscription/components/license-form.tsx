'use client'

import * as React from 'react'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { toast } from 'sonner'
import * as z from 'zod'

import { graphql } from '@/lib/gql/generates'
import { useDebounceCallback } from '@/lib/hooks/use-debounce'
import { useMutation } from '@/lib/tabby/gql'
import { cn } from '@/lib/utils'
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button, buttonVariants } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage
} from '@/components/ui/form'
import { IconSpinner } from '@/components/ui/icons'
import { Textarea } from '@/components/ui/textarea'

const formSchema = z.object({
  license: z.string()
})

type FormValues = z.infer<typeof formSchema>

interface LicenseFormProps extends React.HTMLAttributes<HTMLDivElement> {
  onSuccess?: () => void
  canReset?: boolean
}

const uploadLicenseMutation = graphql(/* GraphQL */ `
  mutation UploadLicense($license: String!) {
    uploadLicense(license: $license)
  }
`)

const resetLicenseMutation = graphql(/* GraphQL */ `
  mutation ResetLicense {
    resetLicense
  }
`)

export function LicenseForm({
  className,
  onSuccess,
  canReset,
  ...props
}: LicenseFormProps) {
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema)
  })
  const license = form.watch('license')
  const [isSubmitting, setIsSubmitting] = React.useState(false)
  const [resetDialogOpen, setResetDialogOpen] = React.useState(false)
  const [isReseting, setIsReseting] = React.useState(false)

  const toggleSubmitting = useDebounceCallback(
    (value: boolean, success?: boolean) => {
      setIsSubmitting(value)
      if (success) {
        form.reset({ license: '' })
        toast.success('License is uploaded')
        onSuccess?.()
      }
    },
    500
  )

  const toggleReseting = useDebounceCallback(
    (value: boolean, success?: boolean) => {
      setIsReseting(value)
      if (success) {
        setResetDialogOpen(false)
        onSuccess?.()
      }
    },
    500
  )

  const uploadLicense = useMutation(uploadLicenseMutation, {
    form
  })

  const resetLicense = useMutation(resetLicenseMutation)

  const onSubmit = (values: FormValues) => {
    setIsSubmitting(true)
    return uploadLicense(values).then(res => {
      if (res?.data?.uploadLicense) {
        toggleSubmitting.run(false, true)
      }
    })
  }

  const onReset: React.MouseEventHandler<HTMLButtonElement> = e => {
    e.preventDefault()
    setIsReseting(true)
    resetLicense().then(res => {
      if (res?.data?.resetLicense) {
        toggleReseting.run(false, true)
      } else if (res?.error) {
        toast.error(res.error.message ?? 'reset failed')
        setIsReseting(false)
      }
    })
  }

  const onResetDialogOpenChange = (v: boolean) => {
    if (isReseting) return
    setResetDialogOpen(v)
  }

  return (
    <div className={cn('grid gap-6', className)} {...props}>
      <Form {...form}>
        <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="license"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Textarea
                    className="min-h-[200px]"
                    placeholder="Paste your license here - write only"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <div className="mt-2 flex items-center justify-end gap-4">
            <AlertDialog
              open={resetDialogOpen}
              onOpenChange={onResetDialogOpenChange}
            >
              {canReset && (
                <AlertDialogTrigger asChild>
                  <Button type="button" variant="hover-destructive">
                    Reset
                  </Button>
                </AlertDialogTrigger>
              )}
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. It will reset the current
                    license.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction
                    className={buttonVariants({ variant: 'destructive' })}
                    onClick={onReset}
                    disabled={isReseting}
                  >
                    {isReseting && (
                      <IconSpinner className="mr-2 h-4 w-4 animate-spin" />
                    )}
                    Yes, reset it
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <Button type="submit" disabled={isSubmitting || !license}>
              {isSubmitting && (
                <IconSpinner className="mr-2 h-4 w-4 animate-spin" />
              )}
              Upload License
            </Button>
          </div>
        </form>
        <FormMessage className="text-center" />
      </Form>
    </div>
  )
}
