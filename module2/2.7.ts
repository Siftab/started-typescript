{
    const user = {
        name: " zahid ",
        age: 55,
        number: " 01586396309"
    }

    // type Owner = {
    //     bike: string;
    //     car: string;
    //     bus: string;
    // }
    // type OwnerManual = "bike" | "car" | "bus" /typed mannually 
    // type Owner2 = keyof Owner;
    // const person: Owner2 = "bike"
    const getValue = <X, Y extends keyof X>(obj: X, key: Y) => {
        return console.log(obj[key])
    }

    getValue(user, "number")

}