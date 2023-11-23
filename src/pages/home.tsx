import { Container } from '@/components/ui/objects/container'
import { PostGeneratedView } from '@/features/post/components/post-generated-view'
import { PostGenerator } from '@/features/post/components/post-generator/post-generator'
import { usePostStore } from '@/features/post/store'

export const Home = () => {
    const post = usePostStore((state) => state.post)
    const postView = usePostStore((state) => state.postView)
    return (
        <Container tag="main" className=" pt-10 pb-10  h-full  max-w-2xl">
            {postView === 'view' ? (
                <section className="">
                    <h1 className="text-5xl font-semibold text-center mb-14">
                        Your generated post
                    </h1>
                    <PostGeneratedView content={post} />
                </section>
            ) : (
                <section className="h-full flex flex-col justify-center  items-center">
                    <h1 className="text-5xl font-semibold text-center mb-14">
                        Generate your post
                    </h1>
                    <PostGenerator />
                </section>
            )}
        </Container>
    )
}
