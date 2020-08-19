import React from 'react'
import Header from "components/Header";
import Footer from "components/Footer";
import Forum from "components/Forum";

const App = () => {
	return (
        
        <>
            <Header/>
            <Forum value={0}/>
            <Footer/>
        </>
    )
}

export default App