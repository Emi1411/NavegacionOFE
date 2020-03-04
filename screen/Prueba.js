import React, { Component } from 'react';
import {View,Text, ActivityIndicator} from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import {Card} from 'native-base';

class Usuario extends Component{
  constructor(props){
    super(props);
    this.state={
      isLoading:true,
    }
  }//end constructor
  async componentDidMount(){
    try{
      const response = await fetch('https://swapi.co/api/films/?format=json');
      const responseJson = await response.json();
      this.setState({
        isLoading: false,
        dataSource: responseJson.results,
      },function(){
      });
    }catch(error){
      console.log(error);
    }
  }//end componentDidMount

  render(){
    if(this.state.isLoading==true){
      return(
        <View style={{flex:1, padding: 20}}>
          <ActivityIndicator />
        </View>
      );
    }// end if
    return(
      <View>
        <FlatList 
          data={this.state.dataSource}
          renderItem={({item}) =>
            <Card>
              <Text>Titulo: {item.title}</Text>
              <Text>Episodio: {item.episode_id}</Text>
              <Text>Director: {item.director}</Text>
            </Card> 
          }
          keyExtractor = {({episode_id},index)=>episode_id} />
      </View>
    );
  }//end render
}//end class

export default Usuario;