import React from 'react'
import { ImageBackground, View } from 'react-native'
import styles from '../../style/style'
import { Button } from '@rneui/themed'

const Barcode = ({ navigation }) => {
    return (
        // <ImageBackground source={require('../../../assets/bg-img.png')} style={styles.bgstyle}>
        <View style={styles.container}>
            <Button
                title="Generator"
                onPress={() => navigation.navigate('barcode-generator')}
                icon={{ ...styles.iconButtonHome, name: 'barcode' }}
                iconContainerStyle={styles.iconButtonHomeContainer}
                titleStyle={styles.titleButtonHome}
                buttonStyle={styles.buttonHome}
                containerStyle={styles.buttonHomeContainer}
            />
            <Button
                title="Scanner"
                onPress={() => navigation.navigate('barcode-scan')}
                icon={{ ...styles.iconButtonHome, name: 'barcode-scan' }}
                iconContainerStyle={styles.iconButtonHomeContainer}
                titleStyle={styles.titleButtonHome}
                buttonStyle={styles.buttonHome}
                containerStyle={styles.buttonHomeContainer}
            />
        </View>
        // </ImageBackground>
    )
}

export default Barcode