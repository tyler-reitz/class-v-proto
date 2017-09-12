class Family {
  constructor(surname = 'Reitz') {
    this.surname = surname
  }

  announce() {
    console.log(`Family crest: ${this.surname}`)
  }
}

class GrandParent extends Family {
  constructor(name) {
    super()
    this.name = name
    this.title = 'Sr.'
  }

  formalGreeting() {
    console.log(`Behold, I am ${this.name} ${this.surname}, ${this.title} \n creator of`)
    this.announce()
  }
}

const HAGIE = new GrandParent('Matthieu')

HAGIE.formalGreeting()
