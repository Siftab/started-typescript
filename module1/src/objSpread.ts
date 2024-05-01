const mentor1: {
  linux: string;
  windows: string;
  ios: string;
} = {
  linux: "sifat",
  windows: "sakib",
  ios: "abir",
};
const mentor2: {
  prisma: string;
  coded: string;
  arbo: string;
} = {
  prisma: "x",
  coded: "y",
  arbo: "z",
};

const allMentors = {
  ...mentor1,
  ...mentor2,
};
console.log(allMentors);
