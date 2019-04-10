import React, { Component } from 'react';
import './App.css';
import Componente1 from './Componentes/ValidationComponent';
import Componente2 from './Componentes/CharComponent';

class App extends Component {
  state = {
    validationSTATE: [
      { id: 'aritz1', texto: '', longitud:'Texto demasiado corto', }
    ],
    caracterSTATE: [
    ],
  }

  textoChangedHandler = ( event ) => {

  //Cojo la frase
  const frase = event.target.value; 

  //COMPONENTE1
      //Copio validationSTATE en X
      const X = [...this.state.validationSTATE];
        //Nuevo valor para X[0].texto
        X[0].texto = frase;
        //Nuevo valor para X[0].longitud según su longitud
        if (frase.length>5) {
          X[0].longitud = 'Texto demasiado largo';
        }
        if (frase.length<=5) {
          X[0].longitud = 'Texto demasiado corto';
        }
      //Actualizo el estado validationSTATE
      this.setState( {validationSTATE: X} ); 

      
  //COMPONENTE2
      //Vacío caracterSTATE
      const nuevo = [...this.state.caracterSTATE];
      nuevo.length = 0;
      this.setState( {caracterSTATE: nuevo} );
      
      //Actualizo el caracterSTATE con la frase
      for (var i=0; i<frase.length; i++) {
        const referencia = {...this.state.caracterSTATE[i] };
        referencia.caracter = frase.slice(i,i+1);
        nuevo[i] = referencia;
      }
      
      this.setState( {caracterSTATE: nuevo} );
  }

  

  deleteCaracter = (index) => {
      const borro = [...this.state.caracterSTATE]; //Cojo todo del estado caracterSTATE
      borro.splice(index, 1);    //Extraigo el componente con el índice pulsado 
      this.setState({caracterSTATE: borro}); //Actualizo caracterSTATE
    
    const A = [...this.state.validationSTATE]; 
    const FraseVieja = A[0].texto; //Copio la Frase Vieja 
      const Parte1 = FraseVieja.substr(0,index); //Cojo de inicio al caracter que quiero eliminar
      const Parte2 = FraseVieja.substr(index+1,FraseVieja.length); //Cojo del caracter que quiero eliminar al final
    const FraseNueva = Parte1.concat(Parte2); //Uno las dos partes
    A[0].texto = FraseNueva; //FraseNueva

     //Vuelvo a comprobar su longitud
    if (A[0].texto.length>5)  { A[0].longitud = 'Texto demasiado largo'; }
    if (A[0].texto.length<=5) { A[0].longitud = 'Texto demasiado corto'; }
    
    this.setState( {validationSTATE: A} ); //Actualizo el validationSTATE
  }

  
  render () {

    //Componente1
    let validationSTATE = null;
      validationSTATE = (
        <div>
          {this.state.validationSTATE.map((validate) => {
            return <Componente1
              texto={validate.texto}
              longitud={validate.longitud}
              changed={(event) => this.textoChangedHandler(event)} />
          })}
        </div>
      );

    //Componente2
    let caracterSTATE = null;
      caracterSTATE = (
        <div>
          {this.state.caracterSTATE.map((char, index) => {
            return <Componente2
             click={() => this.deleteCaracter(index)} //Si hago click deleteCaracter (le paso index)
             caracter={char.caracter}/>
          })}
        </div>
      );

    return (
      <div className="App">
        <h1>ARITZ OSCOZ IRUROZQUI</h1>
        {validationSTATE}
        {caracterSTATE}
      </div>
    );

  }
}

export default App;

