import Planet from './components/planet'
import PlanetList from './shared/planetList.js'

const clickOnPlanet = name => {
  alert(`Um clique no planeta ${name}`)
}
function App() {
  return (
    <div>
      <PlanetList/>
      <hr />
      <Planet
        name="Terra"
        description="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida"
        planetImg="https://p2.trrsf.com/image/fget/cf/940/0/images.terra.com/2014/11/21/nasaplanetaterra01.jpg"
        links="https://pt.wikipedia.org/wiki/Terra"
        theClick={clickOnPlanet}
        grey={true}
      />
      <Planet
        name="Netuno"
        description="Netuno (pt-BR) ou Neptuno (pt) (AO 1990: Netuno ou Neptuno) é o oitavo planeta do Sistema Solar, o último a partir do Sol desde a reclassificação de Plutão para a categoria de planeta anão, em 2006. Pertencente ao grupo dos gigantes gasosos, possui um tamanho ligeiramente menor que o de Urano, mas maior massa, equivalente a 17 massas terrestres. Netuno orbita o Sol a uma distância média de 30,1 unidades astronômicas."
        planetImg="https://upload.wikimedia.org/wikipedia/commons/thumb/6/63/Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg/280px-Neptune_-_Voyager_2_%2829347980845%29_flatten_crop.jpg"
        links="https://pt.wikipedia.org/wiki/Netuno_(planeta)"
        theClick={clickOnPlanet}
        grey={false}
      />
    </div>
  )
}

export default App
