import React from 'react'
import styled from 'styled-components'
import Produtos from './Produtos'

const Container = styled.div`
    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    padding:0.5vw;
`
const Cabecalho = styled.header`
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-bottom: 1vw;
`
const Catalogo = styled.section`
    display: flex;
    flex-flow: row wrap;
`

const Ordenar = styled.select`
    border-radius: 10%;
    width: 10vw;
    height: 2vw;
`
const Titulo = styled.p` 
    font-weight: bold;
`

class Display extends React.Component {
    state ={}  
        render(){
        
        const produtosSite = this.props.listaDeProdutos.map((produto) => {
            return(
                <Produtos
                    foto={produto.url}
                    titulo={produto.nome}
                    valor={produto.preço}
                />
            );
        
        
        }
        )

        return(
            <Container>
                <Cabecalho>
                    <Titulo>Quantidade de Produtos: {produtosSite.length}</Titulo> 
                    <Ordenar>
                        <option value="crescente">Preço: Crescente</option>
                        <option value="descrescente">Preço: Decrescente</option>
                    </Ordenar>
                </Cabecalho>
                <Catalogo> 
                    {produtosSite}
                </Catalogo>

            </Container>
        )
    }     
}

export default Display