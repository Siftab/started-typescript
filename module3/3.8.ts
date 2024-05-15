{

    class Person {
        getSleep() {
            console.log("im sleeping for 8 hours ")

        }

    }
    class Student extends Person {
        getSleep() {
            console.log("im sleeping for 6 hour")
        }
    }
    class Developer extends Person {
        getSleep() {
            console.log("im sleeping for 4 hour")
        }
    }
    const getSleepingHours = (params: Person) => {
        params.getSleep()
    }

    const person1 = new Person()
    const person2 = new Student()
    const person3 = new Developer()
    getSleepingHours(person3)


    // console.log(pers 
}