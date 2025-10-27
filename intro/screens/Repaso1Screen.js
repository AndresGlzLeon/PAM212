import React, { useEffect, useRef, useState } from "react";
import {
  View,
  Text,
  Animated,
  StyleSheet,
  Dimensions,
  ImageBackground,
  TextInput,
  Alert,
  Switch,
  Button,
} from "react-native";
import * as SplashScreen from "expo-splash-screen";
import TextScreen from "./TextScreen";
import FormularioScreen from "./FormularioScreen";

SplashScreen.preventAutoHideAsync();
const { height } = Dimensions.get("window");

export default function Repaso1Screen() {
  const [showMain, setShowMain] = useState(false); // controla la pantalla principal

  const fadeLogo = useRef(new Animated.Value(0)).current;
  const scaleLogo = useRef(new Animated.Value(0.5)).current;
  const rotateLogo = useRef(new Animated.Value(0)).current;
  const slideText = useRef(new Animated.Value(height / 2)).current;
  const fadeOut = useRef(new Animated.Value(1)).current;

  const [usuario, setUsuario] = useState("");
  const [correo, setCorreo] = useState("");
  const [aceptaTerminos, setAceptaTerminos] = useState(false);

  // Validación y alertas
  const enviarDatos = () => {
    if (usuario.trim() === "" || correo.trim() === "") {
      Alert.alert("Error", "Completa todos los campos");
      alert("Error: Completa todos los campos");
      setCorreo("Campo en blanco, por favor completa todos los campos");
      return;
    }

    if (!aceptaTerminos) {
      Alert.alert("Aviso", "Debes aceptar los términos y condiciones");
      alert("Debes aceptar los términos y condiciones");
      return;
    }

    Alert.alert("¡Hola!", "Tus datos fueron enviados correctamente");
    alert(`¡Hola ${usuario}!, tus datos fueron enviados correctamente.`);

    setCorreo("¡Hola!, Tus datos fueron enviados correctamente :3.");
    setUsuario("");
    setCorreo("");
    setAceptaTerminos(false);
  };

  useEffect(() => {
    Animated.parallel([
      Animated.timing(fadeLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
      Animated.spring(scaleLogo, {
        toValue: 1,
        friction: 5,
        useNativeDriver: false,
      }),
      Animated.timing(rotateLogo, {
        toValue: 1,
        duration: 1200,
        useNativeDriver: false,
      }),
    ]).start();

    Animated.timing(slideText, {
      toValue: 0,
      duration: 1000,
      useNativeDriver: false,
      delay: 800,
    }).start();

    const timer = setTimeout(async () => {
      Animated.timing(fadeOut, {
        toValue: 0,
        duration: 800,
        useNativeDriver: false,
      }).start(async () => {
        await SplashScreen.hideAsync(); 
        setShowMain(true);
      });
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const rotateInterpolate = rotateLogo.interpolate({
    inputRange: [0, 1],
    outputRange: ["0deg", "10deg"],
  });

  if (showMain) {
    return (
      <ImageBackground
        source={require("../assets/back2.png")}
        style={styles.background}
        resizeMode="cover"
      >
        <View style={styles.content}>
          <Text style={styles.text}>Registro de Usuario</Text>

          <TextInput
            placeholder="Nombre completo"
            value={usuario}
            onChangeText={setUsuario}
            style={styles.input}
          />

          <TextInput
            placeholder="Correo electrónico"
            value={correo}
            onChangeText={setCorreo}
            style={styles.input}
          />

          <View style={styles.switchContainer}>
            <Switch
              value={aceptaTerminos}
              onValueChange={setAceptaTerminos}
              thumbColor={aceptaTerminos ? "#6200ee" : "#ccc"}
              trackColor={{ true: "#a47bf7ff", false: "#999" }}
            />
            <Text style={styles.switchLabel}>
              Acepto los términos y condiciones
            </Text>
          </View>

          <Button title="Registrarse" color="#a47bf7ff" onPress={enviarDatos} />

          <Text style={styles.mensaje}>{correo}</Text>
        </View>
      </ImageBackground>
    );
  }

  return (
    <Animated.View style={[styles.container, { opacity: fadeOut }]}>
      <Animated.Image
        source={require("../assets/Batman_logo.png")}
        resizeMode="contain"
        style={[
          styles.logoImage,
          {
            opacity: fadeLogo,
            transform: [{ scale: scaleLogo }, { rotate: rotateInterpolate }],
          },
        ]}
      />
      <Animated.Text
        style={[styles.text, { transform: [{ translateY: slideText }] }]}
      >
        ¡Práctica de Repaso 1!
      </Animated.Text>
      <Animated.View
        style={[
          styles.loader,
          {
            opacity: fadeLogo,
            transform: [
              {
                translateX: slideText.interpolate({
                  inputRange: [0, height / 2],
                  outputRange: [0, -50],
                }),
              },
            ],
          },
        ]}
      />
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#007bffff",
    justifyContent: "center",
    alignItems: "center",
  },
  loader: {
    width: 60,
    height: 6,
    backgroundColor: "#fff",
    borderRadius: 3,
  },
  logoImage: {
    width: 300,
    height: 300,
    marginBottom: 5,
  },
  background: {
    flex: 1,
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  content: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 10,
    width: "85%",
  },
  text: {
    color: "white",
    fontSize: 24,
    marginBottom: 15,
    textAlign: "center",
  },
  input: {
    width: "100%",
    borderWidth: 3,
    borderColor: "#a47bf7ff",
    padding: 12,
    borderRadius: 9,
    marginBottom: 10,
    backgroundColor: "#fff",
  },
  switchContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  switchLabel: {
    color: "#fff",
    marginLeft: 10,
    fontSize: 15,
  },
  mensaje: {
    marginTop: 20,
    fontSize: 18,
    color: "#fb61e9ff",
    textAlign: "center",
  },
});
