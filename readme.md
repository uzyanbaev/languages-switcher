# Navigation

- [English](#english)
- [Russian](#russian)

# Language Switcher for Websites (english) <a name="english"></a>

This is a simple language switcher for JavaScript-based websites, allowing you to switch between languages quickly and easily.

## Demo
- [demo](https://uzyanbaev-dev.ru/languages-switcher/)

## How to Use

`HTML`

> There are 3 language switches and 1 reset in this HTML, you can add more languages
```html
    <!-- Example -->
    <div class="container">
        <h1 id="title" class="title">Hello</h1>
        <p id="text" class="title__text">Example text</p>
    </div>

    <!--languages switcher-->
    <div class="languages" id="languageSelector">
        <div class="languages__wrapper">
            <img class="languages__item" src="img/languages/russian.png" alt="Russian flag" onclick="changeLanguage('ru')">
            <img class="languages__item" src="img/languages/china.png" alt="Reset language" onclick="changeLanguage('china')">
            <img class="languages__item" src="img/languages/english.png" alt="Reset language" onclick="changeLanguage('english')">
            <img class="languages__item" src="img/languages/reset.png" alt="Reset language" onclick="resetLanguage('english')">
        </div>
    </div>
```

`CSS`
```CSS
.languages {
    position: absolute;
    z-index: 4;
    top: 125px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #202020;
    border-radius: 15px;
    width: 220px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.languages__item {
    cursor: pointer;
}
```

`JavaScript`

> On the 3rd line, specify the path to your `json`
```javascript
function changeLanguage(id) {
    fetch('data/translation.json')
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                let element = document.querySelector(`#${key}`);
                if (element) {
                    element.textContent = data[key][id];
                }
            }

            document.body.className = id;
        })
        .catch(error => console.error('Error:', error));
}

function resetLanguage() {
    location.reload();
}
```

`JSON`
> you will need to add the ID to the HTML element and use it in `json`

```json
{
    "title": {
        "ru": "Привет",
        "china": "嗨",
        "english": "Hello"
    },
    "text": {
        "ru": "Пример текста",
        "china": "示例文本",
        "english": "Example text"
    }
}
```

<hr>

# Language Switcher for Websites (russian) <a name="russian"></a>

Это простое средство переключения языков для веб-сайтов на основе JavaScript, позволяющее быстро и легко переключаться между языками.
## Демонстрация
- [demo](https://uzyanbaev-dev.ru/languages-switcher/)

## Как использовать

`HTML`

> В этом HTML-коде есть 3 языковых переключателя и 1 сброс, вы можете добавить больше языков
```html
    <!-- Example -->
    <div class="container">
        <h1 id="title" class="title">Hello</h1>
        <p id="text" class="title__text">Example text</p>
    </div>

    <!--languages switcher-->
    <div class="languages" id="languageSelector">
        <div class="languages__wrapper">
            <img class="languages__item" src="img/languages/russian.png" alt="Russian flag" onclick="changeLanguage('ru')">
            <img class="languages__item" src="img/languages/china.png" alt="Reset language" onclick="changeLanguage('china')">
            <img class="languages__item" src="img/languages/english.png" alt="Reset language" onclick="changeLanguage('english')">
            <img class="languages__item" src="img/languages/reset.png" alt="Reset language" onclick="resetLanguage('english')">
        </div>
    </div>
```

`CSS`
```CSS
.languages {
    position: absolute;
    z-index: 4;
    top: 125px;
    left: 50%;
    transform: translateX(-50%);
    background-color: #202020;
    border-radius: 15px;
    width: 220px;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.languages__item {
    cursor: pointer;
}
```

`JavaScript`

> В 3-й строке укажите путь к вашему `json`
```javascript
function changeLanguage(id) {
    fetch('data/translation.json')
        .then(response => response.json())
        .then(data => {
            for (let key in data) {
                let element = document.querySelector(`#${key}`);
                if (element) {
                    element.textContent = data[key][id];
                }
            }

            document.body.className = id;
        })
        .catch(error => console.error('Error:', error));
}

function resetLanguage() {
    location.reload();
}
```

`JSON`
> вам нужно будет добавить идентификатор к HTML-элементу и использовать его в `json`

```json
{
    "title": {
        "ru": "Привет",
        "china": "嗨",
        "english": "Hello"
    },
    "text": {
        "ru": "Пример текста",
        "china": "示例文本",
        "english": "Example text"
    }
}
```

<hr>

## License (Лицензия)

MIT © Radmir Uzyanbaev
