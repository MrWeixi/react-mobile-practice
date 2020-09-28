var express = require("express");
var router = express.Router();
var config = require("./config.js");
var url = require("url");
var homehot = require("./data/home/hotdata")
var searchData = require("./data/search")

router.get(config.homehot1,function(req,res){
    // 
    let cityName =url.parse(req.url,true).query.city;
    console.log('城市',cityName);
    res.send(homehot.hot1)
})

router.get(config.homehot2,function(req,res){
    let cityName =url.parse(req.url,true).query.city;
    console.log('城市',cityName);
    res.send(homehot.hot2)
})

// 搜索
router.get("/search",(req,res)=>{
    // 接受参数  city searchcontent
    let cityName=url.parse(req.url,true).query.city;
    let contentName=url.parse(req.url,true).query.content;
    console.log("城市",cityName,'内容',contentName);
    res.send(searchData)
})

module.exports = router;