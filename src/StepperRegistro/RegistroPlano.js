import React, { Component } from 'react';
import Text from '../comunes/Text';
import DatePicker from 'material-ui/DatePicker';
import Paper from 'material-ui/Paper';
import RaisedButton from 'material-ui/RaisedButton';

class RegistroPlano extends Component {
  render() {
    return (
      <div style= {{ flexDirection: 'row', display: 'flex', justifyContent: 'center' }}>
        <div style= {{ flexDirection: 'column'}}>
      
            <Paper style={estilo.estilo} zDepth={2}>
              <div style= {{ height:10 }}>
                <h1></h1>
              </div>
              <div
            style = {{
            marginLeft:50, marginTop: 30 }}  >
                <div>

                <Text
                etiqueta = "Nombre"/><br/>

                <Text
                etiqueta = "Apellido paterno"
                /><br/>

                <Text
                etiqueta = "Apellido materno"
                /><br/>
                </div>
                </div>
              </Paper>
            </div>
        </div>
    );
  }
}
const estilo = {
  estilo: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'column',
      height: 300,
      width: 500,
      margin: 1
    }
};

export default RegistroPlano;
