import { GA_ACCOUNT } from './src/constants/analytics'
import { getFaviconFileName } from './src/utils/server'

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
                name: `Bobtail Method`,
                short_name: `Bobtail Method`,
                description: 'Website for the songwriting lesson plan Bobtail Method',
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
                bucketName: 'bobtailmethod--production',
            },
        },
    ],
}
