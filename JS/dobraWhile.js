let spaceship = prompt('Hi pilot, whats is the name of your spaceship?')
let wormholes = 0
let goOn = confirm(
  `You had entered ${wormholes} wormhole(s). Do you what to enter the next one ?`
)
while (goOn) {
  wormholes += 1
  goOn = confirm(
    `You had entered ${wormholes} wormhole(s). Do you what to enter the next one ?`
  )
}
alert(`Braking ${spaceship}, you had entered ${wormholes} wormhole(s)`)
