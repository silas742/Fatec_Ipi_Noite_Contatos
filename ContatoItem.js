import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const ContatoItem = (props) => {
  return (
    <TouchableOpacity onPress={() => props.remove(props.chave)}>
      <View style={estilos.itemNaLista}>
        <Text style={estilos.titulo}>Contato de Usuario</Text>
        <Text style={estilos.item}>Nome: {props.contato[0]}</Text>
        <Text style={estilos.item}>Telefone: {props.contato[1]}</Text>
      </View>
    </TouchableOpacity>
  );
};

const estilos = StyleSheet.create({
  titulo: {
    fontSize: 22,
    textAlign: "center",
    marginBottom: 7,
  },
  item: {
    marginBottom: 4,
    fontSize: 18,
  },
  itemNaLista: {
    width: 560,
    padding: 22,
    backgroundColor: "#5F6062",
    borderWidth: 0.5,
    marginBottom: 7,
    borderRadius: 7,
    marginTop: 22,
  },
});

export default ContatoItem;
