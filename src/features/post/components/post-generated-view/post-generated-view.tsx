import { Button } from '@/components/ui/atoms/button'
import { Post } from '@/features/social-platform/models'
import BackIcon from '@/assets/icons/back-icon.svg?react'
import ReloadIcon from '@/assets/icons/regenerate-icon.svg?react'
import CopyIcon from '@/assets/icons/copy-icon.svg?react'
import { usePostStore } from '../../store'
import { usePostGenerator } from '../../hooks/use-post-generator'

export const PostGeneratedView = ({ content }: Post) => {
    const isLoading = usePostStore((state) => state.isLoading)
    const postForm = usePostStore((state) => state.postForm)
    const updateView = usePostStore((state) => state.updateView)
    const { generatePost } = usePostGenerator()
    const copyContentToClipboard = async () => {
        try {
            await navigator.clipboard.writeText(content)
        } catch (error) {}
    }
    return (
        <div className="flex flex-col gap-y-10">
            <div className="w-full  relative">
                <div
                    className={`pr-10 min-h-[3rem]  w-full whitespace-pre-line rounded-md border-2 p-2  border-gray-300 ${
                        isLoading ? 'text-brand-gray' : ''
                    }`}
                    aria-label="post content generated"
                >
                    {isLoading ? '...loading' : content}
                </div>
                {!isLoading && (
                    <button
                        aria-label="copy post"
                        className="border-2 rounded-lg border-gray-300 p-1 absolute right-2 top-2"
                        onClick={copyContentToClipboard}
                    >
                        <CopyIcon aria-hidden className="w-[1rem] h-[1rem]" />
                    </button>
                )}
            </div>

            <div className="flex justify-between items-center gap-5 flex-col  md:flex-row">
                <Button
                    onClick={() => updateView('generator')}
                    disabled={isLoading}
                    variant={'outline'}
                    className="flex items-center gap-2 text-black w-full justify-center"
                >
                    <BackIcon aria-hidden className="text-inherit w-[1rem] " />
                    Back to Generator
                </Button>
                <Button
                    onClick={() => generatePost(postForm)}
                    disabled={isLoading}
                    className="flex items-center gap-2 w-full justify-center"
                >
                    <ReloadIcon
                        className={`w-[1rem] ${
                            isLoading ? 'animate-spin' : ''
                        }`}
                    />{' '}
                    Regenerate
                </Button>
            </div>
        </div>
    )
}
