import { Container } from '@/components/ui/objects/container'
import { PostGenerator } from '@/features/post/components/post-generator/post-generator'

import FacebookIcon from '@/assets/icons/facebook-icon.svg?react'
export const Home = () => {
    return (
        <Container
            tag="main"
            className="flex flex-col  items-center justify-center"
        >
            <section>
                <h1 className="text-5xl font-semibold text-center">
                    Generate your post
                </h1>
                <PostGenerator />
            </section>
            <section>
                <h1>Your generated post</h1>
            </section>
            <FacebookIcon aria-label="prueba" />
        </Container>
    )
}
