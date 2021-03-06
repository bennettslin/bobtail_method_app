import {
    APP_DESCRIPTION,
    APP_TITLE,
    getFaviconFileName,
    getS3BucketName,
} from './src/utils/server'
import { GA_ACCOUNT } from './src/constants/analytics'

export default {
    plugins: [
        {
            resolve: `gatsby-plugin-google-gtag`,
            options: {
                trackingIds: [
                    GA_ACCOUNT,
                ],
            },
        },
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: APP_TITLE,
                short_name: APP_TITLE,
                description: APP_DESCRIPTION,
                start_url: '/',
                background_color: '#e6e6ad',
                theme_color: '#b38e6b',
                display: 'standalone',
                icon: `src/assets/favicon/${getFaviconFileName()}.png`,
            },
        },
        `gatsby-plugin-react-helmet`,
        `gatsby-plugin-remove-trailing-slashes`,
        `gatsby-plugin-sass`,
        {
            resolve: `gatsby-plugin-s3`,
            options: {
                bucketName: getS3BucketName(),
            },
        },
    ],
}
