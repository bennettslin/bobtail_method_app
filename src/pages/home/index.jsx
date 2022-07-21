import React from 'react'
import Page from '../../containers/Page'
import Markdown from '../../components/Markdown'
import Pdf from '../../components/Pdf'

const Home = () => (
    <Page>
        <Markdown>
            {`
*20 July 2022*

Hi, I'm Bennett from the band [Bobtail Yearlings](https://www.bobtailyearlings.com). Back when [*Yearling's Bobtail*](https://www.yearlingsbobtail.com) was a standalone album, I sent out demo CDs and got a good response from several indie labels. They wanted me to build a fanbase on my own, though, which confused me. I'm a complete nobody; I have no leverage. It would take me years to get the same results that a label could get in one day. If the idea of a label is to make any sense at all, then *my* role should be to create a work so remarkable that *they*, with all their leverage, can build up genuine interest for. And by making "the *Ulysses* of rock albums"— well, I thought I'd done that.

But okay, I tried things their way for a while. I did the hustle. And… it didn't feel good at all. I wasn't improving as an artist, and I wasn't advancing the art form for others. In fields where genuine innovation happens, this hustling type of work is known as "bullshit"— I don't normally curse, but that's the technical term. And my bullshit detector kept going off. It kept telling me that this was the wrong approach. So I decided not to do it. And no one who cares about the art form could possibly want me to, either.

Instead of hustling to build a fanbase, then, I wrote a songwriting book called *Bobtail Method* and sent out copies of the manuscript. The point was to demonstrate to the labels that: it takes time to compose strong melodies and chord progressions, and this is where a lot of *my* time goes; I care about helping others improve their skills, and I can help the artists on *their* rosters; and, the book can promote the album, because it uses my own songs as examples.

I just figured, if you're a label, then surely this is the kind of thing you'd rather see artists do. The requirement to build a fanbase… surely that's just a bone you throw to those who *can't* innovate. But if they *can*, then obviously that's preferred, right? Well… no. The indie labels still wanted to see me build a fanbase. And yet, I didn't see anything wrong with my reasoning. So I assumed I just hadn't met the threshold. If I stuck with my strategy of always innovating to advance the art form, then eventually I'd meet it, however many years it took.

So I invented [amnesticism](https://digital.lib.washington.edu/researchworks/handle/1773/23566), a method of composing in multidimensional spaces. I patented [Bobtail Dominoes](https://bobtaildominoes.com), a musical tile game. And, of course, I coded and drew the audio webcomic for *Yearling's Bobtail*. But sadly, the indie labels rejected every single one. Finally, it hit me: I'll never meet the threshold, because there isn't one. It's not possible to advance the art form to make up for a lack of hustle, because the indie labels are all about the *hustle*. It's not that the art doesn't matter; but given the charitable support they enjoy, the art itself can be anything, and it would be just as good.

${'  ' || `
// TODO: Good news is that rock is getting worse. Indie rock's sphere of influence is waning. 
`}

In the meantime,
            `}
        </Markdown>
        <Pdf />
    </Page>
)

export default Home
