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
    var host = server.address().address;
    var port = server.address().port;
    console.log('App listening at http://%s:%s', host, port)

});

var songsList = [{
    artist: 'John Lennon',
    title: 'Imagine',
    year: 1971
},
    {
        artist: 'Bob Dylan',
        title: 'Like a Rolling Stone',
        year: 1965
    },
    {
        artist: 'Aretha Franklin',
        title: 'Respect',
        year: 1965
    },
    {
        artist: 'The Beatles',
        title: 'Hey Jude',
        year: 1968
    }];

var favouriteSongsList = [];

app.get('/songs', function (req, res)
{
    res.send(songsList);
});
app.get('/favourite_songs', function (req, res)
{
    res.send(favouriteSongsList);
});

app.post('/favourite_songs', function (req, res)
{
    favouriteSongsList.push(req.body);
    res.send(favouriteSongsList);
});

app.delete('/favourite_songs', function (req, res)
{
    favouriteSongsList = [];
    res.send(favouriteSongsList);
});
