import React, {Fragment} from 'react';
import Game from './components/Game/Game';
import Header from './components/Header/header'
import HowTo from './components/HowTo/howTo'
import ListenAllBirds from './components/ListenAllBirds/listenAllBirds';
import NextRoundButton from './components/NextRoundButton/NextRoundButton'
import Footer from './components/Footer/Footer'


function App() {
    return (
        <>
            <Header/>
            <HowTo/>
            <ListenAllBirds/>
            <Game/> 
            <NextRoundButton/>
            <Footer/>
        </>
    );
}

export default App;
