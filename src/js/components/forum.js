import React, { useState } from 'react';
import ReactDom from 'react-dom'
import dog from 'img/dog-red.png'
import styled, { css } from 'styled-components'
import { Input } from 'antd';

import 'css/Forum.css';
import 'antd/dist/antd.css';

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

const Postform = styled.div`
margin-top:2em;
`

const BtnPost = styled.button`
    background-color: rgb(134, 90, 255);
    border: none;
    border-radius: 50em;
    color: #ffffff;
    text-transform: uppercase;
    margin-top: .5em;
    letter-spacing: 1px;
    padding: 2% 3%;
    margin-top: 1em;
    font-size: 1.1em;
    &:hover {
        opacity: .8;
        transition: opacity .2s;
    }
`

const Forum = () => {

    const { TextArea } = Input;

   
    let boxValue=""

    const addToForm = (event) => {
        console.log("success");
        boxValue = event.currentTarget.value;
        console.log(boxValue)
        event.preventDefault();
    //     setTitle(event.target.value)
    //     const [textInput, setTitle] = useState('')
    //     console.log(textInput);
    const abc = <p>{boxValue}</p>;
        ReactDom.render(abc, document.getElementById('postForm'));
    }

    const clickPost = (event) => {
        event.preventDefault();
        const element = <section className="section-form">
        <div className="numberBox">
            <p>Total number of pets of adoption</p>
            <div id="totalAdopt"></div>
        </div>
        <h3>Please post all the information regarding your pet below</h3>
        <div className="post-form-box row">
            <form id="petForm">
                <Input.TextArea type="textarea" rows={10} size={"large"} onPressEnter={addToForm} />
                <input type="submit" id="countSubmit" />
            </form>
        </div>
        <ul id="forum-box" className="row"></ul>
        </section>;
        ReactDom.render(element, document.getElementById('postDiv'));
    }

    const submitPost = (event) => {
        event.preventDefault();
        console.log("mannaaaaa")
    }

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
                    <BtnPost type="button" onClick={clickPost}>GO ahead</BtnPost>
                </PetRow>

                <PostDiv id="postDiv"></PostDiv>
                {/* <p>{textInput}</p> */}
                <Postform id="postForm"></Postform>

            </SectionAdopt>
        </>
    )
}

export default Forum;