import { Button } from '@/components/ui/atoms/button'
import { Chip } from '@/components/ui/atoms/chip'

export const PostGenerator = () => {
    return (
        <form>
            <div>
                <span>Social platform</span>
                <div>
                    <Chip>facebook icon</Chip>
                </div>
            </div>
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
