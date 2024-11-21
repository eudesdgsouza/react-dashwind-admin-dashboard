const moment  = require("moment");

module.exports = Object.freeze({
    CALENDAR_INITIAL_EVENTS : [
        {title : "Chamada de produto", theme : "GREEN", startTime : moment().add(-12, 'd').startOf('day'), endTime : moment().add(-12, 'd').endOf('day')},
        {title : "Reunião com equipe técnica", theme : "PINK", startTime : moment().add(-8, 'd').startOf('day'), endTime : moment().add(-8, 'd').endOf('day')},
        {title : "Encontro com Cristina", theme : "PURPLE", startTime : moment().add(-2, 'd').startOf('day'), endTime : moment().add(-2, 'd').endOf('day')},
        {title : "Encontro com Alx", theme : "BLUE", startTime : moment().startOf('day'), endTime : moment().endOf('day')}, 
        {title : "Chamada de produto", theme : "GREEN", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Reunião com Cliente", theme : "PURPLE", startTime : moment().startOf('day'), endTime : moment().endOf('day')},
        {title : "Reunião com Cliente", theme : "ORANGE", startTime : moment().add(3, 'd').startOf('day'), endTime : moment().add(3, 'd').endOf('day')},
        {title : "Chamada de produto", theme : "PINK", startTime : moment().add(5, 'd').startOf('day'), endTime : moment().add(5, 'd').endOf('day')},
        {title : "Reunião de Vendas", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Reunião de Produto", theme : "ORANGE", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Reunião de Marketing", theme : "PINK", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Reunião com Cliente", theme : "GREEN", startTime : moment().add(8, 'd').startOf('day'), endTime : moment().add(8, 'd').endOf('day')},
        {title : "Reunião de vendas", theme : "BLUE", startTime : moment().add(12, 'd').startOf('day'), endTime : moment().add(12, 'd').endOf('day')},
        {title : "Reunião com cliente", theme : "PURPLE", startTime : moment().add(16, 'd').startOf('day'), endTime : moment().add(16, 'd').endOf('day')},
    ],

    RECENT_TRANSACTIONS : [
        {name : "Alex", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "alex@dashwind.com", location : "Paris", amount : 100, date : moment().endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "Londres", amount : 190, date : moment().add(-1, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 112, date : moment().add(-1, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "Peru", amount : 111, date : moment().add(-1, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/5-image.jpg", email : "virat@dashwind.com", location : "Londres", amount : 190, date : moment().add(-2, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "miya@dashwind.com", location : "Paris", amount : 230, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 331, date : moment().add(-2, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/1-image.jpg", email : "matrix@dashwind.com", location : "Londres", amount : 581, date : moment().add(-2, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-2, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "jhon@dashwind.com", location : "Paris", amount : 91, date : moment().add(-2, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Canada", amount : 161, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/4-image.jpg", email : "matrix@dashwind.com", location : "EUA", amount : 121, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/6-image.jpg", email : "jhon@dashwind.com", location : "Tokyo", amount : 713, date : moment().add(-3, 'd').endOf('day')},
        {name : "John", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "Londres", amount : 217, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 117, date : moment().add(-3, 'd').endOf('day')},
        {name : "Miya", avatar : "https://reqres.in/img/faces/7-image.jpg", email : "jhon@dashwind.com", location : "Canada", amount : 612, date : moment().add(-3, 'd').endOf('day')},
        {name : "Matrix", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "matrix@dashwind.com", location : "Londres", amount : 631, date : moment().add(-3, 'd').endOf('day')},
        {name : "Virat", avatar : "https://reqres.in/img/faces/2-image.jpg", email : "ereena@dashwind.com", location : "Tokyo", amount : 151, date : moment().add(-3, 'd').endOf('day')},
        {name : "Ereena", avatar : "https://reqres.in/img/faces/3-image.jpg", email : "virat@dashwind.com", location : "Paris", amount : 617, date : moment().add(-3, 'd').endOf('day')},

    
    ]
});
