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




const Footer = () => {
    return (

        <>
            <Footerbox>

                <Footernav>
                    <FooterUl>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
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
