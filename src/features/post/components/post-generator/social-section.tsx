/// <reference types="vite-plugin-svgr/client" />
import { Chip } from '@/components/ui/atoms/chip'
import { SocialPlatformData } from '@/features/social-platform/constants'
import { SocialPlatform } from '@/features/social-platform/models'
import { useState } from 'react'

export const SocialSection = () => {
    const [socialPlatformData, setSocialPlatformData] =
        useState(SocialPlatformData)
    const toggleChip = ({ id }: { id: SocialPlatform['id'] }) => {
        setSocialPlatformData((prev) =>
            prev.map((platform) => {
                if (platform.id === id) {
                    return { ...platform, isActive: !platform.isActive }
                }
                return { ...platform, isActive: false }
            })
        )
    }

    return (
        <div className="flex gap-2">
            {socialPlatformData.map(({ Component, id, name, isActive }) => (
                <Chip
                    key={id}
                    variant={'icon'}
                    toggle={() => toggleChip({ id })}
                    isActive={isActive}
                >
                    <Component aria-label={`${name} icon`} />
                </Chip>
            ))}
        </div>
    )
}
