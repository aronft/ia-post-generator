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
                    rules={{ required: true }}
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
                                className={`relative group ${
                                    isActive
                                        ? 'bg-green-100 border-green-500 text-green-500'
                                        : ''
                                }`}
                            >
                                <Component aria-label={`${name} icon option`} />
                                <div className="hidden group-hover:flex  absolute left-1/2  top-full px-1 py-2 mt-3 bg-black text-white text-sm w-min rounded-md -translate-x-1/2  justify-center">
                                    {name}
                                    <div
                                        className="absolute mx-auto h-0 w-0 border-r-[5px] border-b-[7px] 
                                            border-l-[5px] border-solid border-r-transparent
                                            border-l-transparent border-b-[#000] top-0 mt-[-7px]"
                                    ></div>
                                </div>
                            </Chip>
                        </RadioField>
                    )}
                />
            ))}
        </div>
    )
}
