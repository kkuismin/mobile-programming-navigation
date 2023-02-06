import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, FlatList } from 'react-native';

export default function CalculatorHistory({ route }) {

  const { data } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.text}>History</Text>
      <FlatList 
        style={styles.flatlist} 
        data={data}
        renderItem={({ item }) => <Text>{ item.key }</Text>}
        keyExtractor={(item, index) => index.toString()}
      />
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
  text: {
    fontSize: 16,
    marginTop: 50,
  },
  flatlist: {
    margin: 10,
  }
});
