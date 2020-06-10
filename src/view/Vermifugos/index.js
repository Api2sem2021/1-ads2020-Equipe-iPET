import React, { useEffect, useState } from 'react'
import {
    View,
    Text,
    ScrollView,
    TouchableHighlight,
    StyleSheet,
    AsyncStorage 
} from 'react-native'
import { AntDesign } from '@expo/vector-icons';
import { Fontisto } from '@expo/vector-icons';
import api from '../../services/api';
import styled from 'styled-components/native'
import { Container } from 'native-base'
import moment from 'moment'

export default function Vermifuge({ navigation }){
  const {petId} = navigation.state.params;
  const [vermifuge, setVermifuge] = useState([])

  useEffect(() => {
    async function getVermifuge () {
      const userId = await AsyncStorage.getItem('@ipet:userId')
      
      const response = await api.get(`/vermifuge/${petId}`)

      setVermifuge(response.data)
    }

    getVermifuge()

  }, [])

  async function deleteVermifuge (id) {
    const response = await api.delete(`/vermifuge/delete/${id}`)

    navigation.goBack()
  }

  return (
    <Container style={{ margin: 0 }}>
      <ScrollView style={ styles.container }>
        <Row>
          {
            vermifuge.map(vermifuge => (
              <Box key={vermifuge._id}>
                <View style={{ width: "90%" }}>
                  <Text style={ styles.vermifugeName }>{ vermifuge.name } </Text>
                  <Text style={ styles.vermifugeDates }>
                    { moment(vaccine.vermifugeDate).add(10, 'days').calendar() } - 
                    { moment(vaccine.returningDate).add(10, 'days').calendar() }
                  </Text>
                </View>
                <Fontisto name="trash" size={20} color="grey" 
                  onPress={() => deleteVermifuge(vermifuge._id)}
                />
              </Box>  
            ))
          }        
        </Row>   
      </ScrollView>  
        <AddButton style={{ position: "absolute" }} onPress={() => navigation.push('CadVermifugo')}>
            <AntDesign name="plus" size={24} color="black" />
        </AddButton>
    </Container>    

  )
}

const Box = styled.View`
    background-color: #FFFFFF;
    width: 95%;
    height: 70px;
    border-radius: 7px;
    margin: 2%;
    box-shadow: 5px 5px 5px rgba(0,0,0,0.24);
    justify-content: center;
    display: flex;
    padding: 5%;
    flex-direction: row;
`;

const Row = styled.View`
    display: flex;
    flex-direction: column;
`;

const AddButton = styled.TouchableHighlight`
        align-items: center;
        justify-content: center;
        align-self: flex-end;
        width: 70px;                                      
        bottom: 70px;                                            
        right: 20px;
        height: 70px;
        background-color: #FFFFFF;
        border-radius: 100px;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.24);
`;


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#8D99AE",
        padding: '3%'
    },
    vaccineName: { 
        textAlign: 'left'
    },
    vaccineDates: {
        textAlign: 'left',
        color: '#A1A1A1',
        fontSize: 13
    }
});