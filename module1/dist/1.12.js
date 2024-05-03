"use strict";
// const searchName = (value: string) => {
//   if (value) {
//     console.log("searching ");
//   } else {
//     console.log("nothing to search");
//   }
// };
// searchName("good");
const getSpeedMeterPerSecond = (value) => {
    if (typeof value === "number") {
        const convertedSpeed = (value * 1000) / 3600;
        console.log(convertedSpeed);
    }
    if (typeof value === "string") {
        const targetValue = value.split(" ")[0];
        const convertedSpeed = (parseFloat(targetValue) * 1000) / 3600;
        console.log(convertedSpeed);
    }
    else {
        console.log("nothing to claculate");
    }
};
getSpeedMeterPerSecond("10000 is");
