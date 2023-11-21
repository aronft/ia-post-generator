import { Button } from '@/components/ui/atoms/button'
import { SocialSection } from './social-section'
import { PostStyleSection } from './post-style-section'
import { ToneVocieSection } from './tone-voice-section'
import { MessageSection } from './message-section'
import { FormProvider, SubmitHandler, useForm } from 'react-hook-form'

export type PostGeneratorForm = {
    message: string
}

export const PostGenerator = () => {
    const methods = useForm<PostGeneratorForm>()
    const { handleSubmit } = methods
    const onSubmit: SubmitHandler<PostGeneratorForm> = (data) =>
        console.log(data)
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
                <Button className="capitalize">Generate post</Button>
            </form>
        </FormProvider>
    )
}
