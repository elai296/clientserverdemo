const express= require('express');
const cors= require('cors');
const server= express();
var favoriteFood=
[{
	"favorite food": "chinese",
	"age": 10
}];

var name=
[{
	"name": "fajias"
}, {
	"name": "chowmein"
}, {
	"name": "beef salad"
}, {
	"name": "thai tea"
}];

server.use( cors() )//request being received, you getting it, between listen and get

server.get('/getfood', (request,response)=>{
    console.log('food:', favoriteFood);
    response.send(favoriteFood);
}); 

server.get('/names', (request,response)=>{
    console.log('name:', name);
    response.send(name);
}); 

server.listen(3001, function(){console.log('server has started 3')});