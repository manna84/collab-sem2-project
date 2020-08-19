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

const HeaderUl = styled.ul`
    display: flex;
    text-transform: uppercase;
`

const NavUlImg = styled.img`
height: 1.5em;
`

const NavUlLi = styled.li`
margin: 1em 2em 0 0;
`

const NavAnchor = styled.a`
    color: #ffffff;
    letter-spacing: 1px;
    border-bottom: .125em solid transparent;
    padding-bottom: .08em;
    &:hover {
    color: #FC8121;
    border-bottom: .05em solid #ffffff;
    transition: color .2s, border-bottom .2s;
}
`

const NavAnchorLast = styled.li`
border-bottom: none;
`

const Header = () => {
    return (
        <>

            <header>
                <HeadBoxdiv>

                    <a href="#"><LogoImg className="logo" src={logo} alt="logo" /></a>

                    <nav>
                        <HeaderUl>
                            <NavUlLi><NavAnchor href="#">Home</NavAnchor></NavUlLi>
                            <NavUlLi><NavAnchor href="/forum">Listed Pets</NavAnchor></NavUlLi>
                            <NavUlLi><NavAnchor href="#">Adoption</NavAnchor></NavUlLi>
                            <NavUlLi><NavAnchorLast href="#"><NavUlImg src={search} alt="search icon" /></NavAnchorLast></NavUlLi>
                        </HeaderUl>
                    </nav>

                </HeadBoxdiv>
            </header>


        </>
    )
}

export default Header;