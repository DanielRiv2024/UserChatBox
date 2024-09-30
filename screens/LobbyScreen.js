import React from 'react';
import { Text, View, ScrollView, StyleSheet } from 'react-native';
import ContainerMessageBox from '../components/ContainerMessageBox';

export default function LobbyScreen() {
  // Array de mensajes falsos
  const messages = [
    {
      id: 1,
      userName: 'Juan',
      message: 'Hola, ¿cómo estás?',
      time: '12:30 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 2,
      userName: 'María',
      message: 'Voy camino a la reunión',
      time: '12:45 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 3,
      userName: 'Carlos',
      message: '¿Nos vemos más tarde?',
      time: '1:00 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 4,
      userName: 'Juan',
      message: 'Hola, ¿cómo estás?',
      time: '12:30 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 5,
      userName: 'María',
      message: 'Voy camino a la reunión',
      time: '12:45 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 6,
      userName: 'Carlos',
      message: '¿Nos vemos más tarde?',
      time: '1:00 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 7,
      userName: 'Juan',
      message: 'Hola, ¿cómo estás?',
      time: '12:30 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 8,
      userName: 'María',
      message: 'Voy camino a la reunión',
      time: '12:45 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
    {
      id: 9,
      userName: 'Carlos',
      message: '¿Nos vemos más tarde?',
      time: '1:00 PM',
      userImage: 'https://thumbs.dreamstime.com/b/icono-del-vector-de-la-silueta-de-la-persona-ejemplo-blanco-y-negro-del-avatar-del-usuario-icono-linear-del-esquema-93005292.jpg',
    },
  ];

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollContainer}>
        {messages.map((msg) => (
          <ContainerMessageBox
            key={msg.id}
            userName={msg.userName}
            message={msg.message}
            time={msg.time}
            userImage={msg.userImage}
          />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start', // Para alinear todo hacia la parte superior
    alignItems: 'center',
    paddingTop: 20, // Añadir espacio en la parte superior
    backgroundColor: '#f5f5f5', // Color de fondo para distinguir mejor el layout
  },
  title: {
    fontSize: 20,
    marginBottom: 10,
  },
  scrollContainer: {
    width: '100%', // Para que el ScrollView ocupe todo el ancho
    paddingHorizontal: 10, // Un poco de padding lateral
  },
});
