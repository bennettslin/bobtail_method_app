import React, { useEffect, useRef } from 'react'
import Iframe from '../Iframe'
import { getUrlForFile } from '../../constants/pages'

const Pdf = () => {
    const pdfElement = useRef()

    useEffect(() => {
        if (pdfElement.current) {
            // This prevents iframe src from adding to browser history.
            pdfElement.current.contentWindow.location.replace(
                getUrlForFile('docs/Bobtail_Method.pdf'),
            )
        }
    }, [])

    return (
        <Iframe
            {...{
                ref: pdfElement,
            }}
        />
    )
}

export default Pdf
