import React, { useState } from 'react';
import { View, Text, TextInput, Alert, Button, StyleSheet, Switch } from 'react-native';

export default function FormularioScreen() {
  const [nombre, setNombre] = useState('');
  const [correo, setCorreo] = useState('');
  const [mensaje, setMensaje] = useState('');


  const enviarDatos = () => {
    if (nombre.trim() === '' || correo.trim() === "" ) {
      Alert.alert('Error', 'Completa todos los campos');
      alert('Error: Completa todos los campos');
      setMensaje('Campo en blanco, por favor completa todos los campos');

    } else {
      Alert.alert('¡Hola!, tus datos fueron enviados correctamente p');
      alert('¡Hola!, Tus datos fueron enviados correctamente.');

      setMensaje('¡Hola!, Tus datos fueron enviados correctamente :3.');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Práctica de repaso 1</Text>
      <TextInput
        style={styles.input}
        placeholder= "Escribe tu nombre"
        value={nombre}
        onChangeText={setNombre}
      />
      <TextInput
        style={styles.input}
        placeholder="Escribe tu correo"
        value={correo}
        onChangeText={setCorreo}
      />

      <Text style={styles.text}> Acepto los terminos y condiciones <Switch/></Text> 

      <Button title="Enviar" onPress={enviarDatos} />
      <Text style={styles.mensaje}>{mensaje}</Text>


      
    </View>    

  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center',
    padding:20,
    gap:10
  },
  input:{
    width:'80%',
    borderWidth:3,
    borderColor:'#5200f7ff',
    padding:12,
    borderRadius:9,
    color: '#fff'
  },
  mensaje:{
    marginTop:20,
    fontSize:18,
    color:'#00ff3cff',
    textAlign:'center'
  },
  title:{
    color:"#ff5ccbff",
    fontSize : 40,
  },
  text :{
    color : '#ffff'
  }
});