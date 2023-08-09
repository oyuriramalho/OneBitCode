import { Garou } from './Garou.js'
// Para ser usado no HTML (precisa do ".js" na importação)
// <script src='index.js' type='module'></script>
let igor = new Garou('Igor', 'Yuri', 'Human', 'Uktena', 'Ahron')
console.log(igor)
igor.transform(2)
console.log(igor)
igor.transform(0)
console.log(igor)
