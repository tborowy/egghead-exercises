##Exercise 51 : $http
Your task is to use $http service for making requests and handling responses from external web services.
You start with ready server side:
* ```get('/songs'...)``` - return list of songs
* ```get('/favourite_songs'...)``` - return list of favourite songs
* ```post('/favourite_songs'...)``` - add new favourite song to  **favouriteSongsList**
* ```delete('/favourite_songs'...)``` - clear list of favourite songs


###Requirements
* don't forget to add to the controller $http service 
* implement support for queries GET (both) - put data into **songs** and **favouriteSongs** variable
* complete **addFavouriteSong** and **removeFavouriteSongs** functions
* when clear button is pressed a list of your favorite songs should be removed

###Result
* you start with:

![alt text](app/assets/1.png)

* when get request works:

![alt text](app/assets/2.png)

* add new favourite song

![alt text](app/assets/3.png)

###To run server
* ```npm install```
* ```cd angular-egghead\app```
* ```node express.js```

###Before you start, please refer to:
* [angularjs-http](https://egghead.io/lessons/angularjs-http)

Good luck!
