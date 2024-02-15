'use client'

import * as React from 'react'
import { useRouter } from 'next/navigation'
import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { useQuery } from 'urql'
import * as z from 'zod'

import { PLACEHOLDER_EMAIL_FORM } from '@/lib/constants'
import { graphql } from '@/lib/gql/generates'
import { useSession, useSignIn } from '@/lib/tabby/auth'
import { useMutation } from '@/lib/tabby/gql'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { IconSpinner } from '@/components/ui/icons'
import { Input } from '@/components/ui/input'

import { ResetPasswordDialog } from './reset-password-dialog'

export const tokenAuth = graphql(/* GraphQL */ `
  mutation tokenAuth($email: String!, $password: String!) {
    tokenAuth(email: $email, password: $password) {
      accessToken
      refreshToken
    }
  }
`)

const isEmailConfigured = graphql(/* GraphQL */ `
  query GetIsEmailConfigured {
    isEmailConfigured
  }
`)

const formSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string()
})

interface UserAuthFormProps extends React.HTMLAttributes<HTMLDivElement> {
  invitationCode?: string
}

export default function UserSignInForm({
  className,
  invitationCode,
  ...props
}: UserAuthFormProps) {
  const [{ data }] = useQuery({ query: isEmailConfigured })
  const showForgotPasswordBtn = !!data?.isEmailConfigured
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema)
  })

  const router = useRouter()
  const { status } = useSession()
  React.useEffect(() => {
    if (status === 'authenticated') {
      router.replace('/')
    }
  }, [status])

  const signIn = useSignIn()
  const { isSubmitting } = form.formState
  const onSubmit = useMutation(tokenAuth, {
    onCompleted(values) {
      signIn(values.tokenAuth)
    },
    form
  })

  return (
    <div className={cn('grid', className)} {...props}>
      <Form {...form}>
        <form className="grid gap-2" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input
                    placeholder={PLACEHOLDER_EMAIL_FORM}
                    type="email"
                    autoCapitalize="none"
                    autoComplete="email"
                    autoCorrect="off"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input type="password" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="mt-1" disabled={isSubmitting}>
            {isSubmitting && (
              <IconSpinner className="mr-2 h-4 w-4 animate-spin" />
            )}
            Login
          </Button>
        </form>
        <FormMessage className="text-center" />
      </Form>
      {showForgotPasswordBtn && (
        <ResetPasswordDialog>
          <div className="cursor-pointer p-1 text-right text-sm text-primary hover:underline">
            Forgot password?
          </div>
        </ResetPasswordDialog>
      )}
    </div>
  )
}
