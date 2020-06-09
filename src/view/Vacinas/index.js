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


export default function Vaccines({ navigation }) {

    const { petId } = navigation.state.params;
    const [ vaccines, setVaccine ] = useState([])

    useEffect(() => {
        async function getVaccines () {
            const userId = await AsyncStorage.getItem('@ipet:userId')
            
            const response = await api.get(`/vaccinate/${petId}`)

            setVaccine(response.data)
        }

        getVaccines()

    }, [])

    async function deleteVaccine (id) {
        const response = await api.delete(`/vaccinate/delete/${id}`)

        navigation.goBack()
    }

    return (
        <Container style={{ margin: 0 }}>
            <ScrollView style={ styles.container }>
                <Row>
                    {
                        vaccines.map(vaccine => (
                            <Box key={vaccine._id}>
                                <View style={{ width: "90%" }}>
                                    <Text style={ styles.vaccineName }>{ vaccine.name } </Text>
                                    <Text style={ styles.vaccineDates }>
                                        { moment(vaccine.vaccinationDate).add(10, 'days').calendar() } - 
                                        { moment(vaccine.returningDate).add(10, 'days').calendar() }
                                    </Text>
                                </View>
                                
                                <Fontisto name="trash" size={20} color="grey" 
                                    onPress={() => deleteVaccine(vaccine._id)}
                                />
                            </Box>  
                        ))
                    }
                    
                </Row>
                
            </ScrollView>
            <AddButton onPress={() => navigation.push('CadVacina')}>
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
        width: 70;
        position: fixed;                                       
        bottom: 70;                                            
        right: 20;
        height: 70;
        background-color: #FFFFFF;
        border-radius: 100;
        box-shadow: 2px 2px 2px rgba(0,0,0,0.24);
        elevation: 3;
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