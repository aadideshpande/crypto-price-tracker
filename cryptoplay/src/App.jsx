import React from 'react';
import CoinDetails from './pages/CoinDetails';
import CoinSummary from './pages/CoinSummary';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import "./App.css"
import { WatchListContextProvider } from './context/watchListContext';
const App = () => {
    return (
        <div className="container">
            <WatchListContextProvider>
                <BrowserRouter>
                    <Header />
                    <Route exact path="/" component={CoinSummary} />
                </BrowserRouter>
            </WatchListContextProvider>
        </div>
    )
}

export default App
