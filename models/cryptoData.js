const mongoose = require('mongoose');

const cryptoDataSchema = new mongoose.Schema({
  coin: { 
    type: String, 
    required: true, 
    enum: ['bitcoin', 'matic-network', 'ethereum']
  },
  price: { type: Number, required: true },
  marketCap: { type: Number, required: true },
  dailyChange: { type: Number, required: true },
  timestamp: { type: Date, default: Date.now }
});

const CryptoData = mongoose.model('CryptoData', cryptoDataSchema);
module.exports = CryptoData;
