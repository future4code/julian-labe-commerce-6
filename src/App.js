import React from 'react';
import './App.css';
import Filtros from './components/Filtros.js'
import styled from 'styled-components';
// import Carrinho from './components/Carrinho.js';
import Display from './components/Display.js';
import imgCabecalho from './img/imgCebalho.jpg'

const TodoOAplicativo = styled.div`
  display: flex;
  flex-direction: column;
  width:99vw;
  color: #001b20;
  background-color:#e8fcff;
`
const Cabecalho = styled.header`
  width: 100vw;
  height: 15vw;
`
const ImagemPontas = styled.img`
  width: 100%;
  height: 100%;
`
const CorpoDoSite = styled.div`
  display: flex;
  flex-wrap: nowrap;
  padding: 0.5vw;
  width: 99vw;
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



class App extends React.Component {
  
  state = {
    produtos: [
      { nome: 'Camiseta Astrobiologia', preço: '70.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_astrobiologia_953_1_20190801150030.jpg' },

      { nome: 'Camiseta Laika', preço: '80.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_laika_1485_1_20191128183401.jpg' },

      { nome: 'Camiseta Gatonauta', preço: '50.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_gatonauta_masculino_355_1_20190702165338.jpg' },

      { nome: 'Camiseta Buraco Negro', preço: '75.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_buraco_negro_masculino_1023_1_20190627001622.jpg' },

      { nome: 'Camiseta Algum Lugar', preço: '45.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_algum_lugar_masculino_329_3_20190714011026.jpg' },

      { nome: 'Camiseta Bolhas De Sabão', preço: '65.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_bolhas_de_sabao_masculino_333_1_20190709220835.jpg' },
      
      { nome: 'Camiseta Timeline Big Bang', preço: '85.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_timeline_big_bang_1202_1_20190804143245.jpg' },

      { nome: 'Camiseta Saturn V', preço: '74.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_saturn_v_masculino_933_3_20190714005435.jpg' },

      { nome: 'Camiseta Dognauta', preço: '48.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_dognauta_1487_1_20191128183415.jpg' },

      { nome: 'Camiseta Nebulosa de Órion', preço: '55.00', url: 'https://images.tcdn.com.br/img/img_prod/680735/camiseta_nebulosa_de_orion_masculino_363_3_20190714005431.jpg' },
    ],
    inputValorMinimo: '',
    inputValorMaximo: '',
    inputBuscarProduto: '',

    mostracarrinho: false,
    carrinho: [

    ]
  };
  
  onChangeInputMaximo = () => {
    console.log('funciona')
  //   this.setState({inputValorMaximo: event.target.value})    
  //   let produtosComValorMaximo = this.state.produtos.filter((produto) => {
  //     if (this.state.inputValorMaximo <= produto.preço) {
  //     return produto
  //   }
  //   return false
  // } 
  // )
  // this.setState({produtos: produtosComValorMaximo})
  } 

  onChangeInputMinimo = (event) => {
    this.setState({inputValorMinimo: event.target.value})
    console.log(this.state.inputValorMinimo)
  }

  mostrarCarrinho = () => {
    this.setState({mostracarrinho : !this.state.mostracarrinho})
  }

  
  
  render(){

      return (
        <TodoOAplicativo>
          <Cabecalho>
            <ImagemPontas src={imgCabecalho} alt={"Cabeçalho"}/>
          </Cabecalho>
          <CorpoDoSite>
            <Filtros
              inputValorMaximo={this.state.inputValorMaximo}
              inputValorMinimo={this.state.inputValorMinimo}
              funcaoChangeVMaximo={this.onChangeInputMaximo}
              funcaoChangeVMinimo={this.onChangeInputMinimo} />          
            <Produtos>
              <Display 
                listaDeProdutos={this.state.produtos}
                valorMaximo={this.state.inputValorMaximo}
                mostrar={this.state.mostracarrinho}
              />
  
              {/* <Carrinho 
                mostrar={this.state.mostracarrinho}/> */}
  
              < BotaoCarrinho 
                onClick = {this.mostrarCarrinho} 
                src = 'https://img.freepik.com/icones-gratis/carrinho-de-compras-1_318-10653.jpg?size=338&ext=jpg'
              / >
            </Produtos>
          </CorpoDoSite>
        </TodoOAplicativo>
      )    
  }
}

export default App;
