"use strict";
const friends = ["korim", "rohim", "joshim", "oshim", "soshim", "boshim"];
const [, , , x, ...rest] = friends;
console.log(x, ...rest);
