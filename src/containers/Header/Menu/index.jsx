import React from 'react'
import cx from 'classnames'
import Heading from '../../../components/Heading'
import './style'

const Menu = () => (
    <div
        {...{
            className: cx(
                'Menu',
            ),
        }}
    >
        <Heading>
            Bobtail Method
        </Heading>
    </div>
)

export default Menu
