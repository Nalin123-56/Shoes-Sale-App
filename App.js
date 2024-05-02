import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreen from './assets/Screens/HomeScreen';
import BuyScreen from './assets/Screens/BuyScreen';
import 'react-native-gesture-handler';
import TestNavigation from './assets/Screens/TestNavigation';
import NewCollection from './assets/Screens/NewCollection';

export default function App() {
  return (
    <View style={styles.container}>
      {/* <HomeScreen/> */}
      {/* <BuyScreen/> */}
      <TestNavigation/>
      {/* <NewCollection/> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
});
