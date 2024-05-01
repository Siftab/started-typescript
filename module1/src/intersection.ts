type Frontend = {
  user: string;
  designation1: "frotend";
  name: string;
};
type Backend = {
  user: string;
  designation2: "backend";
  post: string;
};
type newType = Frontend & Backend;

let client: newType = {
  user: "sifat",
  designation1: "frotend",
  designation2: "backend",
  name: "bekar",
  post: "kam nai",
};
