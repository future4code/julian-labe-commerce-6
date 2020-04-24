import React from 'react';
import './App.css';
import Filtros from './components/Filtros.js'
import styled from 'styled-components';
import ProdutosNaTela from './components/Produtos'
// import Carrinho from './components/Carrinho.js';
import imgCabecalho from './img/imgCebalho.jpg'
import imgRodape from './img/rodape.jpg'

const TodoOAplicativo = styled.div`
  display: flex;
  flex-direction: column;
  width:100vw;
  color: #001020;
  background-color:#ddeeff;
`
const Cabecalho = styled.header`
  width: 100vw;
  height: 15vw;
`
const Rodape = styled.header `
  width: 100vw;
  height: 12vw;
`

const ImagemPontas = styled.img`
  width: 100%;
  height: 100%;
`
const CorpoDoSite = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0.5vw;
  width: 100vw;
  justify-content: space-between;
` 
const BotaoCarrinho = styled.img `
  border-radius: 50%;
  cursor: pointer;
  border: 1px solid black;
  box-shadow: -2px 2px 5px 0px rgba(50, 50, 50, 0.75);
  position: fixed;
  bottom: 2vw;
  right: 2vw;
  width: 4vw;
`
const Produtos = styled.div `
`
const CardProduto = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 0.5vw;
    margin-bottom: 1vw;
    border: 1px solid #001020;
    box-shadow:-1px 2px 5px 0px rgba(50, 50, 50, 0.75);
    padding: 0.4vw;
`

const TituloCatalogo = styled.div `
    display: flex;
    align-items: center;
    margin-bottom: 1vw;
    flex-flow: row wrap;
    justify-content:space-around;
    height: 5vw;
`

const Catalogo = styled.section `
    display: flex;
    flex-flow: row wrap;
`

const CardProdutos = styled.article `
    display: flex;
    flex-flow: row wrap;
    justify-content:space-around;
`

const Ordenar = styled.select`
    border-radius: 10%;
    width: 10vw;
    height: 2vw;
    -webkit-appearance: none;  /* Remove estilo padrão do Chrome */
   -moz-appearance: none; /* Remove estilo padrão do FireFox */
   appearance: none; /* Remove estilo padrão do FireFox*/
   background-color: #001020;
   color: #ddeeff;
   padding: 0.5vw;
   font-size:1vw;
   cursor: pointer;
`

const TituloCarrinho = styled.p` 
    font-weight: bold;
    font-size: 2vw;
    align-self: center;
    margin-bottom: 2vw;
`

const CorpoFiltros = styled.div`
display: flex;
flex-flow: column wrap;
border: 1px solid black;
width: 25vw;
height: 95vh;
padding-left: 10px;
padding-right: 10px;
background-color: #001020;
color: #ddeeff;
padding: 1vw;
`

const Titulo = styled.p ` 
    font-weight: bold;
    font-size: 2vw;
    margin: 0 12vw;
`

const ContainerCarrinho = styled.div`
    display:flex;
    flex-direction: column;
    background-color: #001020;
    color: #ddeeff;
    border: 1px solid black;
    padding: 1vw;
    width: 35vw;
    height:95vh;
    display: ${props =>{
       if (props.ismostra) {
           return "flex"
       } else {
           return "none"
       }
    }};    `

const BotaoAdicionarCarrinho = styled.button`
    width:12vw;
    border-radius: 20%;
    background-color: #001020;
    color: #ddeeff;
    cursor: pointer;
    font-size:1.2vw;
`

const BotaoFiltros = styled.button`
     width:12vw;
    border-radius: 20%;
    background-color: #001020;
    color: #ddeeff;
    cursor: pointer;
    font-size:1.2vw;
  `

class App extends React.Component {
  
  state = {
    produtos: [
      { nome: 'Camiseta Astrobiologia', preço: '70.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_astrobiologia_953_1_20190801150030.jpg', id: 1, },
      { nome: 'Camiseta Laika', preço: '80.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_laika_1485_1_20191128183401.jpg', id: 2, },
      { nome: 'Camiseta Gatonauta', preço: '50.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_gatonauta_masculino_355_1_20190702165338.jpg', id: 3, },
      { nome: 'Camiseta Buraco Negro', preço: '75.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_buraco_negro_masculino_1023_1_20190627001622.jpg', id: 4, },
      { nome: 'Camiseta Algum Lugar', preço: '45.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_algum_lugar_masculino_329_3_20190714011026.jpg', id: 5, },
      { nome: 'Camiseta Bolhas De Sabão', preço: '65.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_bolhas_de_sabao_masculino_333_1_20190709220835.jpg', id: 6, },      
      { nome: 'Camiseta Timeline Big Bang', preço: '85.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_timeline_big_bang_1202_1_20190804143245.jpg', id: 7, },
      { nome: 'Camiseta Saturn V', preço: '74.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_saturn_v_masculino_933_3_20190714005435.jpg', id: 8, },
      { nome: 'Camiseta Dognauta', preço: '48.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_dognauta_1487_1_20191128183415.jpg', id: 9, },
      { nome: 'Camiseta Nebulosa de Órion', preço: '55.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_nebulosa_de_orion_masculino_363_3_20190714005431.jpg', id: 10, },
    ],
    inputValorMinimo: '0',
    inputValorMaximo: '0',
    inputBuscarProduto: 'Nenhum',
    ordem: 'nenhuma',
    mostracarrinho: false,
    carrinho: [],
  };

  componentDidUpdate(){
    console.log(this.state.ordem)
  }
  
  onChangeInputMaximo = (event) => {
    this.setState({inputValorMaximo: event.target.value})
  } 
  
  componentDidMount () {
    localStorage.setItem('camisa', JSON.stringify(this.state.produtos))
  }


  onChangeBuscar = (event) => {
    this.setState({inputBuscarProduto: event.target.value})
  
  }

  onChangeInputMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
  }

  mostrarCarrinho = () => {
  this.setState({mostracarrinho : !this.state.mostracarrinho})
  }


  FiltrarNumero = () => {
  const produtosFiltrados = this.state.produtos.filter((produto) => {
      if (produto.preço >= this.state.inputValorMaximo) {
        return produto
      }
    })
    this.setState({produtos: produtosFiltrados})
    this.setState({inputValorMaximo: '0'})
    this.setState({inputValorMinino: '0'})
  }

  filtrarNome = () => {
    const produtosFiltradosNome = this.state.produtos.filter((produto) => {
      return produto.nome.toLowerCase().indexOf(this.state.inputBuscarProduto.toLowerCase()) > -1;
    })
    this.setState({produtos: produtosFiltradosNome})
    this.setState({inputBuscarProduto: 'Nenhum'})
  }

  limparFiltro = () => {
    const filtroString = localStorage.getItem("camisa")
    const filtroLimpo = JSON.parse('filtroString')
    console.log(filtroLimpo)
  }

  render(){
    console.log(this.state.produtos)
    let produtosOrdenados
    
    const crescente = this.state.produtos.map((produto) => {
      return (produto)
    }).sort(function (a, b) {
      return a.preço - b.preço
    })

    const decrescente = this.state.produtos.map((produto) => {
      return (produto)
    }).sort(function (a, b) {
      return b.preço - a.preço
    })

    if (this.state.ordem === 'crescente') {
      produtosOrdenados = crescente
    } else if (this.state.ordem === 'decrescente') {
      produtosOrdenados = decrescente
    } else{
      produtosOrdenados = this.state.produtos
    }
      
    const produtosSite = produtosOrdenados.map((produto) => {
            return <CardProduto >
                <ProdutosNaTela key
                    foto={produto.url}
                    titulo={produto.nome}
                    valor={produto.preço}
                    id={produto.id}
                />
                <BotaoAdicionarCarrinho 
                  OnClick={e => this.setState({ordem: e.target.value})}
                >
                  Adicionar ao carrinho
                </BotaoAdicionarCarrinho>
                </CardProduto>
        }); 
    
      return (
        <TodoOAplicativo>
          <Cabecalho>
            <ImagemPontas src={imgCabecalho} alt={"Cabeçalho"}/>
          </Cabecalho>
          
          <CorpoDoSite>
            <CorpoFiltros>          
              <h1>Filtros</h1><br /><br />
                  
            <h3>Valor Máximo3</h3>
              <input type="number" 
                  onChange={this.onChangeInputMaximo} /><br/>
      
              <h3>Valor Mínimo</h3>
              <input type="number" 
                  onChange={this.onChangeInputMinimo}/><br />
              <button onClick={this.FiltrarNumero}>Buscar Valor</button>
              
              <h3>Buscar Produto</h3>
              <input type="text" onChange={this.onChangeBuscar}/>
              <BotaoFiltros onClick={this.filtrarNome}>Buscar Nome</BotaoFiltros>

              <BotaoFiltros onClick={this.limparFiltro}>Limpar Filtros</BotaoFiltros>

              <h3> Filtros Aplicados: </h3> 

              <p> Nome Produto : ${this.state.inputBuscarProduto}</p><br/>
              <p> Valor Mínimo : ${this.state.inputValorMinim}</p><br/>
              <p> Valor Máximo : ${this.state.inputValorMaximo}</p><br/>


            </CorpoFiltros>
            <Produtos>
                <Catalogo>
                    <TituloCatalogo>
                        <Titulo>Quantidade de Produtos: {this.state.produtos.length}</Titulo> 
                        <Ordenar onChange = {e => this.setState({ordem: e.target.value})}>
                            <option value="nenhuma">Ordenar</option>
                            <option value="crescente">Preço: Crescente</option>
                            <option value="decrescente">Preço: Decrescente</option>
                        </Ordenar>
                    </TituloCatalogo>
                    <CardProdutos> 
                        {produtosSite}
                    </CardProdutos>
                </Catalogo>
            </Produtos>
            < ContainerCarrinho ismostra = {this.state.mostracarrinho} >
                    <TituloCarrinho>Carrinho:</TituloCarrinho>
                    <p>Total:<strong>R$ 0.00</strong></p>
            </ContainerCarrinho> 

            < BotaoCarrinho 
            onClick = {this.mostrarCarrinho} 
            src = 'https://img.freepik.com/icones-gratis/carrinho-de-compras-1_318-10653.jpg?size=338&ext=jpg'
          / >

          </CorpoDoSite>
          <Rodape>
            <ImagemPontas src={imgRodape} alt={"Rodape"}/>
          </Rodape>
        </TodoOAplicativo>
      )    
  }
}

export default App;
