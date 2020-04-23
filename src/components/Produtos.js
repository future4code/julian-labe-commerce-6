import React from 'react'
import styled from 'styled-components'

const ContainerProduto = styled.div `
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    margin: 0.5vw;
    margin-bottom: 1vw;
    border: 1px dotted #36252f;
    padding: 0.4vw;
`
const BotaoAdicionaCarrinho = styled.button`
    background-color: black;
    color: white; 
    border-radius: 20%;
    height: 2vw;
`
const FotoProduto = styled.img`
    height:15vw;
    width: 15vw;
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

adicionarAoCarrinho = () => {
        const novoProduto = {
    nome: '',
    preço: '',
    id: Date.now(),
    }
    
    const listaDoCarrinho = [...novoProduto,
    this.props.arr]

    this.setState({carrinho: listaDoCarrinho})
    console.log(listaDoCarrinho)
}


    
    render() {
        return (
            <ContainerProduto>
                <FotoProduto src={this.props.foto}/>
                <TituloProduto>{this.props.titulo}</TituloProduto>
                <PrecoProduto> R$ {this.props.valor} </PrecoProduto>
                <BotaoAdicionaCarrinho OnClick={this.adicionaCarrinho}>Adicionar ao carrinho</BotaoAdicionaCarrinho>
            </ContainerProduto>
        )
    }
}

export default Produtos