const express = require('express');
const router = express.Router();
const ArticleList = require("../models/articles");
// const Article_ratesList = require('../models/article_rates');

const moment = require("moment/moment");

//GET
router.get('/',(req,res,next)=>{
    console.log("router get articles")
    ArticleList.getArticles((err, items)=>{        
    if(err){
        console.log(err.message)
        res.json({success: false, message: "failed to get courses."})
      } else {
          res.json(items);
      }
    })
})

router.get('/id',(req,res,next)=>{
  console.log('router get articles by id: ' + req.query._id)
  ArticleList.getArticleById(req.query._id,(err, article)=>{        
  if(err){
      console.log(err.message)
      res.json({success: false, message: "failed to get article."})
    } else {
        res.json(article);
    }
  })
})

module.exports = router;