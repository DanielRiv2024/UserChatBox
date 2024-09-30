import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";

export default function SignInScreen({navigation}) {

  const handleLogin = () => {
    navigation.navigate('Lobby');
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerTitle}>
        <Text style={styles.title}>Bienvenido de nuevo...</Text>
        <View style={styles.containerData}>
          <TextInput placeholder="ejemplo_correo@dominio.com" style={styles.containerTextInput}></TextInput>
          <TextInput placeholder="********" style={styles.containerTextInput}></TextInput>
          <Text style={styles.restorePassword}>
            Olvidaste la contraseña?
          </Text>
          <View style={styles.containerButtons}>
            <TouchableOpacity style={styles.buttonTouchable} onPress={handleLogin}>
              <Text style={styles.textTouchable}>Acceder</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.buttonTouchable, { backgroundColor: "white" }]}>
              <Text style={[styles.textTouchable, { color: "black" }]}>
                Crear cuenta
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#EDEDED",
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
  },
  containerData: {
    gap: 10,
  },
  containerTextInput: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "black",
    fontSize: 15,
    height:40,
    paddingHorizontal: 10,
  },
  containerButtons: {
    flexDirection: "row",
    justifyContent: "space-between",
    gap: 10,
  },
  buttonTouchable: {
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    flex: 1,
  },
  textTouchable: {
    color: "white",
    fontSize: 15,
    fontWeight: "bold",
    padding: 10,
  },
  title: {
    padding: 20,
    fontSize: 30,
    fontWeight: "700",
  },
  restorePassword:{
fontWeight:'700',
textAlign:'right',
marginBottom:10
  }
});
