import { Button } from '@/components/ui/atoms/button'
import { SocialSection } from './social-section'
import { PostStyleSection } from './post-style-section'

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
                <div>
                    <label htmlFor="" className="text-2xl font-medium mb-4">
                        Your message
                    </label>
                    <span>0/200 </span>
                </div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="e.g How to scape tutorial hell"
                ></textarea>
            </div>
            <fieldset>
                <legend className="text-2xl font-medium mb-4">
                    <h2>Tone of voice</h2>
                </legend>
            </fieldset>
            <fieldset>
                <legend className="text-2xl font-medium mb-4">
                    <h2>Post styles</h2>
                </legend>
                <PostStyleSection />
            </fieldset>
        </form>
    )
}
