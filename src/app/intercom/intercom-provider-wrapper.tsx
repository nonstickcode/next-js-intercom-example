'use client'
import React, { type ReactNode } from 'react'
import { IntercomProvider } from 'react-use-intercom'

/**
 * IntercomProvider from the react-use-intercom library,
 * providing foundational support for Intercom functionalities. It utilizes the `autoBoot` property
 * set to true, which automatically initializes the Intercom widget with the specified APP_ID upon component mounting.
 *
 * This wrapper is crucial for making Intercom functionalities available server-side, thereby enhancing the application's
 * capability to interact with users consistently across both client and server environments.
 *
 * TODO: Revisit the autoBoot behavior to consider a more controlled initialization based on user authentication status.
 */

interface IntercomProviderWrapperProps {
  children?: ReactNode
}

const APP_ID = process.env.NEXT_PUBLIC_INTERCOM_APP_ID!

const IntercomProviderWrapper: React.FC<IntercomProviderWrapperProps> = ({
  children,
}) => {
  return (
    <IntercomProvider appId={APP_ID} autoBoot={true}>
      {children}
    </IntercomProvider>
  )
}

export default IntercomProviderWrapper
