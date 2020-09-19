import React, { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";

const ContatoInput = (props) => {
  const [nome, setNome] = useState("");
  const [telefone, setTelefone] = useState("");

  const capturaNome = (nome) => {
    setNome(nome);
  };
  const capturaTelefone = (telefone) => {
    setTelefone(telefone);
  };
  return (
    <View style={estilos.inputContainer}>
      <TextInput
        style={estilos.inputText}
        placeholder="Digite seu nome..."
        value={nome}
        onChangeText={capturaNome}
      />
      <TextInput
        style={estilos.inputText}
        placeholder="Digite seu telefone..."
        value={telefone}
        onChangeText={capturaTelefone}
      />
      <Button
        title="Adicionar"
        style={estilos.btn}
        onPress={() => {
          props.btnAdicionarContato([nome, telefone]);
          setNome("");
          setTelefone("");
        }}
      />
    </View>
  );
};

const estilos = StyleSheet.create({
  inputContainer: {
    display: "flex",
    justifyContent: "center",
    marginTop: "8rem",
  },
  inputText: {
    padding: 10,
    margin: 5,
    width: 550,
    borderBottomColor: "black",
    borderBottomWidth: 1,
  },
  btn: {
    marginTop: 11,
  },
});

export default ContatoInput;
