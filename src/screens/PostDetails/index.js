import { StatusBar } from 'expo-status-bar';
import { colors } from '../../config/color' ;
import { 
  StyleSheet, 
  SafeAreaView, 
  Platform } from 'react-native';
import PostItems from '../../components/postItems';
import HeaderForMobile from '../../components/HeaderForMobile';

const PostDetails = () => {
  return (
    <View>
        <Text>Hellow from post details</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  SafeAreaViewForDroid: {
    flex: 1,
    paddingTop: Platform.OS === 'android' ? 35 : 0,
    backgroundColor: '#fec85c40',
  }
});

export default PostDetails;