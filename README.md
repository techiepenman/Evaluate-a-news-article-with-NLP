

## Project
Evaluate a News Article with Natural Language Processing. 
The app gets the user's input which can be an url of an article and throught an external API call runs Natural Language Processing (NLP).
The text provided is analyzed to determine if it expresses a positive/negative/neutral sentiment.

## Motivation
Practice using module bunlers specifically Webpack and perform configurations to bundle all assets. Getting familiar with Sass and service workers. API call from the server side and update UI on the client side.

## Install
- Fork or clone the repository. 
- Install npm in the root directory where the project is located. 
`npm install`
 By doing that, all the dependencies associated with this project will be installed. 

## API Key
The project will need to make a call to MeaningCloud Sentiment Analysis API to post and receive data. For security reasons, the API key is not provided in this project so you will need to get the credentials from [MeaningCloud](https://www.meaningcloud.com/developer/sentiment-analysis).
Once the key is obtained, simply create a new variable named apiKey in the index.js on the server side and assign the api key to that.

## Run
The app can be executed from the command line. Depends on what environment you like to run the app, the command would be as such:
- For development mode:-
`npm run build-dev`
- For production mode:- 
`npm run build-prod`
- Then run the server:-
 `npm start`
Open the browser and the app is running on port 8081
