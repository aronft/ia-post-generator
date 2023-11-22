import { useState } from 'react'
import { PostGeneratorForm } from '../components/post-generator/post-generator'
import { getEnvVariables } from '@/utils/get-env-variables'
import { usePostStore } from '../store'

interface Candidate {
    output: string
}

interface ApiResponse {
    candidates: Candidate[]
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
        const prompt = {
            text: `We are a post generator web platform, create a ${style} post style, with a ${toneVoice} voice for ${platform} platform about ${message}`,
        }
        const requestBody = {
            prompt,
            temperature: 0.1,
            candidate_count: 1,
        }
        try {
            setLoading(true)
            updateView('view')
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
            setLoading(false)
            if (outputs.length === 0) {
                updatePost('')
                setError('Not oupt generated')
            }
            const output = outputs[0]
            updatePost(output)
            updateView('view')
            return {
                data: output,
                isLoading: false,
                hasError: '',
            }
        } catch (error) {
            setLoading(false)
            setError('Something went wrong, please try again later')
        }
    }

    return {
        generatePost,
    }
}
