spaceship = {
  speed: 0, // km/s
  setup: function () {
    this.name = prompt('Enter spaceship name:')
    this.type = prompt('Enter spaceship type:')
    this.maxSpeed = Number(prompt('Max speed of spaceship:'))
  },
  onboardComputer: function () {
    this.setup()
    alert('Startign engines of ' + this.name)
    let keepGoing = true
    do {
      this.speedControl()
      alert(`Actualization: spaceship ${this.name}\nSpeed: ${this.speed} Km/s`)
      keepGoing = confirm('Keep moving?')
    } while (keepGoing)
    alert(
      `${this.name}, a ${this.type} spaceship\nPrevious speed: ${this.speed} Km/s\nActual speed: 0 Km/s`
    )
  },
  speedControl: function () {
    let acceleration = Number(
      prompt('Actual speed: ' + this.speed + ' km/s\n\nHow much to accelerate?')
    )
    let newSpeed = this.speed + acceleration
    if (newSpeed >= this.maxSpeed) {
      this.speed = this.maxSpeed
      alert('Maximum speed reached\nUnable to speed up more')
    } else if (newSpeed <= 0) {
      this.speed = 0
      alert('Minimum speed reachedd\nUnable to speed down more')
    } else {
      this.speed = newSpeed
    }
  }
}

spaceship.onboardComputer()
