import React, { Fragment } from "react";
import Formulario from "./componentes/Formulario";
import { calcularTotal } from "./helpers";
import Resultado from "./componentes/resultado";
import Mensaje from "./componentes/Mensaje";
import Spinner from "./componentes/Spinner";

class App extends React.Component {
  state = {
    total: "",
    cantidad: "",
    plazo: "",
    cargando: false
  };

  datosPrestamo = (cantidad, plazo) => {
    const total = calcularTotal(cantidad, plazo);

    //cuanto el value es igual a la key podemos omitir poner el value
    this.setState(
      {
        cargando: true
      },
      () => {
        setTimeout(() => {
          this.setState({
            total: total,
            cantidad,
            plazo,
            cargando: false
          });
        }, 3000);
      }
    );
  };

  render() {
    const { total, plazo, cantidad, cargando } = this.state;

    //cargar un componente condicionalmente
    let componente;
    if (total === "" && !cargando) {
      componente = <Mensaje />;
    } else if (cargando) {
      componente = <Spinner />;
    } else {
      componente = (
        <Resultado total={total} plazo={plazo} cantidad={cantidad} />
      );
    }

    return (
      <Fragment>
        <h1>Cotizador de Prestamos</h1>
        <div className="container">
          <Formulario data={this.datosPrestamo} />
          <div className="mensajes">{componente}</div>
        </div>
      </Fragment>
    );
  }
}

export default App;

// import React from 'react';
// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
