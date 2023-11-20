import { cn } from '@/utils'
import { cva, type VariantProps } from 'class-variance-authority'
import { HTMLAttributes } from 'react'

const chipVariants = cva(
    'leading-[1] inline-block border border-gray-300 hover:bg-green-100 hover:border-green-500 hover:text-green-500',
    {
        variants: {
            variant: {
                icon: 'rounded-md py-3 px-3',
                default: 'rounded-2xl py-2 px-3',
            },
        },
        defaultVariants: {
            variant: 'default',
        },
    }
)

interface ChipProps
    extends VariantProps<typeof chipVariants>,
        HTMLAttributes<HTMLSpanElement> {
    children: React.ReactNode
}

export const Chip = ({
    variant,
    children,
    className,
    onClick,
    ...props
}: ChipProps) => {
    return (
        <span
            onClick={(e) => onClick && onClick(e)}
            className={cn(
                chipVariants({
                    variant,
                    className,
                })
            )}
            {...props}
        >
            {children}
        </span>
    )
}
