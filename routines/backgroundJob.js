const cron = require('node-cron'); //TO SCHEDULE BACKGROUND JOB FOR EVERY 2 HOURS
const CryptoData = require('../models/cryptoData');

const coins = ['bitcoin', 'matic-network', 'ethereum'];
const URL='https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cmatic-network%2Cethereum&vs_currencies=usd&include_market_cap=true&include_24hr_change=true'

const fetchCoinData=async()=>{
    try{
        console.log('Background Job is fetching data...');
        const response=await fetch(URL);
        if(!response.ok){
            throw new Error('Error! Status '+response.status);
        }
        const data= await response.json();
        for(coin of coins){
            await CryptoData.create({
                coin: coin,
                price: data[coin].usd,
                marketCap: data[coin].usd_market_cap,
                dailyChange: data[coin].usd_24h_change
            });
        }
    }
    catch(err){
        console.error('Error! '+err);
    }
};

// cron.schedule('*/20 * * * * *', fetchCoinData); Fetches data every 20 seconds for testing purposes

cron.schedule('0 */2 * * *', fetchCoinData);
module.exports=fetchCoinData;
