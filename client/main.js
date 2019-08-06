$(document).ready(startApp);

function startApp(){
    getData();
    foodAge();
}

function getData(){
    var settings={
        url: '../server/getnames.json',
        method: 'GET',
        dataType: 'json',
        success: handleDataFromServer
    }
    $.ajax(settings);
}

function handleDataFromServer(response){
    console.log(response);
}

function foodAge(){  
    var food={
        url:'../server/getfood.json',
        method: 'GET',
        dataType: 'json',
        success: handleDataFromServer
    }
    $.ajax(food);
}