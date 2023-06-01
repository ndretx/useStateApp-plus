import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default function App() {
  const [fonteCarregada, setFonteCarregada] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      foldit_extraBold: require('./assets/Foldit/static/Foldit-ExtraBold.ttf'),
      foldit_regular: require('./assets/Foldit/static/Foldit-Regular.ttf'),
      foldid_light: require('./assets/Foldit/static/Foldit-Light.ttf')
    });
  }

  useEffect(() => {
    loadFonts()
      .then(() => {
        setFonteCarregada(true)
      })
      .catch((error) => {
        console.log("Ocorreu um erro", error);
      })


  }, []);
  return (
    
    <View style={styles.container}>
      {fonteCarregada ?
        <Text style={{ fontFamily: 'foldit_extraBold', fontSize: 80, justifyContent:'center'  }}>Isso não é um teste </Text>
        :
        <Text > A fonte não foi carregada </Text>
    }
    
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
