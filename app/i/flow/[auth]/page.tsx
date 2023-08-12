'use client'
import DialogLoginFlow from '@/components/auth/flow/signin/dialog-login-flow'
import DialogSignUpFlow from '@/components/auth/flow/signup/dialog-signup-flow'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'

type AuthFlowDialogParams = {
  auth: 'signin' | 'signup'
}

type AuthFlowDialogProps = {
  params: AuthFlowDialogParams
}

export default function AuthFlowDialog({ params }: AuthFlowDialogProps) {
  const router = useRouter()
  const [mounted, setMounted] = useState(false)
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) return <></>

  if (params.auth === 'signin') {
    return <DialogLoginFlow open />
  }

  if (params.auth === 'signup') {
    return <DialogSignUpFlow open />
  }

  router.push('/')
}
