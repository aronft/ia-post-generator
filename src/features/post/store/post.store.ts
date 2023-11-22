import { create } from 'zustand'

interface PostState {
    postView: 'generator' | 'view'
    post: string
    isLoading: boolean
    error: string
    updatePost: (post: string) => void
    setLoading: (state: boolean) => void
    setError: (error: string) => void
    updateView: (view: 'generator' | 'view') => void
}

export const usePostStore = create<PostState>()((set) => ({
    postView: 'generator',
    post: '',
    error: '',
    isLoading: false,
    updatePost: (post: string) => set(() => ({ post })),
    setLoading: (state) => set(() => ({ isLoading: state })),
    setError: (error: string) => set(() => ({ error })),
    updateView: (view) => set(() => ({ postView: view })),
}))
