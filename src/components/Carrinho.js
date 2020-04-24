import React from 'react'
import styled from 'styled-components'

const ContainerCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    border: 1px solid black;
    width: 40vw;
    height:95vh;
    display: ${props =>{
       if (props.ismostra) {
           return "flex"
       } else {
           return "none"
       }
    }} ;

`
const Titulo = styled.h2`
    margin: 0 auto;
    text-align: center;
`


class Carrinho extends React.Component {  
state = {
carrinho: {
},
}

    render() {
        return(
            <ContainerCarrinho ismostra={this.props.mostrar}>
            <Titulo>Carrinho:</Titulo>
            <p>Total:<strong>R$ 0.00</strong></p>            
            </ContainerCarrinho>
        );
    }
}
export default Carrinho   