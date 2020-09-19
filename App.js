import React, { useState } from "react";
import { StyleSheet, Text, View, FlatList } from "react-native";
import ContatoInput from "./components/ContatoInput";
import ContatoItem from "./components/ContatoItem";


export default function App() {
  const [contatos, setContatos] = useState([]);
  const [contador, setContador] = useState(10);

  const adicionaContato = (contato) => {
    setContatos((contatos) => {
      setContador(contador + 2);
      return [{ key: contador.toString(), value: contato }, ...contatos];
    });
  };

  const removeContato = (keyASerRemovida) => {
    setContatos((contatos) => {
      return contatos.filter((contato) => {
        return contato.key !== keyASerRemovida;
      });
    });
  };

  return (
    <View style={estilos.container}>
      <Text style={estilos.titulo}>Lista de Contatos</Text>
      <ContatoInput btnAdicionaContato={adicionaContato} />
      <FlatList
        data={contatos}
        renderItem={(contato) => (
          <ContatoItem
            chave={contato.item.key}
            contato={contato.item.value}
            remove={removeContato}
          />
        )}
      />
    </View>
  );
}
const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#878C8F",
    alignItems: "center",
    justifyContent: "center",
  },
  titulo: {
    fontSize: 50,
    marginTop: 125,
  },
});
