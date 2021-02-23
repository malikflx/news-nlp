const dotenv = require('dotenv');
dotenv.config()

var path = require('path')
const express = require('express')
const bodyParser = require('body-parser')
const mockAPIResponse = require('./mockAPI.js')
const fetch = require('node-fetch');

// start express server
const app = express();

// Cors for browser-server communitcation without security interruptions
const cors = require('cors');
const json = require('./mockAPI.js');
// const { get } = require('http');

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static('dist'));


// API Credentials

// let userInput = [];


app.get('/', function (req, res) {
  res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests
app.listen(8081, function () {
  console.log('Example app listening on port 8081!')
})

app.get('/test', function (req, res) {
  res.send(mockAPIResponse)
})

app.post('/analyze', function (req, res) {
  const baseURL = 'https://api.meaningcloud.com/sentiment-2.1';
  const apiKey = process.env.API_KEY;
  console.log(`Your API Key is ${apiKey}`);
  const articleUrl = req.body.articleUrl;

  const params = `?key=${apiKey}&lang=en&model=general&url=${articleUrl}`;
  const getUrl = baseURL + params;

  fetch(getUrl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/JSON',
    }
  }).then((response) => {
    return response.json();
  }).then((data) => {
    console.log("Response from Meaning Cloud (server-side)", data);
    res.send({
      score_tag: data.score_tag,
      agreement: data.agreement,
      subjectivity: data.subjectivity,
      confidence: data.confidence
    })
  });
})

