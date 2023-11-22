import { Button } from '@/components/ui/atoms/button'
import { SocialSection } from './social-section'
import { PostStyleSection } from './post-style-section'
import { ToneVocieSection } from './tone-voice-section'
import { MessageSection } from './message-section'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'
import { usePostGenerator } from '../../hooks/use-post-generator'

export type PostGeneratorForm = {
    message: string
    platform: string
    toneVoice: string
    style: string
}

export const PostGenerator = () => {
    const methods = useForm<PostGeneratorForm>()
    const { generatePost, state } = usePostGenerator()
    const { handleSubmit, formState } = methods
    const onSubmit: SubmitHandler<PostGeneratorForm> = async (data) => {
        const post = await generatePost(data)
        console.log(post)
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

                <Button className="capitalize" disabled={!formState.isValid}>
                    Generate post
                </Button>
            </form>
        </FormProvider>
    )
}
