function Family() {
  this.surname = 'Reitz'
}

Family.prototype.crest = function() {
  console.log(`Family Crest: ${this.surname}`)
}

function GrandParent(name) {
  this.firstName = name
  this.title = 'Sr.'
}

GrandParent.prototype = Object.create(Family.prototype)
GrandParent.prototype.constructor = GrandParent

GrandParent.prototype.formalGreeting = function() {
  console.log(`I am ${this.firstName} ${this.surname}, ${this.title} \n`)
}

const HAGIE = new GrandParent('Matthew')

HAGIE.formalGreeting()
HAGIE.crest()
