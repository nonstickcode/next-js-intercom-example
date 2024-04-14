'use client'
import type React from 'react'
import { useEffect } from 'react'
import { useSession } from 'next-auth/react'
import { useIntercom } from 'react-use-intercom'

/**
 * Possible enhancements for integrating additional Intercom functionalities include:
 * - boot
 * - shutdown
 * - hardShutdown
 * - hide
 * - show
 * - showMessages
 * - showNewMessage
 * - getVisitorId
 * - startTour
 * - trackEvent
 * - showArticle
 * - startSurvey
 * - showSpace
 */

/**
 * This component utilizes session data to dynamically update the Intercom widget with user-specific properties,
 * ensuring the Intercom interactions are personalized according to the authenticated user's data.
 *
 * Project needs sign in for sessions to work. but intercom views without that set.
 */

const UseIntercomUpdateWithProps: React.FC = () => {
  const { data: session, status } = useSession()
  const { update } = useIntercom()

  useEffect(() => {
    if (
      status === 'authenticated' &&
      session?.user?.name &&
      session.user.email &&
      session.user.image
    ) {
      update({
        userId: session.user.id,
        name: session.user.name,
        email: session.user.email,
        avatar: {
          imageUrl: session.user.image,
          type: 'avatar',
        },
      })
    }
  }, [session, update, status])

  return null
}

export default UseIntercomUpdateWithProps
