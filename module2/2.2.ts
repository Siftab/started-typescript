{
    // /
    type User1 = {
        name: string;
        age: number
    }
    type User2 = User1 & { isMarried: boolean }
    interface Userin {
        name: string;
        age: number;
    }
    // interface newUser extends 
    interface UserX extends Userin {
        isMarried: boolean
    }
    const user: UserX = {
        name: "sifat",
        age: 99,
        isMarried: true

    }
    console.log(user)
}