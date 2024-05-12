{

    // oop=inharitance 
    class student {

        constructor(public name: string, age: number, public adress: string) {

        }
        getSleep() {
            console.log(`${this.name} is sleeping `)
        }
    }

    const student1 = new student("sifat", 77, "keranigonj")
    student1.getSleep();
}