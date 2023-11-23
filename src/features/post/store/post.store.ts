import { create } from 'zustand'
import { PostGeneratorForm } from '../components/post-generator/post-generator'
import { persist } from 'zustand/middleware'

type PostView = 'generator' | 'view'

interface PostState {
    postView: PostView
    post: string
    postForm: PostGeneratorForm
    isLoading: boolean
    error: string
    updatePost: (post: string) => void
    setLoading: (state: boolean) => void
    setError: (error: string) => void
    updateView: (view: PostView) => void
    updatePostForm: (form: PostGeneratorForm) => void
}
export const usePostStore = create<PostState>()(
    persist(
        (set) => ({
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
            updateView: (view: PostView) => set(() => ({ postView: view })),
            updatePostForm: (form) => set(() => ({ postForm: form })),
        }),
        {
            name: 'post-storage',
        }
    )
)
