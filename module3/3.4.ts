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

const isDog = (animal: Animal): animal is Dog => {
    return animal instanceof Dog

}
const isCat = (animal: Animal): animal is Cat => {
    return animal instanceof Cat

}

// const dog = new Animal("maxi", "dog")
// const cat = new Animal("mini", "cat")
// cat.makeMeaw()
const getSound = (animal: Animal) => {
    if (isDog(animal)) {
        animal.makeBark()
    }
    else if (isCat(animal)) {
        animal.makeMeaw()
    }
    else {
        animal.makeSound()
    }

}
getSound(tiger)