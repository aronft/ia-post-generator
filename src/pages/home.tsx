import { Container } from '@/components/ui/objects/container'
import { PostGenerator } from '@/features/post/components/post-generator/post-generator'

export const Home = () => {
    return (
        <Container
            tag="main"
            className="flex flex-col  items-center justify-center"
        >
            <section>
                <h1 className="text-5xl font-bold text-center">
                    Generate your post
                </h1>
                <PostGenerator />
            </section>
            <section>
                <h1>Your generated post</h1>
            </section>
        </Container>
    )
}
