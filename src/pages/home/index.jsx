import React from 'react'
import Page from '../../containers/Page'
import Markdown from '../../components/Markdown'
import Pdf from '../../components/Pdf'

const Home = () => (
    <Page>
        <Markdown>
            Hello
        </Markdown>
        <Pdf />
    </Page>
)

export default Home
