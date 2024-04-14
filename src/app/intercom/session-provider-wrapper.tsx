'use client'
import React, { type ReactNode } from 'react'
import { SessionProvider } from 'next-auth/react'

/**
 * SessionProvider from next-auth/react,
 * providing foundational support for session management functionalities. This provider ensures that
 * session information is automatically handled and made available across all components upon application mounting.
 *
 * This wrapper is crucial for enabling session functionalities server-side, thereby enhancing the application's
 * capability to manage user sessions consistently across both client and server environments.
 */

interface SessionProviderWrapperProps {
  children?: ReactNode
}

const SessionProviderWrapper: React.FC<SessionProviderWrapperProps> = ({
  children,
}) => {
  return <SessionProvider>{children}</SessionProvider>
}

export default SessionProviderWrapper
