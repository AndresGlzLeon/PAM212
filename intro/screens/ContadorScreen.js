//1. Import: Zona de declaraciones
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import React, { useState } from 'react';

//2. Main: Zona de componentes
export default function ContadorScreen() {

  const [contador, setContador] = useState(0);

  return (
    <View style={styles.container}>
      
      <Text style={styles.texto}> Contador: </Text>
      <Text style={styles.texto2}> {contador} </Text>
      
      <View style={styles.contenedorBotones}>
        <View style={styles.botonWrapper}>
          <Button color="green" title="Incrementar" onPress={() => setContador(contador + 1)} />
        </View>

        <View style={styles.botonWrapper}>
          <Button color="red" title="Quitar" onPress={() => setContador(contador - 1)} />
        </View>

        <View style={styles.botonWrapper}>
          <Button color="orange" title="Reiniciar" onPress={() => setContador(contador + (contador * -1))} />
        </View>
      </View>
      
      <StatusBar style="auto" />
    
    </View>
  );
}

//3. Estilos: Zona de estetica y posicionamiento
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffffff',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto:{
    color:"#4964e7ff",
    fontSize:30,
    fontFamily:'Times New Roman',
    fontWeight:'bold',
    fontStyle:'italic',
    textDecorationLine:'line-through',
  },

  texto2:{
    color:"#13278fff",
    fontSize:40,
    fontFamily:'Courier',
    fontWeight:'400',
    textDecorationLine:'underline',
  },


  contenedorBotones:{
    marginTop:15,
    flexDirection:'row',
    alignItems: 'center',
    justifyContent: 'center',


  },
  botonWrapper: {
    marginHorizontal: 8,
  },
});