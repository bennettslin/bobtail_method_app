import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Flex from '../../components/Flex'
import Header from '../Header'
import Main from '../Main'
import './style'

const Wrapper = ({ children }) => (
    <Flex
        {...{
            className: cx(
                'Wrapper',
            ),
            flexDirection: 'column',
        }}
    >
        <Header />
        <Main>{children}</Main>
    </Flex>
)

Wrapper.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Wrapper
