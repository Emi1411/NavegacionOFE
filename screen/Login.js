import React,{Component} from 'react';
import {StyleSheet, ActivityIndicator,Modal,View} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item,Input,Icon } from 'native-base';

class Login extends Component {

  constructor(props){
    super(props);
    this.state={
      nombre:'',
      password:'',
      isloading: true,
    }
  }
  ShowHideActivityIndicator = () =>{
    const navegar=this.props.navigation;
    if(this.state.isLoading == true)
    {
      this.setState({isLoading: false})
    }
    else
    {
      this.setState({isLoading: true})
      setTimeout(() => {
        navegar.navigate('Usuario'/*,{nombres:this.state.nombre,pass:this.state.password}*/);
        this.setState({isLoading: false})
      },2000);
    }
  }
  

render(){
  const navegar=this.props.navigation;
  return (
    <Container>
        <Header />
        <View style={misEstilos.MainContainer}>
        {
        this.state.isLoading ?  
        <Modal
        transparent = {true} 
        animationType = {'none'} 
        visible = {this.state.isloading}> 
          <View style = {misEstilos.modalBackground}> 
            <View style = {misEstilos.activityIndicatorWrapper}> 
              <ActivityIndicator style={{padding: 70}} /> 
            </View> 
          </View> 
        </Modal> : null
        }
        </View>
        <Content padder contentContainerStyle ={misEstilos.content}>
          <Card>
            <CardItem header bordered>
              <Text style={misEstilos.textCenter}>Inicio de sesión</Text>
            </CardItem>
            <CardItem bordered>
              <Body>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name='user'></Icon>
                  <Input placeholder='Nombre de usuario' value={this.state.nombre} onChangeText={(nombre)=> this.setState({nombre})} />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' value={this.state.password} onChangeText={(password)=> this.setState({password})} secureTextEntry={true} />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
            <Button primary style={misEstilos.boton} onPress={this.ShowHideActivityIndicator}><Text> Entrar </Text></Button>
            </CardItem>
          </Card>
          <Text style={misEstilos.textCenter}>No tienes cuenta:</Text>
          <Button onPress={() => {navegar.navigate('Registro',{titulo:'Registro de usuarios'});}}><Text  style={misEstilos.textCenter}>Registrate</Text></Button>
        </Content>
      </Container>
  );
}
};

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
    marginLeft: '70%',
  },
  boton2:{
    alignItems: 'center',
    justifyContent: 'center',
  },
  MainContainer :{
    justifyContent: 'center',
  },
  modalBackground : {
    flex : 1 ,
    alignItems : 'center' ,
    flexDirection : 'column' ,
    justifyContent : 'space-around' ,
    backgroundColor : '#00000040'
  } ,
  activityIndicatorWrapper : {
    backgroundColor : '#FFFFFF' ,
    height : 100 ,
    width : 100 ,
    borderRadius : 10 ,
    display : 'flex' ,
    alignItems : 'center' ,
    justifyContent : 'space-around'
  }
});

//AppRegistry.registerComponent('Login', () => Login);
export default Login;