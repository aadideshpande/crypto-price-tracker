import React, { useState } from 'react'

const AddCoin = () => {
    const availableCoins = [
        "bitcoin",
        "ethereum",
        "litecoin",
        "dogecoin",
        "eos",
        "tezos"
    ];
    const [showDropDown, setShowDropDown] = useState(false);
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
                        <a href="#" className="dropdown-item">
                            {el}
                        </a>
                    )
                })}
            </div>
        </div>
    )
}

export default AddCoin
