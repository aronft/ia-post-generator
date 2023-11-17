const config = import.meta.env

interface ImportMetaEnv {
    readonly languageModelApi: string
}

export const getEnvVariables = (): ImportMetaEnv => {
    return {
        languageModelApi: config.VITE_GENERATIVE_LANGUAGE_API_KEY ?? '',
    }
}
