const dotenv = require('dotenv');
dotenv.config();
var path = require('path')
const fetch = require('node-fetch');// necessary for fetch api from the express server
const express = require('express')
const mockAPIResponse = require('./mockAPI.js');
const bodyParser = require("body-parser");
const cors = require("cors");
// const { checkUrl } = require('../client/index.js');
const app = express();
const apiKey = process.env.API_KEY;
const apiBase = `https://api.meaningcloud.com/sentiment-2.1?key=${apiKey}&of=json&url=`;

app.use(express.static('dist'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.text());
app.use(cors());

console.log(__dirname)
// console.log(url);

app.get('/', function (req, res) {
   res.sendFile('dist/index.html')
   
//    res.sendFile(path.resolve('src/client/views/index.html'))
})

app.post('/api', async (req,res) => {
    let userInput = req.body;
    console.log(`This is user's input: ${userInput}`);
    // if (userInput.slice(0, 4) === 'http') {
    //     url += `${apiBase}url=`;
        
    // } else {
    //     url += `${apiBase}txt=`
    // }
    //Call meaningcloud sentiment analysis API and pass the user input
    const response = await fetch(`${apiBase}${userInput}&model=general&lang=en`);
    try {
        const data = await response.json();//get the response convert to json
        res.send(data);//send data to server
        console.log(res.status);
        console.log(data);
    } catch (error) {
        console.log("error", error);
    }
})

//--------------

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
    console.log('Example app listening on port 8081!')
})

// app.get('/test', function (req, res) {
//     res.send(mockAPIResponse)
// })

//--------------
