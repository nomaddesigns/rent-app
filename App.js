import { StatusBar } from 'expo-status-bar';
import { colors } from './src/config/color';
import { 
  StyleSheet, 
  SafeAreaView, 
  Platform } from 'react-native';
import Route from './src/navigation/router';

export default function App() {
  return (
    <SafeAreaView style={styles.SafeAreaViewForDroid}>
        <StatusBar style="auto" backgroundColor={colors.primary}/>
        <Route />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    backgroundColor: '#fec85c40',
  }
});
