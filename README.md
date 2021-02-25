# Evaluate A News Article with Natural Language Processing

Project 4 of Udacity Front End Web Developer Nanodegree Program

The aim of this project is to use multiple build tools to assist in creating a web application that allows users to run Natural Language Processing (NLP) on articles found on websites. When a user submits a URL to an article, the web application makes use of the [MeaningCloud API](https://www.meaningcloud.com/products/sentiment-analysis) to display the sentiment analysis of the given webpage.

## Technology & Build Tools
* HTML
* SASS/CSS
* JavaScript
* Node
* Express
* Webpack/webpack-dev-server
* Babel
* Jest
* Workbox/Service-Worker
* meaningCloud API

## Installation
Install node and npm from your terminal
1. Clone repo 
```
git clone <repo>
```
2. Install npm
```
npm install
```
3. Install required loaders and plugins
```
# Development mode installations
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin
npm i -D workbox-webpack-plugin
```
4. Sign up for an API key at [meaningcloud.com](https://www.meaningcloud.com/developer/create-account)

5. Configure environment variables
    i. npm install dotenv
    ```
    ii. Create a `.env` file at  root of your project
    iii. Add API key to your `.env` file:
    ```
    API_KEY=***************
    ```
6. Start the web application
Command | Action
:------------: | :-------------:
`npm run build-prod` | Build project
`npm start` | Run project

7. Open browser at http://localhost:8081/

8. Enter URL and hit submit.