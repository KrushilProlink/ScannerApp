import * as React from 'react';
import { ImageBackground, View } from 'react-native';
import { Button } from '@rneui/themed';
import styles from '../style/style'

const Home = ({ navigation }) => {
    return (
        // <ImageBackground source={require('../../assets/bg-img.png')} style={styles.bgstyle}>
        <View style={styles.container}>
            <Button
                title="Bar Code"
                onPress={() => navigation.navigate('barcode')}
                icon={{ ...styles.iconButtonHome, name: 'barcode' }}
                iconContainerStyle={styles.iconButtonHomeContainer}
                titleStyle={styles.titleButtonHome}
                buttonStyle={styles.buttonHome}
                containerStyle={styles.buttonHomeContainer}
            />
            <Button
                title="Qr Code"
                onPress={() => navigation.navigate('qrcode')}
                icon={{ ...styles.iconButtonHome, name: 'qrcode' }}
                iconContainerStyle={styles.iconButtonHomeContainer}
                titleStyle={styles.titleButtonHome}
                buttonStyle={styles.buttonHome}
                containerStyle={styles.buttonHomeContainer}
            />
        </View>
        // </ImageBackground>
    );
}

export default Home