# DOM Assignments

## 1. Webiste Name: [Dev To](https://dev.to/)

```JS
let card = document.querySelector("aside > .crayons-card");

card.querySelector("h2").innerHTML = "Aditya Kadali";

card.querySelector("p").innerHTML = "I love building websites";
```

## 2. Website Name: [Apple](https://support.apple.com/en-in)

```JS
let products = document.querySelectorAll(".as-imagegrid-item-title");
let items = [];

products.forEach( e => {
    items.push(e.innerText.slice(0,-8));
})

console.log(items)
```

## 3. Webiste Name: [Youtube Support](https://support.google.com/youtube/)

```JS
let accordion = document.querySelector(".accordion-homepage");
let myContent = document.createElement("section");
myContent.classList.add("parent");
myContent.innerHTML = `<h3>My new FAQ</h3>`;
accordion.appendChild(myContent);
```

## 4. Webiste Name: [OnePlus](https://www.oneplus.in/support)

```JS
let ph = document.querySelector(".service-number");
ph.innerText = "+91-9912345678";
```

## 5. Webiste Name: [Samsung](https://www.samsung.com/in/offer/online/samsung-fest/)

### Tasks

- Target the main div of card and change the Button text to Check out

```JS
let card = document.querySelectorAll(".feature-column-carousel__feature")[0];

card.querySelector(".cta").innerText = "Check out";
```

## 6. Webiste Name: [Adidas](https://www.adidas.co.in/)

### Tasks

- Target the search box and on hover change thebackground color to red.

```JS
let search = document.querySelector('[aria-label="Search"]');

search.addEventListener('mouseover', () => {
    search.style.backgroundColor = "Red";
})

search.addEventListener('mouseout', () => {
    search.style.backgroundColor = "white";
})
```

## 7. Webiste Name: [MDN Web Docs](https://developer.mozilla.org/en-US/)

```JS
let form = document.getElementById("hp-search-form");

form.querySelector("input").value = "CSS Selector";

form.submit();
```
