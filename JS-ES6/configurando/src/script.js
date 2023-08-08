// const today = moment().format('DD/MM/YYYY')
// alert(`Hoje é dia ${today}`)

function media(...nums) {
  let ans = 0
  nums.map(n => (ans += n))
  return ans / nums.length
}

function mediana(...nums) {
  let Len = nums.length
  console.log(`Input: ${nums}`)
  nums = nums.sort()
  console.log(`Input sorted: ${nums}`)
  if (Len % 2 == 1) {
    return nums[Len / 2 - 0.5]
  } else {
    let meio = Len / 2
    return media(...nums.slice(meio - 1, meio + 1))
  }
}
function mediaPond(...nums) {
  if (nums.length % 2 == 1) {
    console.log('Lista incompleta')
  } else {
    let somaTermos = 0
    let somaPesos = 0
    let i
    for (i = 0; i < nums.length / 2; i++) {
      console.log(
        `Termo anterior: ${somaTermos}\n ${nums[2 * i]} * ${
          nums[2 * i + 1]
        } = ${nums[2 * i] * nums[2 * i + 1]} \n `
      )
      somaTermos += nums[2 * i] * nums[2 * i + 1]
      somaPesos += nums[2 * i + 1]
      console.log(
        `Nova somaTermos: ${somaTermos}\nNova somaPesos: ${somaPesos}\n ============== \n\n`
      )
    }
    console.log(`Média ponderada da lista: ${somaTermos / somaPesos}`)
    return somaTermos / somaPesos
  }
}
