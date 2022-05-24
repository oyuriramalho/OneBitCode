const pilotName = prompt('Hallo pilot! What is your name ?')
let speed = 0
newSpeed = Number(
  prompt(`We are parked ${pilotName}, how fast we need to go ?`)
)
let check = confirm(`Accelerating until ${newSpeed} Km/s. Confirm ?`)
if (check) {
  speed = newSpeed
} else {
  console.log('OK, keeping parked. Press F5 to start engines')
}
if (speed <= 40) {
  //console.warn('You are too slow, consider accelerate.')
  alert('You are too slow, consider accelerate.')
} else if (speed > 40 && speed <= 80) {
  //console.log('Good speed, keep going.')
  alert('Good speed, keep going.')
} else if (speed > 80 && speed <= 100) {
  //console.warn('You are too fast, consider slow down.')
  alert('You are too fast, consider slow down.')
} else if (speed > 100) {
  //console.warn('Dangerous speed, forced speed control activated!')
  alert('Dangerous speed, forced speed control activated!')
}
//console.log(`${pilotName}, you are at ${speed} Km/s`)
alert(`${pilotName}, you are at ${speed} Km/s`)
