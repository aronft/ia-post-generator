import { ToneVoiceData } from '@/features/tone-voice/constants'
import { useToggleArray } from '../../hooks/use-toggle-array'
import { RadioField } from './radio-field'
import { Chip } from '@/components/ui/atoms/chip'

export const ToneVocieSection = () => {
    const { toggle, data } = useToggleArray(ToneVoiceData)
    return (
        <div className="flex gap-2 flex-wrap">
            {data.map(({ id, name, isActive }) => (
                <RadioField
                    key={id}
                    id={id}
                    name="tone voice"
                    onChange={() => toggle({ id, key: 'isActive' })}
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
            ))}
        </div>
    )
}
