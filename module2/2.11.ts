type person = {
    name: string;
    age: number;
    email?: string;
    contact: string
}

type Name = Pick<person, "name">