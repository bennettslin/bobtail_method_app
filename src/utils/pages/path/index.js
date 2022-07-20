import { HOME_PAGE } from '../../../constants/pages'

export const getInternalLinkForPath = path => (
    path === HOME_PAGE ? '/' : `/${path}`
)
