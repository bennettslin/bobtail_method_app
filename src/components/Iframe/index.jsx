import React, { forwardRef } from 'react'
// import PropTypes from 'prop-types'
import cx from 'classnames'
import './style'

const Iframe = forwardRef((props, ref) => (
    <div
        {...{
            className: cx(
                'Iframe',
            ),
        }}
    >
        <iframe
            {...{
                ref,
                className: cx(
                    'Iframe__window',
                ),
                tabIndex: -1,
            }}
        />
    </div>
))

Iframe.propTypes = {}

export default Iframe
