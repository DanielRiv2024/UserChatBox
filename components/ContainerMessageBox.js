import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function ContainerMessageBox({ userName, message, time, userImage }) {
  const truncatedMessage = message.length > 20 ? message.substring(0, 16) + "..." : message;
  return (
    <View style={styles.messageContainer}>
      <Image
        source={{ uri: userImage }}
        style={styles.userImage}
      />
      <View style={styles.textContainer}>
        <Text style={styles.userName}>{userName}</Text>
        <Text style={styles.messageText}>{truncatedMessage}</Text>
      </View>
      <Text style={styles.time}>{time}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  messageContainer: {
    flexDirection: 'row', // Disposición horizontal de la foto y el texto
    alignItems: 'center',
    backgroundColor: 'white', // Color de fondo típico de los mensajes de WhatsApp
    padding: 10,
    borderRadius: 10,
    marginBottom: 10,
    maxWidth: '100%', // Limita el ancho máximo
    alignSelf: 'flex-start', // Coloca el mensaje hacia la izquierda
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 25,
    marginRight: 10,
  },
  textContainer: {
    flex: 1,
  },
  userName: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4,
  },
  messageText: {
    fontSize: 14,
  },
  time: {
    fontSize: 12,
    color: 'black',
    marginLeft: 10, 
    alignSelf: 'flex-end', 
    fontWeight:'400'
  },
});
