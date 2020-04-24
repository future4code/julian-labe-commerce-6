import React from 'react'
import styled from 'styled-components'

const ContainerProduto = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
`
const FotoProduto = styled.img`
    height:15vw;
    width: 15vw;
    -webkit-transition: all 1s ease; /* Safari and Chrome */
    -moz-transition: all 1s ease; /* Firefox */
    -ms-transition: all 1s ease; /* IE 9 */
    -o-transition: all 1s ease; /* Opera */
    transition: all 1s ease;
    :hover {
        -webkit-transform:scale(3); /* Safari and Chrome */
        -moz-transform:scale(3); /* Firefox */
        -ms-transform:scale(3); /* IE 9 */
        -o-transform:scale(3); /* Opera */
        transform:scale(3);
    };
`
const PrecoProduto = styled.p `
    margin: 0.5vw;
`

const TituloProduto = styled.p`
    margin: 0.5vw 0 0 0.5vw;
`

// const listaCarrinho = this.props.arr

class Produtos extends React.Component {
    state = {
        carrinho: {
        },
    }
// componentDidUpdate(){
//     const novoProduto = this.state
//     localStorage.setItem("produto", JSON.stringify)
// }



adicionarAoCarrinho = () => {
    console.log(this.props.titulo)


   //JSON.stringify() objetos e arrays em string
   // localStorage.setItem("produtos", "preco")
    // localStorage.getItem("produtos")
   //JSON.parse() transforma string em objetos e arrays
}



    render() {
        return (
            <ContainerProduto>
                <FotoProduto src={this.props.foto}/>
                <TituloProduto>{this.props.titulo}</TituloProduto>
                <PrecoProduto> R$ {this.props.valor} </PrecoProduto>
            </ContainerProduto>
        )
    }
}

export default Produtos;