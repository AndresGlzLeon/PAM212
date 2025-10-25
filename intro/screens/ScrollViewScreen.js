import React from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native-web';

const DATA = [
  { id: 1 },
  { id: 2 },
  { id: 3 },
  { id: 4 },
  { id: 5 },
  { id: 6 },
  { id: 7 },
  { id: 8 },
  { id: 9 },
  { id: 10 },
];

const SimpleHeader = ({ title }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

const ScrollViewCombinado = () => {
  return (
    <ScrollView style={styles.container}>
      
      <SimpleHeader title="ScrollView Vertical" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        style={styles.verticalScroll}
      >
        {DATA.map((val) => (
          <View style={styles.cardVertical} key={val.id}>
            <Text style={styles.subtitle}>¡Soy una tarjeta vertical xd!</Text>
          </View>
        ))}
      </ScrollView>
 
      <SimpleHeader title="ScrollView Horizontal" />
      <ScrollView
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContent}
      >
        {DATA.map((val) => (
          <View style={styles.cardHorizontal} key={val.id}>
            <Text style={styles.subtitle}>¡Soy una tarjeta horizontal xd!</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
};

export default ScrollViewCombinado;

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