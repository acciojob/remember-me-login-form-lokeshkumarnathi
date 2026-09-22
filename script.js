//your JS code here. If required.
class Animal {
  private _species: string;

  constructor(species: string) {
    this._species = species;
  }

  get species(): string {
    return this._species;
  }

  makeSound(): void {
    console.log(`The ${this.species} makes a sound`);
  }
}

class Cat extends Animal {
  purr(): void {
    console.log("purr");
  }
}

class Dog extends Animal {
  bark(): void {
    console.log("woof");
  }
}

// Example usage
const myCat = new Cat("Siamese");
myCat.makeSound();
myCat.purr();

const myDog = new Dog("Golden Retriever");
myDog.makeSound();
myDog.bark();