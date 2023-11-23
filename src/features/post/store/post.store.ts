import { create } from 'zustand'
import { PostGeneratorForm } from '../components/post-generator/post-generator'
import { set } from 'react-hook-form'

interface PostState {
    postView: 'generator' | 'view'
    post: string
    postForm: PostGeneratorForm
    isLoading: boolean
    error: string
    updatePost: (post: string) => void
    setLoading: (state: boolean) => void
    setError: (error: string) => void
    updateView: (view: 'generator' | 'view') => void
    updatePostForm: (form: PostGeneratorForm) => void
}

export const usePostStore = create<PostState>()((set) => ({
    postView: 'generator',
    post: '',
    error: '',
    isLoading: false,
    postForm: {
        message: '',
        platform: '',
        style: '',
        toneVoice: '',
    },
    updatePost: (post: string) => set(() => ({ post })),
    setLoading: (state) => set(() => ({ isLoading: state })),
    setError: (error: string) => set(() => ({ error })),
    updateView: (view) => set(() => ({ postView: view })),
    updatePostForm: (form) => set(() => ({ postForm: form })),
}))
