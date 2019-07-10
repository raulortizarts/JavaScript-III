/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Global/Window Binding: Basically the main root global scope object 
* 2. Implicit: The object before the dot when a function is called
* 3. New Binding: The object instance created by a constructor
* 4. Explicit Binding: Using the call or apply methods
*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding

console.log(this);
// this will console log the global object

// Principle 2

// code example for Implicit Binding
  
const human = {
    name: "Finn",
    age: 20,
    species: "human",
    weapon: "sword",
    slay: function() {
      return `${this.name} the ${this.species} slays with his ${this.weapon}.`;
    }
  }
  console.log(human.slay());

// Principle 3

//code example for New Binding

unction Humanoid (HumanProperties) {
    this.team = HumanProperties.team;
    this.weapons = HumanProperties.weapons;
    this.language = HumanProperties.language;
    CharacterStats.call(this, HumanProperties);
  
  
  Humanoid.prototype.greet = function() {
      return`${this.name} offers a greeting in ${this.language}.`;
    }
  };

const swordsman = new Humanoid({
    createdAt: new Date(),
    dimensions: {
      length: 2,
      width: 2,
      height: 2,
    },
    healthPoints: 15,
    name: 'Sir Mustachio',
    team: 'The Round Table',
    weapons: [
      'Giant Sword',
      'Shield',
    ],
    language: 'Common Tongue',
  });

console.log(swordsman.weapons);

 //In this example taken from prototypes.js, a new object was created as a swordsman. 
 //The "this" in the constructor refers to the newly created swordsman humanoid. 

// Principle 4

// code example for Explicit Binding
function GameObject(properties) {
    this.createdAt = properties.createdAt;
    this.name = properties.name;
    this.dimensions = properties.dimensions;
  
      GameObject.prototype.destroy = function() {
      return`${this.name} was removed from the game.`;
    }
  };
  
  function CharacterStats(statProperties) {
    this.healthPoints = statProperties.healthPoints;
    GameObject.call(this, statProperties);
  
      CharacterStats.prototype.takeDamage = function() {
      return`${this.name} took damage.`;
    }
  };

  console.log(CharacterStats.dimensions);

  //In this example taken from prototypes.js, line 71 attaches the properties from
  //GameObject
  
