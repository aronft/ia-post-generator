import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const chipVariants = cva(
    'leading-[1] inline-block border border-gray-300 hover:bg-green-100 hover:border-green-500 hover:text-green-500',
    {
        variants: {
            variant: {
                icon: 'rounded-sm py-3 px-2',
                default: 'rounded-2xl py-2 px-3',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

interface ChipProps extends VariantProps<typeof chipVariants> {
    isActive: boolean
    toggle: () => void
    children: React.ReactElement
}

export const Chip = ({ isActive, toggle, variant, children }: ChipProps) => {
    return (
        <span
            onClick={() => toggle()}
            className={cn(
                chipVariants({
                    variant,
                    className: `${
                        isActive
                            ? 'bg-green-100 border-green-500'
                            : ' bg-transparent '
                    }`,
                })
            )}
        >
            {children}
        </span>
    )
}
