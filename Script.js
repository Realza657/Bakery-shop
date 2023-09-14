'use strict';

const firstLi = document.querySelector('li');
const map = document.querySelector('iframe');

firstLi.addEventListener("click", (el) => {
    map.scrollIntoView({behavior: "smooth", block: "center"});
});