import React from 'react';
import dog from 'img/dog-red.png'
import styled, { css } from 'styled-components'

import 'css/Forum.css';

const HeadingDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`;

const HeadingH1 = styled.h1`
font-size: 4em;
    text-transform: uppercase;
    line-height: 115%;
    word-spacing: 4px;
    letter-spacing: 2px;
    color: #ffffff;
`
const Row = css`
    max-width: 1200px;
    margin: 0 auto;
`

const SectionAdopt = styled.section`
${Row}
padding: 3% 0;
text-align: center;
`

const SectionAdoptH2 = styled.h2`
    font-size: 2em;
    text-transform: uppercase;
    word-spacing: 4px;
    letter-spacing: 2px;
    text-align: center;
    &::after {
        display: table;
        content: "";
        clear: both;
        height: .1em;
        width: 25%;
        background-color: #FC8121;
        margin: .5em auto;
    }
`

const SectionAdoptH3 = styled.h3`
font-family: 'lato',Arial, Helvetica, sans-serif;
    text-align: center;
    text-transform: uppercase;
    letter-spacing: 1px;
    word-spacing: 2px;
`
}

const SectionP = styled.p`
    width: 90%;
    margin: 0 auto;
    text-align: center;
`
const BtnCommon = css`
    border: .02em solid #FC8121;
    padding: .8em 1.4em;
    color: #ffffff;
    text-transform: uppercase;
    letter-spacing: 1px;
    border-radius: 50em;
    font-size: 1.2em;
    &:hover {
        ${BtnFull} {
            background-color: #e76703;
    border: .02 solid #e76703;
    transition: background-color .2s, border .2s;
        }
    }

    &:hover {
        ${BtnFull} {
            color: #ffffff;
            transition: color .2s;
        }
    }
`

const BtnFull = styled.a`
${BtnCommon}
background-color: #FC8121;
`

const BtnGhost = styled.a`
${BtnCommon}
margin-left: 1em;
    color: #FC8121;
`

const Dogimg = styled.img`
margin: 2em;
`
const PetRow = styled.div`
${Row}
`

const PostDiv = styled.div`
margin-top: 2em;
`

const Forum = () => {
    return (

        <>
            <HeadingDiv>
                <HeadingH1>Find the right pet for you</HeadingH1>
                <BtnFull href="/registration">Sign Up</BtnFull>
                <BtnGhost href="/login">Log In</BtnGhost>
            </HeadingDiv>

            <SectionAdopt>
                <SectionAdoptH2>Planning to adopt a Pet ?</SectionAdoptH2>
                <SectionP>Whether you choose to adopt an adult dog or a puppy, it’s a very personal decision that requires careful research and consideration of the type of home you will be able to provide. The advice and information below can help you make the right decision and find the perfect companion. </SectionP>
                <Dogimg src={dog} alt="Dog red" />

                <PetRow id="forum-head">
                    <SectionAdoptH3>want to put your pet for adoption ?</SectionAdoptH3>
                    <button type="submit" id="btn-post">GO ahead</button>
                </PetRow>

                <PostDiv id="post-box"></PostDiv>

            </SectionAdopt>
        </>
    )
}

export default Forum;