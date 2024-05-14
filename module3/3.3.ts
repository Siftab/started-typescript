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
    type normalUser = {
        name: string
    }
    type adminUser =
        {
            name: string,
            role: string
        }


    const user1: normalUser = {
        name: "sifat"
    }
    const user2: adminUser = {
        name: "sifat", role: "Admin"
    }
    const showUSer = (user: normalUser | adminUser) => {

        if ("role" in user) {
            console.log(`name ${user.name} is a ${user.role}`)
        } else {
            console.log(`${user.name} is a Regular User`)
        }

    }
    showUSer(user2)

}