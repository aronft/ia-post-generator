/// <reference types="vite-plugin-svgr/client" />
import { Chip } from '@/components/ui/atoms/chip'
import { SocialPlatformData } from '@/features/social-platform/constants'
import { RadioField } from './radio-field'
import { useToggleArray } from '../../hooks/use-toggle-array'

export const SocialSection = () => {
    const { toggle, data } = useToggleArray(SocialPlatformData)

    return (
        <div className="flex gap-2">
            {data.map(({ Component, id, name, isActive }) => (
                <RadioField
                    key={id}
                    id={id}
                    name="platform"
                    onChange={() => toggle({ id, key: 'isActive' })}
                >
                    <Chip
                        variant={'icon'}
                        className={` ${
                            isActive
                                ? 'bg-green-100 border-green-500 text-green-500'
                                : ''
                        }`}
                    >
                        <Component aria-label={`${name} icon option`} />
                    </Chip>
                </RadioField>
            ))}
        </div>
    )
}
