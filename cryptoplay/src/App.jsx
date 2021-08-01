import React from 'react';
import CoinDetails from './pages/CoinDetails';
import CoinSummary from './pages/CoinSummary';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './components/Header';
import "./App.css"
const App = () => {
    return (
        <div>
           <BrowserRouter>
                <Header />
                <Route exact path = "/" component = {CoinSummary} />
           </BrowserRouter>
        </div>
    )
}

export default App
