# API 串接練習

### 描述
#### 透過[jokeapi網站](https://sv443.net/jokeapi/v2/)提供api，和利用Fetch api 接收請求。
---
### 程式碼
HTML部分

```html
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Joke-Website</title>
    <link rel="stylesheet" href="./styles/style.css">
</head>

<body>
    <section class="section">
        <div class="jokebox">
          //Joke 文字呈現位置
            <p class="p"></p>
          //透過按按鈕獲得Joke
            <button class="button">Get A Joke</button>
        </div>
    </section>
    <script src="./app.js"></script>
</body>
</html>
```
JavaSript部分

```JavaSript
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
```
