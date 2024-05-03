
type User1 = {
    name: string;
    age: number
}
type User2 = User1 & { isMarried: boolean }

const user1: User2 = {
    name: "sifat",
    age: 99,
    isMarried: true


}