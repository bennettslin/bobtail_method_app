import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import './style'

const TextScroll = ({
    children,
}) => (
    <Flex
        {...{
            className: cx(
                'TextScroll',
            ),
        }}
    >
        {children}
    </Flex>
)

TextScroll.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TextScroll
