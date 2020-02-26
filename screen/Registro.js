import React, { Component } from 'react';
import { StyleSheet} from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Body,Button,Item, Icon,Input } from 'native-base';

class Registro extends Component{
render(){
  const navegar = this.props.navegation;
  return (
    <Container>
        <Header />
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
                    <Input placeholder='Nombre' />
                </Item>
                <Item inlineLabel>
                    <Icon type = 'FontAwesome' name = 'user'></Icon>
                    <Input placeholder='Apellido' />
                </Item>
                <Item inlineLabel>
                  <Icon type = 'FontAwesome' name = 'user'></Icon>
                  <Input placeholder='Nombre de usuario' />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'MaterialCommunityIcons' name = 'email-open'></Icon>
                  <Input type='email' placeholder='Correo' />
                </Item>
                <Item inlineLabel last>
                  <Icon type = 'FontAwesome' name = 'lock'></Icon>
                  <Input placeholder='Contraseña' />
                </Item>
              </Body>
            </CardItem>
            <CardItem footer bordered>
              <Button primary style={misEstilos.boton}><Text> Registrar </Text></Button>
            </CardItem>
            <CardItem style={misEstilos.boton2}>
              <Item inlineLabel last>
                
              </Item>
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
});

export default Registro;