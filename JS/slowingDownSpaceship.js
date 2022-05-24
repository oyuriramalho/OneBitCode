let inicialSpeed = 160 // km/s
let acceleration = -20 // km/s²
let speed = inicialSpeed
let velocimeter = v => alert('Velocidade atual: ' + v + ' km/s')
function slowing(sped, aceleration) {
  return (sped -= aceleration)
}
function slowingDown(v, a, velocimeter, slowing) {
  do {
    velocimeter(speed)
    speed = slowing(speed, acceleration)
  } while (speed >= 0)
  alert('Nave parada, preparar para desembarque')
}
