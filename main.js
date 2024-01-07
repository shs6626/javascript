import getType from "./getType";

console.log("arsenal");
console.log("__________call getType function___________");

console.log(getType("arsenal"));
console.log(getType(1));

function timeout(callback) {
  setTimeout(() => {
    console.log("_____________________________________");
    console.log("arsenal");
    callback();
  }, 2000);
}

timeout(() => {
  console.log("Champion");
});

//Class

class User {
  constructor(first, last) {
    this.firstName = first;
    this.lastName = last;
  }
  getFullname() {
    return `${this.firstName} ${this.lastName}`;
  }
}

const arsenal = new User("Rice", "Declan");

console.log(arsenal);

//extends

class Player {
  constructor(name, backnumber) {
    this.name = name;
    this.backnumber = backnumber;
  }
}

const myPlayer = new Player("saka", 7);
console.log(myPlayer);

class arsPlayer extends Player {
  constructor(name, backnumber) {
    super(name, backnumber);
  }
}

class Rice extends Player {
  constructor(name, backnumber, captain) {
    super(name, backnumber);
    this.captain = captain;
  }
}

const rice = new Rice("rice", 41, false);
console.log(rice);
