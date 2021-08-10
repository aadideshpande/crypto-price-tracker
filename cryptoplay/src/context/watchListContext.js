import React, { createContext, useState } from "react";

export const WatchListContext = createContext();
export const WatchListContextProvider = props => {
    const [watchList, setWatchList] = useState(["bitcoin", "ethereum", "dogecoin"])
    
    const deleteCoin = (coin) => {
        setWatchList(watchList.filter(el => {
            return el !== coin
        }))
    }

    const addCoin = coin => {
        // check if coin is already in our list or not
        if (watchList.indexOf(coin) == -1) {
            setWatchList([...watchList, coin]);
        }
    }
    return (
        <WatchListContext.Provider value = {{watchList, deleteCoin, addCoin}}>
            {props.children}
        </WatchListContext.Provider>
    )
}