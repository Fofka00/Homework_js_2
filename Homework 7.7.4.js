function setFullName(fullName) {
    this.fullName = fullName;
  }
  
  const person = {
    name: "Baradach",
    age: 30
  };
  
  const setPersonFullName = setFullName.bind(person);
  
  setPersonFullName("Baradach Irishka");
  
  console.log(person);