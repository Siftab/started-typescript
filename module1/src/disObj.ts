{
  const user = {
    name: "sifat",
    details: {
      firstName: "md",
      midName: "zahid",
      lastName: "hossain",
    },
    age: 23,
    phone: "01781354638",
  };

  const {
    details: { midName: maherNam },
  } = user;
  console.log(maherNam, "majher nam");
}
