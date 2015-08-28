##Exercise 51 : $http

##Summary
You are provided with a simple application that manages songs. The application should displayed songs list, be able to add new favourite song and cleared the favourites songs list.
Complete `refreshSongs`, `addFavouriteSong`,`removeFavouriteSongs` functions using $http service for making requests and handling responses from external web service.

##Goals
* `song` list should be automatically initialized when app starts, also it should display "Songs were uploaded" `message` inside ***notification*** row
* `addFavouriteSong` function (after saving a new song) should 
    * update `favouriteSongsList`, 
    * set notification to "I just add **"title"** to your favourite songs list!" 
    * clean the artist and title inputs fields 
* `Clear list` button (after removing all favourites songs) should clear the `favouriteSongsList` and set notification `message` to message from server

##API

###Get songs list

`GET /songs` - returns songs

###Save favourite song

`POST /favourites` - returns saved song

###Clear favourite songs list

`DELETE /favourites` - returns a confirmation message

##Before you start, please refer to:
* [angularjs-http](https://egghead.io/lessons/angularjs-http)

##Setup
 You should have installed `npm`, `bower`, `grunt-cli`  packages to run this example. To resolve dependencies run:

```
npm install
```

```
bower install
```

To run the application:

```
grunt serve
```
To run the server:

```
nodemon server.js
```

To run cucumber tests:

```
grunt test
```

To run unit tests:

```
grunt karma
```

Good luck!
