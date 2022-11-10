const express = require('express');
const https = require('https');
const fs = require('fs');

const options = {}

const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('Hello World!')
})



app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

https.createServer(options, app).listen(3030);


// main().catch(err => console.log(err));

async function main() {

}