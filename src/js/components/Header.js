import React from 'react';
import logo from 'img/bemypet.png';
import search from 'img/search.svg';
import styled, { css } from 'styled-components'

import 'css/header.css';

const LogoImg = styled.img`
    cursor: pointer;
    height: 4em;
`

const HeadBoxdiv = styled.div`
    display: flex;
    justify-content: space-between;
    padding: 1%;
`

const Header = () => {
    return (
        <>

            <header>
                <HeadBoxdiv>

                    <a href="#"><LogoImg className="logo" src={logo} alt="logo" /></a>

                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="/forum">Listed Pets</a></li>
                            <li><a href="#">Adoption</a></li>
                            <li><a href="#"><img src={search} alt="" /></a></li>
                        </ul>
                    </nav>

                </HeadBoxdiv>
            </header>


        </>
    )
}

export default Header;