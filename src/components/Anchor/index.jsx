import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import { getInternalLinkForPath } from '../../utils/pages/path'
import { getInternalLink } from './helper'

const Anchor = ({
    className,
    analyticsLabel,
    href,
    pagePath,
    handleAnchorClick = () => {},
    children,

}) => {
    const
        internalLink = getInternalLink({
            href,
            pagePath,
        }),
        Tag = internalLink ? Link : 'a'

    const onClick = () => {
        if (analyticsLabel || internalLink) {
            logEvent(
                'Anchor',
                analyticsLabel || internalLink,
            )
        }

        handleAnchorClick()
    }

    return (
        <Tag
            {...{
                className: cx(
                    'Anchor',
                    className,
                ),
                ...internalLink && {
                    to: getInternalLinkForPath(internalLink),
                    replace: true,
                },
                ...!internalLink && href && {
                    href,
                    // Open in new tab only if it's not an internal page link.
                    ...href[0] !== '#' && {
                        target: '_blank',
                    },
                },
                onClick,
            }}
        >
            {children}
        </Tag>
    )
}

Anchor.propTypes = {
    className: PropTypes.string,
    analyticsLabel: PropTypes.string,
    href: PropTypes.string,
    pagePath: PropTypes.string,
    handleAnchorClick: PropTypes.func,
    children: PropTypes.node.isRequired,
}

export default Anchor
