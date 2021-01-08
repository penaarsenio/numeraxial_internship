const mongoose = require ('mongoose');

const schema = mongoose.Schema;

const companyListSchema = new schema({
    Name:{
        type: String,
        unique: true
      } ,
      ProfitMargin: Number,
      PERatio: Number,
      ReturnOnEquityTTM: Number,
      ReturnOnAssetsTTM: Number,
      EPSEstimateCurrentYear: Number,
     // DividendShare: Number,
      PriceBookMRQ: Number,
      PriceSales: Number,
      FiftyTwoWeekHigh: Number,
      FiftyTwoWeekLow: Number,
      MarketCapitalizationMln: Number,
      open : Number,
      close: Number,
      //volume: Number
   
    }
);

const Companies = mongoose.model('StockMarket', companyListSchema);

module.exports = Companies;