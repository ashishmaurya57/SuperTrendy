import React from 'react';
import './home.css';
import Header from '../../components/header/Header';
import ExploreCloth from '../../components/ExploreCloth/ExploreCloth';
import Appdownload from '../../components/appdownload/Appdownload';
import Footer from '../../components/footer/Footer';
import Navbar from '../../components/navbar/Navbar';
const Home = () => {
    return (
        <div >
        <Navbar/>

             <Header/>
           <ExploreCloth/>
           <Appdownload/>
           <Footer/>
        </div>
    );
}

export default Home;
