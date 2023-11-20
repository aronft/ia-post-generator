import { Chip } from '@/components/ui/atoms/chip'
import { RadioField } from './radio-field'
import { PostStyleData } from '@/features/post-styles/constants'
import { useToggleArray } from '../../hooks/use-toggle-array'

export const PostStyleSection = () => {
    const { toggle, data } = useToggleArray(PostStyleData)
    return (
        <div className="flex gap-2 flex-wrap">
            {data.map(({ id, name, isActive }) => (
                <RadioField
                    key={id}
                    id={id}
                    name="style"
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
