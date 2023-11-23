const config = import.meta.env

interface ImportMetaEnv {
    readonly languageModelApi: string
    readonly maxCharacters: number
    readonly apiUrl: string
}

export const getEnvVariables = (): ImportMetaEnv => {
    return {
        languageModelApi: config.VITE_GENERATIVE_LANGUAGE_API_KEY ?? '',
        maxCharacters: config.VITE_MAX_CHARACTERS ?? 0,
        apiUrl: config.VITE_API_URL ?? '',
    }
}
