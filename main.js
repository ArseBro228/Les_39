// Функция
// Процедура

// function name(params) {
//     Инструкция
// }

// function sendMessage() {
//     alert("Привет")
// }
// sendMessage()

// let name = prompt("Введите своё имя ") // Глобальные переменные
// let age = +prompt("Введите свой возраст") // Глобальные переменные
// Java()
// function Java() {
//     let name = "Дима" // Локальные переменные
//     let age = 15 // Локальные переменные
//     alert(Привет, тебя зовут ${name} . И тебе ${age} лет.)
// }
// alert(Привет, тебя зовут ${name} . И тебе ${age} лет.)

// function sendMessage(name, age) {
//     let a = Привет, тебя зовут ${name} . И тебе ${age} лет.
//     alert(a)
// }
// let a = prompt("Как тебя зовут ")
// let b = +prompt("Какой твой возраст ")
// sendMessage(a, b)

// Функция
// function name(params) {
//     Инструкция
//     return результат
// }
// let a = name()
// alert(a)

// function sendMessage(name, age) {
//     let Message = Привет, тебя зовут ${name} . И тебе ${age} лет.
//     return Message
// }
// let a = prompt("Как тебя зовут ")
// let b = +prompt("Какой твой возраст ")
// sendMessage(a, b)
// let result = sendMessage(a, b)
// alert(result)


// 8.1
// let a = prompt(`название главы`)
// let b = prompt(`о чём она`)
// function display_message(a, b){
//     let MSG = `Глава ${a}, рассказывает нам ${b}`
//     return MSG
// }
// let res = display_message(a, b)
// alert(res)

// 8.2
// let a = prompt(`название книги`)
// function favourite_book(a){
//     let MSG = `Одна из моих любимых книг это ${a}!`
//     return MSG
// }
// let res = favourite_book(a)
// alert(res)

// 8.3
// let a = prompt(`size`)
// let b = prompt('text')
// function make_shirt(a, b){
//     let MSG = `Size = ${a}
// Text = ${b}`
//     return MSG
// }
// let res = make_shirt(a, b)
// alert(res)

// 8.4
// let a1 = `L`
// let b1 = `I LOVE JS`
// function make_shirt(a1, b1){
//     let MSG = `Size = ${a1}
// Text = ${b1}`
//     return MSG
// }
// let res1 = make_shirt(a1, b1)
// alert(res1)
// let a2 = prompt(`size`)
// let b2 = prompt('text')
// function make_shirt(a2, b2){
//     let MSG = `Size = ${a2}
// Text = ${b2}`
//     return MSG
// }
// let res2 = make_shirt(a2, b2)
// alert(res2)

// 8.5
let opis = "красивой, богатой и большой "
let country = prompt("Введите название страны")
let city = prompt(`Введите название города в ${country} `)
let country_2 = prompt("Введите название другой или тойже страны")
let city_2 = prompt(`Введите название города в ${country_2}`)
function describe_city(){
    alert(`Город ${city} находится в ${opis} стране под названием ${country}`)
    alert(`Город ${city_2} находится в ${opis} стране под названием ${country_2}`)
}
describe_city(opis, country, city, country_2, city_2)
