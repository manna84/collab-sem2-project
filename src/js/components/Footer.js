import React from 'react';
import facebook from 'img/facebook.svg';
import twitter from 'img/twitter.svg';
import snapchat from 'img/snapchat.svg';
import youtube from 'img/youtube.svg';
import styled, { css } from 'styled-components'

import 'css/footer.css';

const Footerbox = styled.footer`
    background-color: #FC8121;
    padding: 4% 2%;
    font-weight: 400;
    letter-spacing: 1px;
`
const Footernav = styled.nav`
    display: flex;
    justify-content: space-between;
`
const Footerimg = styled.img`
    height: 2em;
`
const FooterUl = styled.ul`
    display: flex;
`
const LiBox1 = styled.li`
    margin-left: 2em;
`
const Anchor1 = styled.a`
    color: #ffffff;
    text-transform: uppercase;
    font-weight: 300;
    &:hover {
    color: #fc2828;
    transition: color.2s;    }
`





const Footer = () => {
    return (

        <>
            <Footerbox>

                <Footernav>
                    <FooterUl>
                        <LiBox1><Anchor1 href="">Terms & Conditions</Anchor1></LiBox1>
                        <LiBox1><Anchor1 href="">Privacy Policy</Anchor1></LiBox1>
                        <LiBox1><Anchor1 href="">About Us</Anchor1></LiBox1>
                        <LiBox1><Anchor1 href="">Contact Us</Anchor1></LiBox1>
                    </FooterUl>

                    <FooterUl>
                        <li><a href=""><Footerimg src={facebook} alt="facebook" /></a></li>
                        <li><a href=""><Footerimg src={twitter} alt="twitter" /></a></li>
                        <li><a href=""><Footerimg src={snapchat} alt="snapchat" /></a></li>
                        <li><a href=""><Footerimg src={youtube} alt="youtube" /></a></li>
                    </FooterUl>

                </Footernav>

                <p>&copy; 2020 Be my pet Canada</p>

            </Footerbox>
        </>

    )
}

export default Footer;
