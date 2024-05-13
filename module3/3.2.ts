{

    // oop=inharitance 
    class student {

        constructor(public name: string, public age: number, public adress: string) {

        }
        getSleep() {
            console.log(`${this.name} is sleeping and age is ${this.age}`)
        }
    }
    class teacher extends student {
        constructor(name: string, age: number, address: string, public designation: string) {
            super(name, age, address)


        }
        teaching() {
            console.log(`${this.name} is a ${this.designation} and age${this.age}`)
        }
    }

    const teacher2 = new teacher("korim", 55, "dhaka", "president")
    const student1 = new student("sifat", 77, "keranigonj")
    student1.getSleep();
    teacher2.getSleep();
    teacher2.teaching()
}