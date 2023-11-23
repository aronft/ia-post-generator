import { PostGeneratorForm } from '../components/post-generator/post-generator'
import { getEnvVariables } from '@/utils/get-env-variables'
import { usePostStore } from '../store'
import { capitalizeFirstLetter } from '../utils/capitalize-first-letter'

interface ApiResponse {
    status: number
    message: string
    data: string
}
export const usePostGenerator = () => {
    const updatePost = usePostStore((state) => state.updatePost)
    const updateView = usePostStore((state) => state.updateView)
    const setLoading = usePostStore((state) => state.setLoading)
    const setError = usePostStore((state) => state.setError)

    const generatePost = async ({
        message,
        platform,
        style,
        toneVoice,
    }: PostGeneratorForm) => {
        const variables = getEnvVariables()
        const requestBody = {
            message,
            platform,
            style,
            toneVoice,
        }
        try {
            setLoading(true)
            updateView('view')
            const response = await fetch(`${variables.apiUrl}/generate-post`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(requestBody),
            })
            const data: ApiResponse = await response.json()

            data.data = capitalizeFirstLetter(data.data)

            setLoading(false)
            if (data.data == null) {
                updatePost('')
                setError(data.message)
                return
            }
            updatePost(data.data)
            updateView('view')
        } catch (error) {
            setLoading(false)
            setError('Something went wrong, please try again later')
        }
    }

    return {
        generatePost,
    }
}
