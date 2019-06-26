import React, { Component } from "react";

class Formulario extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cantidad: "",
      plazo: ""
    };

    this.actualizarState = this.actualizarState.bind(this);
    this.calcularPrestamo = this.calcularPrestamo.bind(this);
  }

  actualizarState(e) {
    //console.log(e.target.value);
    const { name, value } = e.target;

    this.setState({
      //los datos vienen como numero pero en String y Number los pasa a NumeroEntero
      [name]: Number(value)
    });

    //Opcion 1 escribes mas codigo
    // if (name === "cantidad") {
    //   this.setState({
    //     cantidad: [e.target.value]
    //   });
    // } else {
    //   this.setState({
    //     plazo: [e.target.value]
    //   });
    // }
  }

  habilitarSubmit() {
    const { cantidad, plazo } = this.state;

    const noValido = !cantidad || !plazo;

    return noValido;
  }

  calcularPrestamo(e) {
    e.preventDefault();

    const { cantidad, plazo } = this.state;

    this.props.data(cantidad, plazo);
  }

  render() {
    const { cantidad, plazo } = this.state;

    return (
      <form onSubmit={this.calcularPrestamo}>
        <div>
          <label htmlFor="prestamo">Cantidad Prestamo: {cantidad}</label>
          <input
            onChange={this.actualizarState}
            type="number"
            name="cantidad"
            className="u-full-width"
            placeholder="Ejemplo: 3000"
          />
        </div>
        <div>
          <label>Plazo para pagar: {plazo}</label>
          <select
            onChange={this.actualizarState}
            name="plazo"
            className="u-full-width"
          >
            <option value="">--Seleccionar--</option>
            <option value="3">3 Meses</option>
            <option value="6">6 Meses</option>
            <option value="12">12 Meses</option>
            <option value="24">24 Meses</option>
          </select>
        </div>
        <div>
          <input
            disabled={this.habilitarSubmit()}
            type="submit"
            value="Calcular"
            className="u-full-width button-primary"
          />
        </div>
      </form>
    );
  }
}

export default Formulario;
