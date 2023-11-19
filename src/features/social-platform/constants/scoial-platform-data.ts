import FacebookIcon from '@/assets/icons/facebook-icon.svg?react'
import TwitterIcon from '@/assets/icons/twitter-icon.svg?react'
import redditIcon from '@/assets/icons/reddit-icon.svg?react'
import LinkedinIcon from '@/assets/icons/linkedin-icon.svg?react'

import { SocialPlatform } from '../models/social-platform.model'

export const SocialPlatformData: SocialPlatform[] = [
    {
        id: crypto.randomUUID(),
        name: 'facebook',
        Component: FacebookIcon,
        isActive: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'twitter',
        Component: TwitterIcon,
        isActive: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'reddit',
        Component: redditIcon,
        isActive: false,
    },
    {
        id: crypto.randomUUID(),
        name: 'linkedin',
        Component: LinkedinIcon,
        isActive: false,
    },
]
