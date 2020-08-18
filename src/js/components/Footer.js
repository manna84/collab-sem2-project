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
const Paragraph = styled.p`
    display: block;
    margin-top: 3em ;
    text-align: center;
    color: #ffffff;
    text-transform: uppercase;
`
const Anchor2 = styled.a`
    margin-right: 2em;
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
                        <li><Anchor2 href=""><Footerimg src={facebook} alt="facebook" /></Anchor2></li>
                        <li><Anchor2 href=""><Footerimg src={twitter} alt="twitter" /></Anchor2></li>
                        <li><Anchor2 href=""><Footerimg src={snapchat} alt="snapchat" /></Anchor2></li>
                        <li><Anchor2 href=""><Footerimg src={youtube} alt="youtube" /></Anchor2></li>
                    </FooterUl>

                </Footernav>

                <Paragraph>&copy; 2020 Be my pet Canada</Paragraph>

            </Footerbox>
        </>

    )
}

export default Footer;
