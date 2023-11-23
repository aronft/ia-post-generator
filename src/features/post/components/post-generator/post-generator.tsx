import { Button } from '@/components/ui/atoms/button'
import { SocialSection } from './social-section'
import { PostStyleSection } from './post-style-section'
import { ToneVocieSection } from './tone-voice-section'
import { MessageSection } from './message-section'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { usePostGenerator } from '../../hooks/use-post-generator'
import { usePostStore } from '../../store'

export type PostGeneratorForm = {
    message: string
    platform: string
    toneVoice: string
    style: string
}

export const PostGenerator = () => {
    const isLoading = usePostStore((state) => state.isLoading)
    const updatePostForm = usePostStore((state) => state.updatePostForm)
    const methods = useForm<PostGeneratorForm>()
    const { generatePost } = usePostGenerator()
    const { handleSubmit, formState } = methods
    const onSubmit: SubmitHandler<PostGeneratorForm> = async (data) => {
        updatePostForm(data)
        generatePost(data)
    }
    return (
        <FormProvider {...methods}>
            <form
                className="flex flex-col gap-y-5"
                onSubmit={handleSubmit(onSubmit)}
            >
                <fieldset>
                    <legend className="text-2xl font-medium mb-4">
                        <h2>Social platform</h2>
                    </legend>
                    <SocialSection />
                </fieldset>
                <MessageSection />
                <fieldset>
                    <legend className="text-2xl font-medium mb-4">
                        <h2>Tone of voice</h2>
                    </legend>
                    <ToneVocieSection />
                </fieldset>
                <fieldset>
                    <legend className="text-2xl font-medium mb-4">
                        <h2>Post styles</h2>
                    </legend>
                    <PostStyleSection />
                </fieldset>

                <Button
                    className="capitalize"
                    disabled={!formState.isValid || isLoading}
                >
                    Generate post
                </Button>
            </form>
        </FormProvider>
    )
}
