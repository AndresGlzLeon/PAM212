import { View, Text, Button } from "react-native";

export default function Detalles({ navigation }) {
  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center" }}>
      <Text>Pantalla Detalle</Text>
      <Button 
        title="Regresar a Perfil"
        color={"#001effff"}
        onPress={() => navigation.goBack()}
      />
    </View>
  );
}

