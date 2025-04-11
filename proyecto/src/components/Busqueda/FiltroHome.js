import React, { Component } from 'react';

class FiltroHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      valorInput: '',
    };
  }

  manejarSubmit(evento) {
    evento.preventDefault();
    if (this.state.valorInput !== '') {
      window.location.href = `/busqueda?query=${(this.state.valorInput)}`;
    }
  }

  controlarInput(evento) {
    this.setState({
      valorInput: evento.target.value,
    });
  }

  render() {
    return (
      <form onSubmit={(evento) => this.manejarSubmit(evento)}>
        <input
          placeholder="Buscar películas..."
          onChange={(evento) => this.controlarInput(evento)}
          value={this.state.valorInput}
        />
      </form>
    );
  }
}

export default FiltroHome;