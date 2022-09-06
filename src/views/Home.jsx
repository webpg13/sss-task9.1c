import React from 'react'
import MyHeader from '../component/Header';
import MyCarousel from '../component/Carousel';
import Articles from '../component/Articles';
import Tutorials from '../component/Tutorials';
import MyFooter from '../component/Footer';

const Home = (props) => {
    return (<div className="App">
        <div id="Header">
            <MyHeader />
        </div>
        <main className="main-container">
            <div id="Carousel">
                <MyCarousel />
            </div>
            <div id="Articles">
                <Articles />
            </div>
            <div id="Tutorials">
                <Tutorials />
            </div>
        </main>
        <footer id="Footer">
            <MyFooter />
        </footer>
    </div>)
};
export default Home