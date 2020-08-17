import React from 'react';
import logo from 'img/bemypet.png';
import search from 'img/search.svg';

import 'css/header.css';

const Header = () => {
    return (
        <>

            <header>
                <div className="head-box">

                    <a href="#"><img className="logo" src={logo} alt="logo" /></a>

                    <nav>
                        <ul>
                            <li><a href="#">Home</a></li>
                            <li><a href="/forum">Listed Pets</a></li>
                            <li><a href="#">Adoption</a></li>
                            <li><a href="#"><img src={search} alt="" /></a></li>
                        </ul>
                    </nav>

                </div>
            </header>


        </>
    )
}

export default Header;