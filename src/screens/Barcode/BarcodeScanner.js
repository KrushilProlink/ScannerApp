import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from '../../style/style';

const BarcodeScanner = () => {
    const [barValue, setBarValue] = useState('')
    const [barType, setBarType] = useState('')
    const [flash, setFlash] = useState(false)
    const [showDialog, setShowDialog] = useState(false)
    return (
        <View style={styles.container}>
            <Text>
                BarcodeScanner
            </Text>
        </View>
    )
}

export default BarcodeScanner
