{
    // oop=class

    class Animal {
        // name: string;
        // species: string;
        // sound: string;
        constructor(public name: string, public species: string, public sound: string) {
            // this.name = name
            // this.species = species
            // this.sound = sound
        }
        makeSound() {
            console.log(`${this.species} sounds like ${this.sound}`)
        }
    }

    const dog = new Animal("max", "dog", "bhaw bhaw bhaw ")
    const cat = new Animal("persioan", "cat,", "mew mew")
    console.log(dog)
    dog.makeSound();

}