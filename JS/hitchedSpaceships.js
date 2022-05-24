/* 
1 - Filtrar as naves com 9 ou mais tripulantes
2 - Informar o número da plataforma com o primeiro engate pendente 
3 - Exibir o nome de todas as naves em caixa alta
4 - Exibir tudo em um único alerta
 */

const hitchedSpaceships = [
  ['Fênix', 8, true],
  ['Golias', 10, true],
  ['Helmet', 5, false],
  ['Elemental', 3, true],
  ['Darwin', 15, false]
]

let cgt9 = hitchedSpaceships
  .filter(ship => {
    return ship[1] >= 9 // Array com as naves com tripulação maior q 9
  })
  .map(ship => {
    return ship[0] // array apenas com os nomes das naves
  }) // Crew greater than 9

let fph = hitchedSpaceships.findIndex(ship => {
  return !ship[2]
}) // First Pending Hitching

let upCasedSpaceshipsNames = hitchedSpaceships.map(function (currentSpaceship) {
  let upcased = currentSpaceship[0].toUpperCase()
  return upcased
})
let msgm =
  'Naves atracadas: \n' +
  upCasedSpaceshipsNames.join(', ') +
  '\n\nNaves com mais de 9 tripulantes:\n' +
  cgt9.join(', ') +
  '\n\nPrimeira plataforma com engate pendente:\n' +
  (fph+1)

alert(msgm)

/*
/*let spaceships = ["Colossus", "Helmet", "Fênix"];
console.log(spaceships);

spaceships.push("Elemental");
console.log(spaceships);

spaceships.pop();
console.log(spaceships);

spaceships.shift();
console.log(spaceships);

spaceships.unshift("Colossus");
console.log(spaceships);

//Caso a fução não encontre o elemento, ela retorna -1
console.log(spaceships.indexOf("Helmet"));

//splice = emendar (modifica o array original) => splice(index,número de elementos a remover, elementos a adicionar)

let removedSpaceships = spaceships.splice(
	1,
	1,
	"Elemental",
	"Ártemis",
	"Darwin"
);
console.info(spaceships);
console.warn(removedSpaceships);
console.log("\n ==========\n");
//slice = fatiar (retorna um novo array, mantendo o original inalterado)
// array.slice(indexInclusive, indexExclusive)

let extractedNames = spaceships.slice(1, 3);
console.info(spaceships);
console.warn(extractedNames);

spaceships.forEach(function (currentSpaceship, index) {
	console.log("Nave: " + currentSpaceship + "\nÍndice: " + index);
});
*/
