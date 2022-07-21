import React from 'react'
import App from '../../containers/App'

export const wrapRootElement = ({ element }) => (
    <App>{element}</App>
)
