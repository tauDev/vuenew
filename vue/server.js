const express = require('express');
const app = express();

app.get('/',(req,res) => {
    res.send('Hello Word');
})
app.listen(3000,() =>{
    console.log('Start server at port 8080.');
})