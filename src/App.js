import React, {Fragment} from 'react';
import Header from './components/Header/header'
import HowTo from './components/HowTo/howTo'
import ListenAllBirds from './components/ListenAllBirds/listenAllBirds';

function App() {
    return (
        <Fragment>
            <Header/>
            <HowTo/>
            <ListenAllBirds/>
        </Fragment>
    );
}

export default App;
