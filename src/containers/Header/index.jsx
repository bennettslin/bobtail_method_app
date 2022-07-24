import React from 'react'
import cx from 'classnames'
import Flex from '../../components/Flex'
import Menu from './Menu'
import './style'

const Header = () => (
    <Flex
        {...{
            className: cx(
                'Header',
            ),
        }}
    >
        <Menu />
    </Flex>
)

export default Header
