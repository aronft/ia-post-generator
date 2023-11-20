import { Button } from '@/components/ui/atoms/button'
import { SocialSection } from './social-section'
import { PostStyleSection } from './post-style-section'
import { ToneVocieSection } from './tone-voice-section'

export const PostGenerator = () => {
    return (
        <form className="flex flex-col gap-y-5">
            <fieldset>
                <legend className="text-2xl font-medium mb-4">
                    <h2>Social platform</h2>
                </legend>
                <SocialSection />
            </fieldset>
            <div>
                <div className="flex justify-between items-center ">
                    <label
                        htmlFor="post-masseg"
                        className="text-2xl font-medium mb-4"
                    >
                        Your message
                    </label>
                    <span className="text-gray-400">0/200 </span>
                </div>
                <textarea
                    className="border border-gray-300 rounded-md w-full p-3"
                    name="message"
                    id="post-masseg"
                    cols={30}
                    rows={5}
                    placeholder="e.g How to scape tutorial hell"
                ></textarea>
            </div>
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
    )
}
