import { Chip } from '@/components/ui/atoms/chip'
import { RadioField } from './radio-field'
import { PostStyleData } from '@/features/post-styles/constants'
import { useToggleArray } from '../../hooks/use-toggle-array'
import { Controller, useFormContext } from 'react-hook-form'

export const PostStyleSection = () => {
    const { toggle, data } = useToggleArray(PostStyleData)
    const { control } = useFormContext()
    return (
        <div className="flex gap-2 flex-wrap">
            {data.map(({ id, name, isActive }) => (
                <Controller
                    key={id}
                    control={control}
                    name="style"
                    render={({ field: { onChange } }) => (
                        <RadioField
                            id={id}
                            name="style"
                            value={name}
                            onChange={(e) => {
                                toggle({ id, key: 'isActive' })
                                onChange(e)
                            }}
                        >
                            <Chip
                                className={`capitalize ${
                                    isActive
                                        ? 'bg-green-100 border-green-500 text-green-500'
                                        : ''
                                }`}
                            >
                                {name}
                            </Chip>
                        </RadioField>
                    )}
                />
            ))}
        </div>
    )
}
