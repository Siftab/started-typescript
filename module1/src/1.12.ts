// const searchName = (value: string) => {
//   if (value) {
//     console.log("searching ");
//   } else {
//     console.log("nothing to search");
//   }
// };
// searchName("good");
const getSpeedMeterPerSecond = (value: unknown) => {
  if (typeof value === "number") {
    const convertedSpeed: number = (value * 1000) / 3600;
    console.log(convertedSpeed);
  }
  if (typeof value === "string") {
    const targetValue: string = value.split(" ")[0];
    const convertedSpeed: number = (parseFloat(targetValue) * 1000) / 3600;
    console.log(convertedSpeed);
  } else {
    console.log("nothing to claculate");
  }
};
getSpeedMeterPerSecond("10000 is");
