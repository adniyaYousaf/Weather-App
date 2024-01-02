# Weather App



## Table of contents

- [Overview](#overview)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### Screenshot

![](/dist/images/Screenshot%20from%202024-01-02%2000-14-59.png)

### Links

- Live Site URL: [Live URL](https://steady-cajeta-952b21.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Sass

### What I learned

I learned how to fetch data from API in JavaScript.

```sass
@mixin display($display, $justify, $align)
    display: flex
    justify-content: $justify
    align-items: $align
```

```js
const fetchWeather = async (city) => {
    let date = new Date();
    const APIkey = '86f60f58f0e04aabf2a4d950d3b57933';
    const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const res = await fetch(url + city + `&appid=${APIkey}`)
    const data = await res.json();
};
```


### Useful resources

- [Sass Docs](https://sass-lang.com/documentation/) - This helped me to learn Sass. I really liked its documentation and will use it going forward.
- [MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/eval) - This is an amazing website which helped me finally understand eval(). I'd recommend it to anyone still learning this concept.

## Author

- Website - [Adniya Yousaf](https://adniyayousaf.netlify.app)

