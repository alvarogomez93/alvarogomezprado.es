var User = require( '../models/user')
const express = require('express')



  
const server = express()


server.get('*', (req, res) => {
  
  if (req.query.username){
  

  res.end('test')
 
  }
  
});

module.exports = server;
        
   
