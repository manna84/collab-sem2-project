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

const Forum = () => {
    return (

        <>
            <HeadingDiv>
                <HeadingH1>Find the right pet for you</HeadingH1>
                <BtnFull href="/registration">Sign Up</BtnFull>
                <BtnGhost href="/login">Log In</BtnGhost>
            </HeadingDiv>

            <SectionAdopt>
                <h2>Planning to adopt a Pet ?</h2>
                <SectionP>Whether you choose to adopt an adult dog or a puppy, it’s a very personal decision that requires careful research and consideration of the type of home you will be able to provide. The advice and information below can help you make the right decision and find the perfect companion. </SectionP>
                <img src={dog} alt="Dog red" />

                <div className="row" id="forum-head">
                    <h3>want to put your pet for adoption ?</h3>
                    <button type="submit" id="btn-post">GO ahead</button>
                </div>

                <div id="post-box"></div>

            </SectionAdopt>
        </>
    )
}

export default Forum;