'use strict';

var express = require('express');
var http = require('http');
var cors = require('cors');
var bodyParser = require('body-parser');

var app = express();
app.use(cors());
app.use(bodyParser.json());

var server = app.listen(3000, function ()
{
    var port = server.address().port;
    console.log('App listening at ' + port);

});

var songsList = [{
    artist: 'John Lennon', title: 'Imagine', year: 1971
}, {
    artist: 'Bob Dylan', title: 'Like a Rolling Stone', year: 1965
}, {
    artist: 'Aretha Franklin', title: 'Respect', year: 1965
}, {
    artist: 'The Beatles', title: 'Hey Jude', year: 1968
}];

var favouriteSongsList = [];

app.get('/songs', function (req, res)
{
    res.send(songsList);
});

app.post('/favourites', function (req, res)
{
    var newFavouriteSong = req.body;
    favouriteSongsList.push(newFavouriteSong);
    res.send(newFavouriteSong);
});

app.delete('/favourites', function (req, res)
{
    favouriteSongsList = [];
    res.send('The list was cleared.');
});
