import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../../style/style';

const QrcodeScanner = () => {
    const [barValue, setBarValue] = useState('')
    const [barType, setBarType] = useState('')
    const [flash, setFlash] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    return (
        <View style={styles.container}>
            <Text>QrcodeScanner</Text>
        </View>
    )
}

export default QrcodeScanner
