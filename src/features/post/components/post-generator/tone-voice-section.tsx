import { ToneVoiceData } from '@/features/tone-voice/constants'
import { useToggleArray } from '../../hooks/use-toggle-array'
import { RadioField } from './radio-field'
import { Chip } from '@/components/ui/atoms/chip'
import { Controller, useFormContext } from 'react-hook-form'

export const ToneVocieSection = () => {
    const { toggle, data } = useToggleArray(ToneVoiceData)
    const { control } = useFormContext()
    return (
        <div className="flex gap-2 flex-wrap">
            {data.map(({ id, name, isActive }) => (
                <Controller
                    key={id}
                    control={control}
                    name="toneVoice"
                    render={({ field: { onChange } }) => (
                        <RadioField
                            id={id}
                            value={name}
                            name="tone voice"
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
