class Animal {
    constructor(public name: string, public species: string,) { }
    makeSound() {
        console.log('i am making sound ')
    }
}

class Dog extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeBark() {
        console.log(`${this.name} is barking bhaw bhaw`)
    }
}
class Cat extends Animal {
    constructor(name: string, species: string) {
        super(name, species)
    }
    makeMeaw() {
        console.log(`${this.name} is  mewaing`)
    }
}
const tiger = new Animal("tiger", "tiger")
const dog = new Dog("pool", "dog")
const cat = new Cat("mini", "cat")

// const dog = new Animal("maxi", "dog")
// const cat = new Animal("mini", "cat")
// cat.makeMeaw()
const getSound = (animal: Animal) => {
    if (animal instanceof Dog) {
        animal.makeBark()
    }
    else if (animal instanceof Cat) {
        animal.makeMeaw()
    }
    else {
        animal.makeSound()
    }

}
getSound(tiger)