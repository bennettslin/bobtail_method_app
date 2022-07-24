import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../components/Flex'
import Helmet from '../../components/Helmet'
import './style'

const Page = ({
    title,
    children,
}) => (
    <Flex
        {...{
            className: cx(
                'Page',
            ),
            // alignItems: 'normal',
        }}
    >
        <Helmet {...{ title }} />
        {children}
    </Flex>
)

Page.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node.isRequired,
}

export default Page
