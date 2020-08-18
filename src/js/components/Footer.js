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

const Footer = () => {
    return (

        <>
            <Footerbox>

                <nav>
                    <ul>
                        <li><a href="">Terms & Conditions</a></li>
                        <li><a href="">Privacy Policy</a></li>
                        <li><a href="">About Us</a></li>
                        <li><a href="">Contact Us</a></li>
                    </ul>

                    <ul>
                        <li><a href=""><img src={facebook} alt="facebook" /></a></li>
                        <li><a href=""><img src={twitter} alt="twitter" /></a></li>
                        <li><a href=""><img src={snapchat} alt="snapchat" /></a></li>
                        <li><a href=""><img src={youtube} alt="youtube" /></a></li>
                    </ul>

                </nav>

                <p>&copy; 2020 Be my pet Canada</p>

            </Footerbox>
        </>

    )
}

export default Footer;
