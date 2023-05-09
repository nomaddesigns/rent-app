import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { 
    Text, 
    View,
    TextInput } from 'react-native';
    import styles from './styles';
import { colors } from '../../config/color';

    const HeaderForMobile = () => {
        return (
            <View style={styles.headerWrap}>
          <View style={styles.searchByTextWrap}>
            <Feather name="search" size={24} color={colors.black} />
            <TextInput placeholder='search' style={styles.searchPlaceholder} multiline={false} />
          </View>
          <View style={styles.locationCatSearchWrap}>
            <View style={{ flexDirection: "row" }}>
              <Ionicons name="location" size={20} color={colors.black} />
              <Text>Location</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>New York</Text>
            </View>
            <View style={{ flexDirection: "row" }}>
              <MaterialIcons name="settings" size={20} color={colors.black} />
              <Text>Category</Text>
              <Text style={{ fontWeight: "bold", marginLeft: 5 }}>Apartment</Text>
            </View>
          </View>
        </View>
        )
    };

export default HeaderForMobile;