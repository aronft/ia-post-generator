import { cn } from '@/utils'

interface ContainerProps extends React.HTMLAttributes<unknown> {
    children: React.ReactNode
    tag: keyof JSX.IntrinsicElements
}

export const Container = ({
    children,
    tag,
    className,
    ...props
}: ContainerProps) => {
    const Tag = tag
    return (
        <Tag className={cn('container mx-auto px-3', className)} {...props}>
            {children}
        </Tag>
    )
}
