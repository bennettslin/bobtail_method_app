import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import Content from './Content'
import './style'

const Main = ({ children }) => (
    <div
        {...{
            className: cx(
                'Main',
            ),
        }}
    >
        <Content>{children}</Content>
    </div>
)

Main.propTypes = {
    children: PropTypes.node.isRequired,
}

export default Main
