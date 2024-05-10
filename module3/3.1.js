{
    // oop=class
    var Animal = /** @class */ (function () {
        // name: string;
        // species: string;
        // sound: string;
        function Animal(name, species, sound) {
            this.name = name;
            this.species = species;
            this.sound = sound;
            // this.name = name
            // this.species = species
            // this.sound = sound
        }
        Animal.prototype.makeSound = function () {
            console.log("".concat(this.species, " sounds like ").concat(this.sound));
        };
        return Animal;
    }());
    var dog = new Animal("max", "dog", "bhaw bhaw bhaw ");
    var cat = new Animal("persioan", "cat,", "mew mew");
    console.log(dog);
    dog.makeSound();
}
