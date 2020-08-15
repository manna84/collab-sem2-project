import React from 'react'
import Header from "components/Header";
import Footer from "components/Footer";
import Forum from "components/Forum";

import 'css/normalize.css';
import 'css/default.css';
import 'css/index.css';

const App = () => {
	return (
        
        <>
            <Header/>
            <Forum/>
            <Footer/>
        </>
    )
}

export default App