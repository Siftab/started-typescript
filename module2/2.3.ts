// const rollNumbers: number[] = [1, 2, 3, 423, 12]
type GenericType<T> = Array<T>


const rollNumbers: GenericType<number> = [1, 2, 3, 423, 12,]



const mentors: GenericType<string> = ["rohim", "korim", "jodu", "modu"]
// const mentors: string[] = ["rohim", "korim", "jodu", "modu"]
const bolArray: GenericType<boolean> = [true, false, false]

const users: GenericType<{ name: string, age: number }> = [
    {
        name: "lal",
        age: 98
    },
    {
        kaj: 'nai'
    }
]