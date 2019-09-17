# Ejercicio de tutoría 

## Fase 1
Vamos a ver los pasos de la Fase uno:

  - Limpiamos el archivo index.html. 
  - Ponemos el array en estado, o en una constante o en un archivo aparte. 
  - Lo pintamos con un map. 
  - Primero hacemos una lista
  ~~~~ 
  <ul> 
    {this.state.data.map((item, index) => { return (
      <li className = "app__item" key = {index}> 
        <div className = 'card'> 
          {item.name}
        </div>
      </li>
    )})}
  </ul> 
  ~~~~
Usamos para empezar el index de la array. 
Dentro del li crearemos un div con todos los elementos que necesitamos dentro. 
La lista de password tambien haremos un map para incluirlo.

## Fase 2

Ahora vamos a dividirlo en unos componentes en concreto:
  - App.js --> Tendrá <Page data = {this.state.data}/>
      - Si necesitamos pasar solo info en concreto podemos hacer destructuring. const{data} = this.state.data.
  - Page.js --> Contendrá  import react, la clase, el render con (todo el código) y el export.
      - Como recibe props tendremo que poner las PropTypes. (Data es un array de objetos y es Required).
      - Hacemos destructuring. const {data} = this.props.data
  - Header.js --> Creamos una cabecera con un <h1> lo exportamos.
  - Importamos Header.js en Page.js
  - Creamos un <main> en Page.js y dentro pasamos los datos.
  - DataList.js -->  importamos React, {Components} from 'react'; class DataList extends Components...
  - Recibe por props data por props, así que necesita proptypes.
  - Creamos DataCard. y metemos aqui el Div que contiene todos los datos de la carta. Lo exportamos.
  - Importamos en DataList.js DataCard.js.
  - DataCard recibe props
  - Creamos el Footer.js, lo exportamos y lo importamos.
  - Este footer necesita un reloj, y es mejor que tenga su estado propio. Ya que este estado solo depende de este componente.
    - En el estado creamos una cadena con '00:00:00', 
    - Creamos funcion que coja del sistema la Hora, el minuto y el segundo. const now = new Date();  --> const sec = now.getSeconds();  --> time : `&{hour}:&{min}:&{sec}`;
    - Creamos la cadena y la metemos en el estado.
    - Para llamar a la funcion usaremos el método componentDidMount(){ función()}.
    - Para que se actualice usaremos un setInterval para que en cada segundo cambie la hora minuto y seg y lo actualice.
    - Al cambiar el estado se renderiza de nuevo. 

## Fase 3

Vamos a crear un filtro para ver si mi mail está entre los encontrados.
  - En el estado de app creamos un elemento para guardar lo introducido en el input. 
  - Este valor lo pasamos por props hasta CardList.
  - Este dato lo vamos a usar en el filter antes del map para pintar. 
  - Para que nos compruebe tanto mayusculas como minúsculas, lo pasamos todo a mayusculas.
  - Ahora que tenemos que pasar varios datos del estado si usaremos destructuring.
  - Creamos la función que maneja el input, hacemos que modifique el estado por eso la bindeamos. 
  - Creamos el componente Filter.js 
  - Importamos y exportamos el filter, le hacemos llegar las props y establecemos las propTypes. 

Podemos pasarle los datos ya filtrados. Los filtramos en App y los pasamos ya filtrados.

## Fase 4

Vamos a crear otro componente que me diga cuantos registros hay de coincidencia. 
Como nos pide que el estatus este después del filter, es mejor hacer el filtrado en App. Así que vamos a filtar el Page.js y de ahi mandar el array ya filtrado a DataList y a Status. 
  - Cuidado si el filtrado lo hacemos en Page para pasarlo no usamos this.props.filteredData sino filteredData

## Fase 5 

Ahora vamos a hacer un fetch con la Api que nos ha montado el backend

El fetch lo tenemos que llamar en el componentDidMount()