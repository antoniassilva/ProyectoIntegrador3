import React, {Component} from 'react'

class FiltroPopulares extends Component{

    constructor(props){
        super(props)
        this.state = {
            valorInput : '',
        }
    }

    manejarSubmit(evento){
        evento.preventDefault();
    }

    controlarInput(evento){
        console.log(evento)
        this.setState(
            {valorInput: evento.target.value},
            () => this.props.filtro(this.state.valorInput)
        )
    }

    render(){
        return(
            <form onSubmit={(evento) => this.manejarSubmit(evento) } >
                <input placeholder="Buscar..." onChange={(evento)=> this.controlarInput(evento)} value={this.state.valorInput} />
            </form>
        )
    }
}

export default FiltroPopulares