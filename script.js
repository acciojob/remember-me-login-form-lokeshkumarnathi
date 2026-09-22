class Animal {
  constructor(species) {
    this._species = species;
  }

  get species() {
    return this._species;
  }

  makeSound() {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  purr() {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark() {
    console.log("woof");
  }
}

// Example
const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr();

const myDog = new Dog("Golden Retriever");
myDog.makeSound();
myDog.bark();