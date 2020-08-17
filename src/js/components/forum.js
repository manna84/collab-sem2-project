import React from 'react';
import dog from 'img/dog-red.png'
import styled from 'styled-components'

const HeadingDiv = styled.div`
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%,-50%);
`

import 'css/Forum.css';

const Forum = () => {
    return (

        <>
            <HeadingDiv>
                <h1>Find the right pet for you</h1>
                <a href="/registration" className="btn btn-full">Sign Up</a>
                <a href="/login" className="btn btn-ghost">Log In</a>
            </HeadingDiv>

            <section className="section-adopt row">
                <h2>Planning to adopt a Pet ?</h2>
                <p>Whether you choose to adopt an adult dog or a puppy, it’s a very personal decision that requires careful research and consideration of the type of home you will be able to provide. The advice and information below can help you make the right decision and find the perfect companion. </p>
                <img src={dog} alt="Dog red"/>

                <div className="row" id="forum-head">
                    <h3>want to put your pet for adoption ?</h3>
                    <button type="submit" id="btn-post">GO ahead</button>
                </div>

                <div id="post-box"></div>

            </section>
        </>
    )
}

export default Forum;