import React from 'react'
import PropTypes from 'prop-types'
import { Helmet as ReactHelmet } from 'react-helmet'
import {
    getMetaTitle,
    getMetaTags,
} from './helper'
import { HOME_PAGE } from '../../constants/pages'

const Helmet = ({ description, title }) => {
    return (
        <ReactHelmet>
            <title>
                {getMetaTitle({
                    page: HOME_PAGE,
                    title,
                })}
            </title>
            {getMetaTags({
                page: HOME_PAGE,
                description,
                title,
            }).map(({
                name,
                property,
                content,
            }) => (
                <meta
                    {...{
                        key: name || property,
                        ...name && { name },
                        ...property && { property },
                        content,
                    }}
                />
            ))}
        </ReactHelmet>
    )
}

Helmet.propTypes = {
    description: PropTypes.string,
    title: PropTypes.string,
}

export default Helmet
