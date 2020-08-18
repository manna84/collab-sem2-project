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

const HeaderUl =styled.ul`
    display: flex;
    text-transform: uppercase;
`

const NavUlImg = styled.img`
height: 1.5em;
`

const NavUlLi = styled.li`
margin: 1em 2em 0 0;
`

const Header = () => {
    return (
        <>

            <header>
                <HeadBoxdiv>

                    <a href="#"><LogoImg className="logo" src={logo} alt="logo" /></a>

                    <nav>
                        <HeaderUl>
                            <NavUlLi><a href="#">Home</a></NavUlLi>
                            <NavUlLi><a href="/forum">Listed Pets</a></NavUlLi>
                            <NavUlLi><a href="#">Adoption</a></NavUlLi>
                            <NavUlLi><a href="#"><NavUlImg src={search} alt="" /></a></NavUlLi>
                        </HeaderUl>
                    </nav>

                </HeadBoxdiv>
            </header>


        </>
    )
}

export default Header;