// Requiring module
const fs = require('fs');
const https = require('https');
const privateKey = fs.readFileSync('./key.pem', 'utf8');
const certificate = fs.readFileSync('./cert.pem', 'utf8');
const { body, validationResult } = require('express-validator');
const dotenv = require('dotenv');
dotenv.config();
const credentials = { key: privateKey, cert: certificate };
const express = require('express');
// Creating express object
const app = express();
const absolutepathofhtml = __dirname + "/AirportAssets/html/";
const absolutepathofassets = __dirname + '/public';
const httpsServer = https.createServer(credentials, app);

app.get("/",(req,res) => {
    res.sendFile("powers.html");
} )

httpsServer.listen(8443);

console.log("Server listening https on port 8443");