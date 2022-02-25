class Team {
  constructor() {
    this.members = new Set();
  }

  add(character) {
    if (this.members.has(character)) {
      throw new error("Такой персонаж уже добавлен")
    } else {
      this.members.add(character);
    }
  };

  // addAll(...characterInput) {
  //   characterInput.forEach((character) => this.members.add(character));
  // };

  // toArray() {
  //   return Array.from(this.members);
  // }

  iteratorMembers() {

    return this.members[Symbol.iterator]();

  }


}

class Character {
  constructor(name, type, attack, defence) {
    this.name = name;
    this.type = type;
    this.health = 100;
    this.level = 1;
    this.attack = attack;
    this.defence = defence;
  };

};

class Bowerman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Bowerman";
    this.attack = 25;
    this.defence = 25;
  };
};

class Swordsman extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Swordsman";
    this.attack = 40;
    this.defence = 10;
  };
};

class Magician extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Magician";
    this.attack = 10;
    this.defence = 10;
  };
};

class Daemon extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Daemon";
    this.attack = 10;
    this.defence = 40;
  };
};

class Undead extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Undead";
    this.attack = 25;
    this.defence = 25;
  };
};

class Zombie extends Character {
  constructor(name, health, level) {
    super(name, health, level);
    this.type = "Zombie";
    this.attack = 40;
    this.defence = 10;
  };
};


let bowerman = new Bowerman("Иван");
let zombie = new Zombie("qwerty");
let team = new Team();
team.add(bowerman);
team.add(zombie);
team.iteratorMembers()
