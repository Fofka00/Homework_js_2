function printInfo() {
    console.log(`Name: ${this.name}, Age: ${this.age}`); 
  } 

  const person = {
    name: "Baradach",
    age: 40
  };

  printInfo.call(person);
