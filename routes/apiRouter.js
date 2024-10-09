const express=require('express');
const router=express.Router();
const CryptoData=require('../models/cryptoData');
const calculateSD=require('../services/calculateSD');

router.get('/stats', async (req, res) => {
    const { coin } = req.query; 
    const latestData = await CryptoData.findOne({ coin }).sort({ timestamp: -1 });
    if (!latestData) return res.status(404).send('Coin/Data not found.');
  
    res.json({
      price: latestData.price,
      marketCap: latestData.marketCap,
      dailyChange: latestData.dailyChange
    });
});

router.get('/deviation', async (req, res) => {
    const { coin } = req.query;
    const lastPrices = await CryptoData.find({ coin }).sort({ timestamp: -1 }).limit(100).select('price');
    const prices=lastPrices.map((obj)=>obj.price);
    const deviation = calculateSD(prices);
    res.json({ deviation: deviation.toFixed(2) });

});

module.exports=router;