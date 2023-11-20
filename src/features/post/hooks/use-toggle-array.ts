import { useState } from 'react'

export interface ToggleInArray<T> {
    id: string
    key: keyof T
}

export const useToggleArray = <T extends { id?: string }>(array: T[]) => {
    const [data, setData] = useState(array)

    const toggle = ({ id, key }: ToggleInArray<T>) => {
        setData((prev) => {
            const newArray = prev.map((item) => {
                if (item.id && item.id === id) {
                    return { ...item, [key]: !item[key] }
                }
                return { ...item, [key]: false }
            })
            return newArray
        })
    }

    return {
        data,
        toggle,
    }
}
