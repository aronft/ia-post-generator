import { cn } from '@/utils'
import { VariantProps, cva } from 'class-variance-authority'

const buttonVariants = cva('p-3 rounded-md', {
    variants: {
        variant: {
            fill: 'bg-brand-green-400 text-white   disabled:bg-brand-gray',
            outline:
                'bg-transparent border-2 border-gray-300 text-black disabled:text-gray-400',
        },
    },
    defaultVariants: {
        variant: 'fill',
    },
})

export type ButtonVariants = VariantProps<typeof buttonVariants>

interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement>,
        ButtonVariants {
    children: React.ReactNode
}

export const Button = ({
    children,
    className,
    variant,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={cn(buttonVariants({ variant, className }))}
            {...props}
        >
            {children}
        </button>
    )
}
