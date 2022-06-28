import Planet from "./components/planet"
function App() {
  return (
    <div>
      <h1>Planet List</h1>
      <hr></hr>
      <Planet
      name="Terra"
      description="A Terra é o terceiro planeta mais próximo do Sol, o mais denso e o quinto maior dos oito planetas do Sistema Solar. É também o maior dos quatro planetas telúricos. É por vezes designada como Mundo ou Planeta Azul. Lar de milhões de espécies de seres vivos,[13] incluindo os humanos, a Terra é o único corpo celeste onde é conhecida a existência de vida"
      links="https://pt.wikipedia.org/wiki/Terra"
      ></Planet>
    </div>
  );
}

export default App;
