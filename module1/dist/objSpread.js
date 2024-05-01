"use strict";
const mentor1 = {
    linux: "sifat",
    windows: "sakib",
    ios: "abir",
};
const mentor2 = {
    prisma: "x",
    coded: "y",
    arbo: "z",
};
const allMentors = Object.assign(Object.assign({}, mentor1), mentor2);
console.log(allMentors);
