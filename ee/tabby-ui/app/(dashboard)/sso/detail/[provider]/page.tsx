import React from 'react'
import type { NextPage } from 'next'
import { find } from 'lodash-es'

import { OAuthProvider } from '@/lib/gql/generates/graphql'
import { CardTitle } from '@/components/ui/card'

import { OAuthCredentialDetail } from '../../components/oauth-credential-detail'

type Params = {
  provider: string
}

const PROVIDER_PARAMS = [
  {
    name: 'github',
    enum: OAuthProvider.Github
  },
  {
    name: 'google',
    enum: OAuthProvider.Google
  }
]

export function generateStaticParams() {
  return PROVIDER_PARAMS.map(item => ({ provider: item.name }))
}

const OAuthCredentialDetailPage: NextPage<{ params: Params }> = ({
  params
}) => {
  const provider = find(PROVIDER_PARAMS, {
    name: params.provider
  })!.enum

  return (
    <div className="p-6">
      <CardTitle className="mb-6">Update Credential</CardTitle>
      <OAuthCredentialDetail provider={provider} />
    </div>
  )
}

export default OAuthCredentialDetailPage
