const fetch = require('node-fetch');
const html = require('express').Router();
const withauth = require('../utils/withauth');

html.get('/',withauth,(req,res)=>{
    res.redirect('home')
})
html.get('login',(req,res)=>{res.render('login')})

html.get('/signup',(req,res)=>{
    res.render('signup')
})




module.exports = html;