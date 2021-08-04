import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import CoinData from '../components/CoinData';
import HistoryChart from '../components/HistoryChart';
import coinGecko from '../apis/coinGecko';
const CoinDetails = () => {
    const {coin} = useParams();
    const [coinData, setCoinData] = useState({});
    useEffect(() => {
        const fetchData = async () => {
            const resultsDay = await coinGecko.get(
                `/coins/${coin}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "1"
                    }
                }
            )
            const resultsWeek = await coinGecko.get(
                `/coins/${coin}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "7"
                    }
                }
            )
            const resultsYear = await coinGecko.get(
                `/coins/${coin}/market_chart/`, {
                    params: {
                        vs_currency: "usd",
                        days: "365"
                    }
                }
            )
            setCoinData({
                day: resultsDay.data.prices,
                week: resultsWeek.data.prices,
                year: resultsYear.data.prices
            });
        }
        fetchData();
    }, [])
    return (
        <div className="coinlist">
            <HistoryChart />
            <CoinData />
        </div>
    )
}

export default CoinDetails
