{
    type addType = (x: number | string, y: number | string) => number | string
    const add: addType = (x, y) => {

        if (typeof x === "number" && typeof y === "number") {
            return x + y;
        }
        else {
            return x.toString() + y.toString()
        }

    }
    console.log(add(3, "sifat"

    ))
}