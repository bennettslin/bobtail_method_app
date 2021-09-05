export const APP_TITLE = 'Bobtail Method'
export const APP_DESCRIPTION =
    'Website for the songwriting lesson plan Bobtail Method.'
export const APP_NAME = 'bobtailMethod'
export const DOMAIN = APP_NAME.toLowerCase()

export const getIsRuntimeBuild = () => (
    process.env.BUILD === 'runtime'
)

export const getIsProductionBuild = () => (
    process.env.BUILD === 'production'
)

export const getFaviconFileName = () => {
    switch (process.env.DESTINATION) {
        case 'local':
            return `${APP_NAME}_local`
        default:
            return APP_NAME
    }
}

export const getS3BucketName = () => (
    `${DOMAIN}--production`
)
