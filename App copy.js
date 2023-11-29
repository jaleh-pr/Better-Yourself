import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  FlatList,
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
} from 'react-native';

async function getItems() {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  return ['Apple', 'Banana'];
}

function Item({ name }) {
  return (
    <View style={styles.item}>
      <Text style={styles.itemText}>{name}</Text>
    </View>
  );
}

export default function App() {
  // const [loading, setLoading] = useState(true);
  const [items,setItems] = useState([]);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    getItems().then((items) => {
      setItems(items);
      setLoading(false);
    });
  }, []);

  const renderItem = ({ item }) => (
    <Item name={item}/>
  );
  return (
    <SafeAreaView style={styles.container}>
    { loading ?
     <ActivityIndicator size="large"/> :
     <FlatList
       data={items}
       renderItem={renderItem}
     /> 
     }
   </SafeAreaView>
    // <View style={styles.container}>
    //   <Text>Jaleh is genius</Text>
    //   <ActivityIndicator/>
    //   <StatusBar style="auto" />
    // </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  item: {
    backgroundColor: '#888',
    padding: 12,
    marginBottom: 12
  },
  itemText: {
    color: '#fff',
    fontSize: 24,
  }
});
