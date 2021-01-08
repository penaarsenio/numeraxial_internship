const router = require('express').Router();
const Companies = require('../models/companies.model');


router.route('/').post((req, res) =>{
   

    const info = req.body;
     console.log(req.body);
     
    const obj = {
      }

    if(info.MarketCapMin!=0 || info.MarketCapMax!=5000000){
      obj.MarketCapitalizationMln = {
        $gte:info.MarketCapMin,
        $lte: info.MarketCapMax }
    }  

    if(info.PEMin!=0 || info.PEMax!=1000){
      obj.PERatio = {
        $gte:info.PEMin,
        $lte: info.PEMax }
    }  


    if(info.OpenMin!=0 || info.OpenMax!=10000){
      obj.open = {
        $gte:info.OpenMin,
        $lte: info.OpenMax }
    }
    
    
    if(info.CloseMin!=0 || info.CloseMax!=10000){
      obj.close = {
        $gte:info.CloseMin,
        $lte: info.CloseMax }
    }  


    if(info.VolumeMin!=0 || info.VolumeMax!=100000000){
      obj.volume = {
        $gte: parseInt(info.VolumeMin),
        $lte: parseInt(info.VolumeMax)
       }
    }  



    if(info.ProfitMarginMin!=0 || info.ProfitMarginMax!=1){
      obj.ProfitMargin = {
        $gte:info.ProfitMarginMin,
        $lte: info.ProfitMarginMax }
    }  


    if(info.ReturnOnEquityMin!=0 || info.ReturnOnEquityMax!=5){
      obj.ReturnOnEquityTTM = {
        $gte: parseInt(info.ReturnOnEquityMin),
        $lte: parseInt(info.ReturnOnEquityMax) }
    }  

    if(info.DividendShareMin!=0 || info.DividendShareMax!=10){
      obj.DividendShare = {
        $gte: parseInt(info.DividendShareMin),
        $lte: parseInt(info.DividendShareMax) }
    } 
    
    if(info.ReturnOnAssestsMin!=0 || info.ReturnOnAssestsMax!=5){
      obj.ReturnOnAssetsTTM = {
        $gte: parseInt (info.ReturnOnAssestsMin),
        $lte: parseInt(info.ReturnOnAssestsMax) }
    }  

    if(info.EpsCurrYearMin!=0 || info.EpsCurrYearMax!=100){
      obj.EPSEstimateCurrentYear = {
        $gte:info.EpsCurrYearMin,
        $lte: info.EpsCurrYearMax }
    }  


    if(info.PriceBookMin!=0 || info.PriceBookMax!=100){
      obj.PriceBookMRQ = {
        $gte:info.PriceBookMin,
        $lte: info.PriceBookMax }
    }  


    if(info.FiftyTwoWeekHighMin!=0 || info.FiftyTwoWeekHighMax!=10000){
      obj.FiftyTwoWeekHigh= {
        $gte:info.FiftyTwoWeekHighMin,
        $lte: info.FiftyTwoWeekHighMax }
    }  

    if(info.FiftyTwoWeekLowMin!=0 || info.FiftyTwoWeekLowMax!=10000){
      obj.FiftyTwoWeekLow= {
        $gte:info.FiftyTwoWeekLowMin,
        $lte: info.FiftyTwoWeekLowMax }
    }
    

    

    Companies.find({ $and: [ obj
      // {
      //   MarketCapitalizationMln: {
      //     $gte:info.MarketCapMin,
      //     $lte: info.MarketCapMax }
      //   }
      //   , {
      //     PERatio: {
      //       $gte: info.PEMin,
      //       $lte: info.PEMax
      //     }
      //   },
       //  {
      //   open: { 
      //     $gte: info.OpenMin,
      //     $lte: info.OpenMax
      //   }
      // }, {
      //   close: {
      //     $gte: info.CloseMin,
      //     $lte: info.CloseMax
      //   }
      // },{
      //   ProfitMargin: {
      //     $gte: info.ProfitMarginMin,
      //     $lte: info.ProfitMarginMax
      //   }
      // },
      // {
      //   ReturnOnEquityTTM: {
      //     $gte: info.ReturnOnEquityMin,
      //     $lte: info.ReturnOnEquityMax
      //   }
      // },
      //  {
      //   ReturnOnAssetsTTM:{
      //     $gte: info.ReturnOnAssestsMin,
      //     $lte: info.ReturnOnAssestsMax
      //   }

      // }, {
      //   EPSEstimateCurrentYear: {
      //     $gte: info.EpsCurrYearMin,
      //     $lte: info.EpsCurrYearMax
      //   }
      // },  {
      //   PriceBookMRQ: {
      //     $gte: info.PriceBookMin,
      //     $lte: info.PriceBookMax
      //   } 
      //   }, 
        // {
        //   FiftyTwoWeekHigh: { 
        //     $gte: info.FiftyTwoWeekHighMin,
        //     $lte: info.FiftyTwoWeekHighMax
        //   } 
        // }
      //   , info.FiftyTwoWeekLowMin!=="" ? { FiftyTwoWeekLow: {
      //       $gte: info.FiftyTwoWeekLowMin,
      //       $lte: info.FiftyTwoWeekLowMax
      //     } 
      //   } : { FiftyTwoWeekLow:{
      //     $gte: 0
      //   }
      // }
      //, {
      //   DividendShare: {
      //     $gte: info.DividendShareMin,
      //     $lte: info.DividendShareMax
      //   }
      // }, {
      //   volume: {
      //     $gte: info.volumeMin,
      //     $lte: info.volumeMax
      //   }
      // }
      
        ]
          } )
          .exec()
          .then(data =>{  res.json(data)})
          .catch(err => res.status(400).json('Error' + err));
    
});

module.exports = router;