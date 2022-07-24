import React from 'react'
import cx from 'classnames'
import PropTypes from 'prop-types'
import Flex from '../Flex'
import Pdf from '../Pdf'
import TextScroll from '../TextScroll'
import './style'

const HomeLayout = ({
    children,
}) => (
    <Flex
        {...{
            className: cx(
                'HomeLayout',
            ),
            justifyContent: 'normal',
            alignItems: 'normal',
            gap: 'md',
        }}
    >
        <Flex
            {...{
                className: cx(
                    'HomeLayout__pdf',
                ),
                flexDirection: 'column',
                // justifyContent: 'normal',
                // alignItems: 'normal',
                flexGrow: 1,
            }}
        >
            <Pdf />
        </Flex>
        <TextScroll>
            {children}
        </TextScroll>
    </Flex>
)

HomeLayout.propTypes = {
    children: PropTypes.node.isRequired,
}

export default HomeLayout
