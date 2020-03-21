import React, { Component } from 'react';
import {Container,
        Content,
        Card,
        CardItem,
        Text,
        Body,
        Button,
        Item,
        Icon,
        Input} from 'native-base';

import {StyleSheet} from 'react-native';
import api from '../data/api';

class Registro extends Component{
  constructor(props){
    super(props);
    this.state={
      nombre:'',
      nomusu:'',
      correo:'',
      pass:''
    }
  }

  register = () => api.registerData(this.state.nombre,this.state.nomusu,this.state.correo,this.state.pass);
render(){

  const navegar=this.props.navigation;

  return (
    <Container>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text>{this.props.route.params.titulo}</Text>
            </CardItem>
            <CardItem>
            <Icon type = 'Ionicons' name = 'logo-facebook'></Icon>
              <Button primary style={misEstilos.boton2}><Text>Facebook</Text></Button>
              <Icon type = 'AntDesign' name = 'googleplus'></Icon>
              <Button danger style={misEstilos.boton2}><Text>Google</Text></Button>
            </CardItem>
            
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                    <Input placeholder='Nombre' 
                    onChangeText={(nombre) => this.setState({nombre})}/>
                </Item>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name = 'user'></Icon>
                  <Input placeholder='Nombre de usuario'
                  onChangeText={(nomusu) => this.setState({nomusu})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'MaterialCommunityIcons' name = 'email-open'></Icon>
                  <Input type='email' placeholder='Correo' 
                  onChangeText={(correo) => this.setState({correo})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' 
                  onChangeText={(pass) => this.setState({pass})} secureTextEntry={true} />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={misEstilos.boton3} onPress={() => {navegar.navigate('Login');}}><Text>Login</Text></Button>
              <Button primary style={misEstilos.boton} onPress={this.register}><Text> Registrar </Text></Button>
            </CardItem>
          </Card>
        </Content>
      </Container>
  );
}
}

const misEstilos = StyleSheet.create({
  content: {
    flex: 1,
    justifyContent: 'center',
  },
  textCenter:{
    textAlign: 'center',
    width: '100%',
  },
  boton:{
    marginLeft: '27%',
  },
  boton2 : {
    margin: '0%',
  },
  boton3:{
    marginLeft: '5%',
  },
});

export default Registro;