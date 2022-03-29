//獲取 DOM
const button = document.querySelector('.section .button');
const jokeText = document.querySelector('.section .jokebox .p');

//監聽按鈕，並執行函式。
button.addEventListener('click', getJoke);
//載入頁面先執行函式domcontentloaded
document.addEventListener('DOMContentLoaded', getJoke);

async function getJoke() {

    let url = "https://v2.jokeapi.dev/joke/Programming?type=single";
    let jokeData = await fetch(url);
    let jokeObj = await jokeData.json();
    jokeText.innerHTML = jokeObj.joke;
};