import { 
    StyleSheet, 
    Text, 
    View, 
    Image, 
    SafeAreaView, 
    Platform } from 'react-native';
    import styles from './styles';

    const PostItems = () => {
        return (
            <View style={styles.container}>
                <View style={styles.postWrap}>
                <Image 
                    source={{uri:"https://picsum.photos/seed/picsum/200/300"}} 
                    style={ styles.postImage }></Image>
                <View style={styles.postContentWrap}>
                    <View>
                    <Text style={styles.postTitle}>This is title for rent</Text>
                    <Text style={styles.postPlace}>New York</Text>
                    </View>
                    <Text style={styles.postValue}>$100 / Day</Text>
                </View>
                </View>
            </View>
        )
    };

export default PostItems;