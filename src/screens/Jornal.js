import React, { Component } from 'react'
import { Text, StyleSheet, View, Image, Platform } from 'react-native'

import { Container, DeckSwiper, Card, CardItem, Icon } from 'native-base'


const cards = [
  {
    text: 'Title Card One',
    datePub: '01/02/2019',
    image: require('../images/placeholder-image.jpg'),
  },
  {
    text: 'Title Card Two',
    datePub: '29/01/2019',
    image: require('../images/placeholder-image.jpg'),
  },
  {
    text: 'Title Card Three',
    datePub: '29/01/2019',
    image: require('../images/placeholder-image.jpg'),
  },
];

callCamera = () =>{
  Platform.OS
}

export default class Jornal extends Component {

  renderItems = (item) => (
    <Card style={{ elevation: 3 }}>
    <CardItem>
        <Text style={{fontSize: 18, fontWeight:'bold'}}>{item.text}</Text>
      </CardItem>
      <CardItem cardBody style={{flex: 1, justifyContent: 'center'}}>
        <Image style={{ height: 480 }} source={item.image} resizeMode='contain' />
      </CardItem>
      <CardItem>
        <Icon type='FontAwesome5' name="calendar" style={{ color: '#ccc' }} />
        <Text>{item.datePub}</Text>
      </CardItem>
    </Card>
  )

  render() {
    return (
      <Container style={{padding: 16}}>

        <DeckSwiper
          dataSource={cards}
          renderItem={this.renderItems}
        />
      </Container>
    )
  }
}

const styles = StyleSheet.create({})
