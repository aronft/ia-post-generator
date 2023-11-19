import { Button } from '@/components/ui/atoms/button'
import { SocialSection } from './social-section'

export const PostGenerator = () => {
    return (
        <form>
            <fieldset>
                <legend className="text-2xl font-medium mb-4">
                    Social platform
                </legend>
                <SocialSection />
            </fieldset>
            <div>
                <div>
                    <label htmlFor="">Your message</label>
                    <span>0/200 </span>
                </div>
                <textarea
                    name=""
                    id=""
                    cols="30"
                    rows="10"
                    placeholder="e.g"
                ></textarea>
            </div>
            <div>
                <span>Tone of voice</span>
            </div>
            <div>
                <span>Post styles</span>
            </div>
            <Button type="submit">generate post</Button>
        </form>
    )
}
