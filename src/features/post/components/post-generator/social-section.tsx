/// <reference types="vite-plugin-svgr/client" />
import { Chip } from '@/components/ui/atoms/chip'
import { SocialPlatformData } from '@/features/social-platform/constants'
import { RadioField } from './radio-field'
import { useToggleArray } from '../../hooks/use-toggle-array'
import { useFormContext, Controller } from 'react-hook-form'

export const SocialSection = () => {
    const { toggle, data } = useToggleArray(SocialPlatformData)

    const { control } = useFormContext()
    return (
        <div className="flex gap-2">
            {data.map(({ Component, id, name, isActive }) => (
                <Controller
                    key={id}
                    control={control}
                    name="platform"
                    render={({ field: { onChange } }) => (
                        <RadioField
                            id={id}
                            name="platform"
                            value={name}
                            onChange={(e) => {
                                toggle({ id, key: 'isActive' })
                                onChange(e)
                            }}
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
                    )}
                />
            ))}
        </div>
    )
}
