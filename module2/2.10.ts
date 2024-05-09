{
    const numbers: number[] = [1, 2, 3, 4, 5]

    const stringNumbers: string[] = numbers.map(number => number.toString())
    console.log(stringNumbers)

    type arryDev = {
        forntend: string;
        backend: string
    }
    type newarry = {
        [key in keyof arryDev]: boolean
    }
    type areaString = {
        height: string,
        width: number
    }
    type newAreaString<T> = {
        [key in keyof T]: T[key]
    }

    const valuetop: newAreaString<areaString> = {
        height: "90",
        width: 99
    }


}