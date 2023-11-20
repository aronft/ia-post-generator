import styles from './radio-field.module.css'

interface RadioFieldProps {
    children: React.ReactNode
    id: string
    onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void
    name: string
}

export const RadioField = ({
    children,
    id,
    onChange,
    name,
}: RadioFieldProps) => {
    return (
        <div className={styles['radio-field']}>
            <input
                type="radio"
                name={name}
                id={id}
                onChange={(e) => onChange && onChange(e)}
                className="absolute opacity-0"
            />
            <label htmlFor={id}>{children}</label>
        </div>
    )
}
