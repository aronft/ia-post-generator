import { useState } from 'react'
import { PostGeneratorForm } from '../components/post-generator/post-generator'
import { getEnvVariables } from '@/utils/get-env-variables'

interface Candidate {
    output: string
}

interface ApiResponse {
    candidates: Candidate[]
}
export const usePostGenerator = () => {
    const [state, setState] = useState({
        data: '',
        isLoading: false,
        hasError: '',
    })

    const generatePost = async ({
        message,
        platform,
        style,
        toneVoice,
    }: PostGeneratorForm) => {
        const variables = getEnvVariables()
        const prompt = {
            text: `We are a post generator web platform, create a ${style} post style, with a ${toneVoice} voice for ${platform} platform about ${message}`,
        }
        const requestBody = {
            prompt,
            temperature: 0.1,
            candidate_count: 1,
        }
        try {
            setState({ ...state, isLoading: true })
            const response = await fetch(
                `https://generativelanguage.googleapis.com/v1beta3/models/text-bison-001:generateText`,
                {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'x-goog-api-key': variables.languageModelApi,
                    },
                    body: JSON.stringify(requestBody),
                }
            )
            const data: ApiResponse = await response.json()
            const outputs = data.candidates.map(
                (candidate: Candidate) => candidate.output
            )
            if (outputs.length === 0) {
                setState({
                    ...state,
                    data: '',
                    isLoading: false,
                    hasError: 'No results generated',
                })
            }
            const output = outputs[0]
            setState({ ...state, data: output, isLoading: false })
            return {
                data: output,
                isLoading: false,
                hasError: '',
            }
        } catch (error) {
            setState({
                ...state,
                isLoading: false,
                hasError: 'Something went wrong',
            })
        }
    }

    return {
        state,
        generatePost,
    }
}
