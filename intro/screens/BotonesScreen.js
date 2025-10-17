import { Text, StyleSheet, View, Button, TouchableOpacity, TouchableHighlight, TouchableWithoutFeedback, Pressable } from 'react-native'
import SwitchButton from './Switch'

export default function BotonesScreen() {
  const info = [
    {
      id: 1,
      title: 'Mantener la pantalla encendida',
      value: false
    },
    {
      id: 2,
      title: 'Ajustar brillo automático',
      value: true
    },
    {
      id: 3,
      title: 'WiFi',
      value: false
    },
    {
      id: 4,
      title: 'Bluetooth',
      value: false
    }
  ]

  const Item = ({ title, value }) => {
    return (
      <View style={styles.item}>
        <View style={styles.itemBox}>
          <Text style={styles.itemtitle}>{title}</Text>
        </View>
        <View style={styles.switch}>
          <SwitchButton temporal={value} isButton={true} />
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.Encabezado}>
        <Text style={styles.EncabezadoTitle}> Configuración </Text>
      </View>

      <View style={styles.footer}>
        {
          info.map(x =>
            <Item key={x.id} title={x.title} value={x.value} />
          )
        }
        <Text> Configuración </Text>
      </View>

  <View style={{width: '100%'}}>
        <Text style={styles.header}>Tipos de Botones en React Native</Text>

        <Text style={styles.title}>1. Button (nativo)</Text>
        <Button title="Presionar" onPress={() => alert('Botón básico')} />

        <Text style={styles.title}>2. TouchableOpacity</Text>
        <TouchableOpacity style={styles.btnOpacity} onPress={() => alert('Opacity')}>
          <Text style={styles.text}>Botón Opacity</Text>
        </TouchableOpacity>

        <Text style={styles.title}>3. TouchableHighlight</Text>
        <TouchableHighlight
          style={styles.btnHighlight}
          underlayColor="#002a3dff"
          onPress={() => alert('Highlight')}
        >
          <Text style={styles.text}>Botón Highlight</Text>
        </TouchableHighlight>

        <Text style={styles.title}>4. TouchableWithoutFeedback</Text>
        <TouchableWithoutFeedback onPress={() => alert('Sin feedback')}>
          <View style={styles.btnNoFeedback}>
            <Text style={styles.text}>Sin feedback</Text>
          </View>
        </TouchableWithoutFeedback>

        <Text style={styles.title}>5. Pressable</Text>
        <Pressable
          onPress={() => alert('Pressable!')}
          style={({ pressed }) => [
            styles.btnPressable,
            {
              backgroundColor: pressed ? '#ff7043' : '#66bb6a',
              transform: pressed ? [{ scale: 0.95 }] : [{ scale: 1 }],
              opacity: pressed ? 0.7 : 1,
              shadowColor: '#000',
              shadowOffset: { width: 0, height: pressed ? 1 : 4 },
              shadowOpacity: pressed ? 0.3 : 0.6,
              shadowRadius: pressed ? 2 : 4,
            },
          ]}
        >
          <Text style={styles.text}>Botón Pressable</Text>
        </Pressable>
  </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,                 // ocupa toda la pantalla
    justifyContent: 'center',
    alignContent: 'center'
  },
  Encabezado: {
    height: 75,              // altura del encabezado
    alignSelf: 'stretch',    // ocupa todo el ancho
    flexDirection: 'row',    // los elementos dentro se organizan horizontalmente
    justifyContent: 'flex-start', // alineamos al inicio
    alignContent: 'center',
    paddingHorizontal: 18    // espacio lateral
  },
  EncabezadoTitle: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#383838',
    marginLeft: 10
  },
  footer: {
    flex: 1,                 // ocupa el resto del espacio
    justifyContent: 'flex-start',
    alignItems: 'center',
    alignSelf: 'stretch',
    marginHorizontal: 20
  },
  item: {
    height: 55,              // altura de cada item
    alignSelf: 'stretch',
    flexDirection: 'row',    // organizamos título y switch horizontalmente
    justifyContent: 'center',
    alignItems: 'center'
  },
  itemBox: {
    height: 100,             // altura interna
    flex: 1,                 // ocupa todo el espacio horizontal disponible
    justifyContent: 'center',
    alignItems: 'flex-start' // texto alineado a la izquierda
  },
  itemtitle: {
    fontSize: 15,
    fontWeight: '300',
    color: '#383838'
  },
  switch: {
    width: 70,               // ancho del contenedor del switch
    height: '100%',          // ocupa toda la altura del item
    justifyContent: 'center',
    alignItems: 'center'
  }
  ,
  header: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
    textAlign: 'center',
  },
  title: {
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 5,
    color: '#333',
  },
  text: {
    color: 'white',
    fontWeight: '600',
  },
  btnOpacity: {
    backgroundColor: '#2a9fffff',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  btnHighlight: {
    backgroundColor: '#29b6f6',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  btnNoFeedback: {
    backgroundColor: '#ab47bc',
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  btnPressable: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  btnNative: {
    padding: 10,
    borderRadius: 8,
    marginBottom: 15,
  },
})