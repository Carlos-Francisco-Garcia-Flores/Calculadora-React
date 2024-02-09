import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Alert } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

  return (
    
    <View style={styles.container}>

      <Back/>
      <Logo/>

      <Encabezado1/>
      <Encabezado2/>

      <CorreoElectronicoInput />

      <ContrasenaInput />

      <IniciarSesionButton />

      <CrearCuentaButton />

      <OlvidarContrasenaText />

      <StatusBar style="auto" />
    </View>
  );
}

export const Back = () => {
  return (
      <Text style={styles.atras}> {'<'} </Text>
  );
};

export const Logo = () => {
  return (
      <Text style={styles.logo}> ViX </Text>
  );
};

export const Encabezado1 = () => {
  return (
      <Text style={styles.Encabezado1}> Inicia sesión </Text>
      
  );
};
export const Encabezado2 = () => {
  return (
      <Text style={styles.Encabezado2}> con tu cuenta </Text>
      
  );
};

export const CorreoElectronicoInput = () => {
  return (
    <TextInput
      style={styles.inputCorreo}
      placeholder="Correo electrónico"
      placeholderTextColor="gray"
      keyboardType="email-address"
    />
  );
};

export const ContrasenaInput = () => {
  return (
    <TextInput
      style={styles.inputPassword}
      placeholder="Contraseña"
      placeholderTextColor="gray"
      secureTextEntry={true}
    />
  );
};

export const IniciarSesionButton = () => {
  return (
    <TouchableOpacity style={styles.loginButton}>
      <Text style={styles.buttonText1}>Iniciar Sesión</Text>
    </TouchableOpacity>
  );
};

export const CrearCuentaButton = () => {
  return (
    <TouchableOpacity style={styles.createAccountButton}>
      <Text style={styles.buttonText2}>¿No tienes cuenta? Crear una cuenta</Text>
    </TouchableOpacity>
  );
};

export const OlvidarContrasenaText = () => {
  return <Text style={styles.forgotPasswordText}>¿Olvidaste tu contraseña?</Text>;
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(0, 1, 41)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputCorreo: {
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: '5%',
    marginTop: '50%', 
    paddingLeft: 10,
    width: '80%',
    borderRadius: 5,
    color: 'white',
  },
  inputPassword: {
    height: 50,
    borderColor: 'white',
    borderWidth: 2,
    marginBottom: '5%',
    paddingLeft: 10,
    width: '80%',
    borderRadius: 5,
    color: 'white',
  },
  
  loginButton: {
    backgroundColor: 'rgb(255, 50, 31)',
    height: 50,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 10,

  },
  createAccountText: {
    marginTop: 10,
  },
  createAccountButton: {
    backgroundColor: 'white',
    height: 40,
    padding: 10,
    borderRadius: 5,
    width: '80%',
    alignItems: 'center',
    textAlign: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  buttonText1: {
    color: 'white',
    fontWeight: 'bold',
  },
  buttonText2: {
    color: 'black',
    fontWeight: 'bold',
  },
  forgotPasswordText: {
    marginTop: 30,
    color: 'white',
  },
  atras: {
    position: 'absolute',
    top: 25,
    left: 30,  
    color: 'white',
    fontSize: 35,
  },
  Encabezado1: {
    position: 'absolute',
    top: '20%',
    left: 30,  
    color: 'rgb(248, 74, 0)',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,

  },
  Encabezado2: {
    position: 'absolute',
    top: '25%',
    left: 30,  
    color: 'white',
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 28,

  },
  logo: {
    position: 'absolute',
    top: '10%',
    left: 30,  
    color: 'white',
    fontSize: 40,
    fontWeight: '900',
  },
});
