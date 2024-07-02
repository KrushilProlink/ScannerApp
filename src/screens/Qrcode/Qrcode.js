import { Button } from '@rneui/themed'
import React from 'react'
import { ImageBackground, Text, View } from 'react-native'
import styles from '../../style/style'

const Qrcode = ({ navigation }) => {
    return (
        <ImageBackground source={require('../../../assets/bg-img.png')} style={styles.bgstyle}>
            <View style={styles.container}>
                <Button
                    title="Generator"
                    onPress={() => navigation.navigate('qrcode-generator')}
                    icon={{ ...styles.iconButtonHome, name: 'qrcode' }}
                    iconContainerStyle={styles.iconButtonHomeContainer}
                    titleStyle={styles.titleButtonHome}
                    buttonStyle={styles.buttonHome}
                    containerStyle={styles.buttonHomeContainer}
                />
                <Button
                    title="Scanner"
                    onPress={() => navigation.navigate('qrcode-scan')}
                    icon={{ ...styles.iconButtonHome, name: 'qrcode-scan' }}
                    iconContainerStyle={styles.iconButtonHomeContainer}
                    titleStyle={styles.titleButtonHome}
                    buttonStyle={styles.buttonHome}
                    containerStyle={styles.buttonHomeContainer}
                />
            </View>
        </ImageBackground>
    )
}

export default Qrcode