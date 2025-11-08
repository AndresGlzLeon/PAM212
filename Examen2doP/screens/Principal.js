import React from "react";
import { ImageBackground, ScrollView, View, Text, StyleSheet } from 'react-native';

const secciones = [
    Deportes = {
        id : 1,
        titulo: "Deportes",
        fecha: "07-11-24",
        resumen : "",
    },
    Nacional = {
        id : 2,
        titulo: "Nacional",
        fecha: "10-10-25",
        resumen : "",
    },
    Entretenimiento = {
        id : 3,
        titulo: "Entretenimiento",
        fecha: "11-09-25",
        resumen : "",
    },
    Tecnologia = {
        id : 4,
        titulo: "Tecnologia",
        fecha: "05-11-25",
        resumen : "",
    },

]

export default function Principal(){

return(

    <ScrollView>
      <SimpleHeader title = "Portal de Noticias" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.verticalScroll}
      >
        {secciones.map((val) => (
          <View style={styles.cardVertical} key={val.id}>
            <Text style={styles.subtitle}></Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
)}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },
  header: {
    height: 100,
    backgroundColor: '#000000ff',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 20,
    marginBottom: 10,
  },
  title: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 20,
  },
  verticalScroll: {
    marginBottom: 20,
  },
  scrollContent: {
    paddingHorizontal: 10,
  },
  cardVertical: {
    height: 100,
    backgroundColor: '#E6E6FA',
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 10,
  },
  cardHorizontal: {
    width: 200,
    height: 250,
    backgroundColor: '#E6E6FA',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  subtitle: {
    color: '#181D31',
    fontWeight: 'bold',
  },
});