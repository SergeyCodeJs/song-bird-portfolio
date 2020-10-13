import React from 'react';
import Layout from './hoc/SiteLayout/SiteLayout'
import withData from './hoc/withData'
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
import Game from './components/Game/Game';
import Header from './components/Header/header'
import HowTo from './components/HowTo/howTo'
import ListenAllBirds from './components/ListenAllBirds/listenAllBirds';
import NextRoundButton from './components/NextRoundButton/NextRoundButton'
import Footer from './components/Footer/Footer'

function App() {
    return (
        <ErrorBoundary>
            <Layout>
                <Header/>
                <HowTo/>
                <ListenAllBirds/>
                <Game/>
                <NextRoundButton/>
                <Footer/>
            </Layout>
        </ErrorBoundary>
    );
}

export default withData(App);
