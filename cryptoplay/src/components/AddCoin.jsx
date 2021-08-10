import React, { useContext, useState } from 'react'
import { WatchListContext } from '../context/watchListContext';

const AddCoin = () => {
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "litecoin",
        "dogecoin",
        "eos",
        "tezos"
    ];
    const {addCoin} = useContext(WatchListContext);
    const [showDropDown, setShowDropDown] = useState(false);
    const handleClick = (coin) => {
        addCoin(coin);
        setShowDropDown(false);
    }
    return (
        <div className="dropdown">
            <button
                onClick={() => setShowDropDown(!showDropDown)}
                className="btn btn-primary dropdown-toggle"
                type="button">
                Add Coin
            </button>
            <div className={showDropDown ? "dropdown-menu show" :
                "dropdown-menu"}>
                {availableCoins.map(el => {
                    return (
                        <a key={el}onClick={() => handleClick(el)} href="#" className="dropdown-item">
                            {el}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default AddCoin
