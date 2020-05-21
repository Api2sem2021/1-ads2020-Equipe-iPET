import React from 'react';
import { 
  StyleSheet,
  Text,
  View,
  Image,
  TouchableHighlight
} from 'react-native';

import Routes from './src/Routes'



export default function App() {
  return (
    <Routes />
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8D99AE',
    alignItems: 'center',
    justifyContent: 'center',
  },

  logo: {
    width: 150,
    height: 150,
    marginTop: 50
  },

  slogan: {
    textAlign: "center",
    color: "#FFFFFF",
    fontSize: 16,
    marginTop: 50,
    marginBottom: 170
  },

  btnGeneral: {
    width: "90%",
    height: 47,
    borderWidth: 1,
    borderColor: "#2B2D42",
    borderRadius: 7,
    justifyContent: "center",
    alignItems: "center"
  },

  btnEntrar: {
    color: "#2B2D42"
  },

  btnRegistrar: {
    backgroundColor: "#EF233C",
    marginTop: 10
  }

});
