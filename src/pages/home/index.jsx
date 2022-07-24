import React from 'react'
import Page from '../../containers/Page'
import Flex from '../../components/Flex'
import HomeLayout from '../../components/HomeLayout'
import Markdown from '../../components/Markdown'
import ContactEmail from '../../components/ContactEmail'

const Home = () => (
    <Page>
        <HomeLayout>
            <Flex
                {...{
                    flexDirection: 'column',
                    gap: 'md',
                }}
            >
                <Markdown>
                    {`
*22 July 2022*

### Who we're looking for

Hi, it's Bennett from the [Bobtail Yearlings](https://www.bobtailyearlings.com). We're looking for an entrepreneur who recognizes the opportunity presented by *Bobtail Method*, our songwriting book. I wrote the manuscript that you see here as a proof of concept to win over the indie labels. I never published it on my own, since it really works best as an interactive tutorial and compositional tool.

So if you're interested in partnering with us to turn Bobtail Method into an online app for both web and native platforms, please get in touch!
                    `}
                </Markdown>
                <ContactEmail />
                <Markdown>
                    {`
### The backstory

Back when [*Yearling's Bobtail*](https://www.yearlingsbobtail.com) was a standalone album, I sent out demo CDs and got a good response from several indie labels. But they wanted me to build a fanbase on my own, which confused me. I'm a nobody; I have no leverage. It would take me years to get the same results that a label could get in one day. If the idea of a label is to make any sense at all, then *my* role should be to create the most remarkable work that *they*, with their leverage, can easily promote. And by making "the *Ulysses* of rock albums"— well, I thought I'd done that.

But okay, I tried to do things their way for a while. I tried the hustle. And… it didn't feel good at all. I wasn't improving creatively; I wasn't advancing the art form. In fields where genuine innovation happens, fake work that wastes your time is known as "bullshit"— I don't like to curse, but that's the technical term. And my bullshit detector kept going off. It kept telling me that this was the wrong way to go. So I decided not to do the hustle. And anyone who cares about the art form wouldn't want me to, either.

Instead of building a fanbase, then, I wrote a songwriting book called *Bobtail Method* and sent out copies of the manuscript that you see here. The point was to show the labels that: it takes time to compose strong melodies and chord progressions, and this is where a lot of *my* time goes; I care about helping other artists improve, and I can help the ones on *their* rosters; and, the book can promote the album, because it uses my own songs as musical examples.

I just figured, if you're a label, then surely this is the kind of thing you'd rather see a band do. Because obviously you want bands to innovate; the requirement to build a fanbase is just a bone you throw to those who can't. Right? Well… no. The indie labels still wanted to see me build a fanbase. But I didn't see anything wrong with my reasoning. So I assumed I just hadn't met the threshold. If I stuck with my strategy of always trying to advance the art form, then eventually I'd meet it, however many years it took.

So I invented [amnesticism](https://digital.lib.washington.edu/researchworks/handle/1773/23566), a method for tonal composition in multidimensional spaces. I patented [Bobtail Dominoes](https://bobtaildominoes.com), a musical tile game. And, of course, I coded and illustrated the audio webcomic to go along with *Yearling's Bobtail*. But sadly, the indie labels ignored every single one. Finally, it hit me: I'll never meet the threshold, because there isn't one. It's not possible to avoid the hustle by advancing the art form, because the indie labels are loyal to the *hustle*. It's not that the art doesn't matter at all. It's just that, given the charitable support their artists enjoy, the art can be anything, and it's just as good.

Have no fear, though. There *are* non-indie music fans out there who've never lost the desire to see bands try to advance the art form. And given that you're here, you might be one of them!
                    `}
                </Markdown>
            </Flex>
        </HomeLayout>
    </Page>
)

export default Home
