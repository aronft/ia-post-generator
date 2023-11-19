import { FunctionComponent, SVGProps } from 'react'

export interface SocialPlatform {
    id: string
    name: string
    Component: FunctionComponent<
        SVGProps<SVGSVGElement> & { title?: string | undefined }
    >
    isActive: boolean
}
