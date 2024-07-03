import React, { useState, useRef, useCallback } from 'react';
import { View, Platform, PermissionsAndroid, Text, Dimensions, Share } from 'react-native';
import { Button, Icon, Input, Dialog } from '@rneui/themed';
import Barcode from 'react-native-barcode-svg';
import ViewShot, { captureRef } from "react-native-view-shot";
import styles from '../../style/style';
import * as Sharing from 'expo-sharing';
import * as FileSystem from 'expo-file-system';

const BarcodeGenerator = () => {

    const [BarValue, setBarValue] = useState('lintangwisesa');
    const [BarImage, setBarImage] = useState('');
    const [showDialog, setShowDialog] = useState(false);
    const [loading, setLoading] = useState(false);
    const ref = useRef();

    // const shareQR = useCallback(() => {
    //     captureRef(ref, {
    //         format: "jpg",
    //         quality: 0.8,
    //         result: "base64",
    //     }).then(
    //         (b64) => {
    //             const shareImageBase64 = {
    //                 title: "Barcode",
    //                 message: "Here is my barcode!",
    //                 url: `data:image/jpeg;base64,${b64}`
    //             };
    //             setBarImage(String(shareImageBase64.url));
    //             Share.open(shareImageBase64);
    //         },
    //         (error) => console.error("Oops, snapshot failed", error)
    //     );
    // }, []);

    // const downloadQR = useCallback(() => {
    //     setShowDialog(true)
    //     setLoading(true)
    //     captureRef(ref, {
    //         format: "jpg",
    //         quality: 0.8,
    //         result: "base64",
    //     }).then(
    //         async (b64) => {
    //             const shareImageBase64 = {
    //                 title: "Barcode",
    //                 message: "Here is my barcode!",
    //                 url: `data:image/jpeg;base64,${b64}`
    //             };
    //             setBarImage(String(shareImageBase64.url));

    //             if (Platform.OS === 'ios') {
    //                 saveImage(String(shareImageBase64.url));
    //             } else {
    //                 try {
    //                     const granted = await PermissionsAndroid.request(
    //                         PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
    //                         {
    //                             title: 'Storage Permission Required',
    //                             message: 'App needs access to your storage to download the Barcode image',
    //                         }
    //                     );
    //                     if (granted === PermissionsAndroid.RESULTS.GRANTED) {
    //                         console.log('Storage Permission Granted');
    //                         saveImage(String(shareImageBase64.url));
    //                     } else {
    //                         console.log('Storage Permission Not Granted');
    //                     }
    //                 } catch (err) {
    //                     console.log(err)
    //                 }
    //             }
    //         },
    //         (error) => console.error("Oops, snapshot failed", error)
    //     );
    // }, [])

    const shareQR = async () => {
        // const fileUri = FileSystem.cacheDirectory + 'barcode.png';
        // await FileSystem.downloadAsync(
        //     'https://api.qrserver.com/v1/create-qr-code/?data=' + BarValue + '&size=200x200',
        //     fileUri
        // )
        //     .then(async ({ uri }) => {
        //         if (Platform.OS === 'ios') {
        //             await Sharing.shareAsync(uri);
        //         } else {
        // await Sharing.shareAsync(uri, {
        //     mimeType: 'image/png',
        //     dialogTitle: 'Share this barcode',
        //     UTI: 'public.png',
        // });
        //         }
        //     })
        //     .catch(error => {
        //         console.error(error);
        //     });
        // const fileUri = FileSystem.cacheDirectory + 'barcode.png';

        // const barcodeUrl = 'https://bwipjs-api.metafloor.com/?bcid=code128&text=' + BarValue + '&scale=3&includetext';

        // await FileSystem.downloadAsync(barcodeUrl, fileUri)
        //     .then(async ({ uri }) => {
        //         console.log('Barcode downloaded to', uri);
        //         await Sharing.shareAsync(uri, {
        //             mimeType: 'image/png',
        //             dialogTitle: 'Share this barcode',
        //             UTI: 'public.png',
        //         });
        //     })
        //     .catch(error => {
        //         console.error('Error downloading barcode', error);
        //     });
    }

    const downloadQR = async () => {
    };


    return (
        <View style={styles.container}>
            <Input
                placeholder='Type your text here...'
                onChangeText={val => { setBarValue(val) }}
                leftIcon={
                    <Icon
                        name='barcode'
                        type='ionicon'
                        size={24}
                        color='#0C8E4E'
                    />
                }
            />
            <ViewShot ref={ref} options={{ format: 'jpg', quality: 0.9 }}>
                {/* <SvgBarcode
                    format="CODE128"
                    value={BarValue ? BarValue : 'lintangwisesa'}
                    text={BarValue ? BarValue : 'lintangwisesa'}
                    style={{ marginBottom: 20 }}
                    textStyle={{ color: '#000' }}
                    maxWidth={Dimensions.get('window').width / 1.5}
                /> */}
                <Barcode value={BarValue} format="CODE128" />

            </ViewShot>
            <Button
                title="Share QR"
                icon={{ ...styles.iconButtonHome, size: 20, name: 'share' }}
                iconContainerStyle={styles.iconButtonHomeContainer}
                titleStyle={{ ...styles.titleButtonHome, fontSize: 20 }}
                buttonStyle={{ ...styles.buttonHome, height: 50 }}
                containerStyle={{ ...styles.buttonHomeContainer, marginTop: 20, marginBottom: 10 }}
                onPress={shareQR}
            />
            <Button
                title="Download"
                icon={{ ...styles.iconButtonHome, size: 20, name: 'file-download' }}
                iconContainerStyle={styles.iconButtonHomeContainer}
                titleStyle={{ ...styles.titleButtonHome, fontSize: 20 }}
                buttonStyle={{ ...styles.buttonHome, height: 50 }}
                containerStyle={{ ...styles.buttonHomeContainer, marginTop: 10, marginBottom: 10 }}
                onPress={downloadQR}
            />
            <Dialog
                isVisible={showDialog}
                onBackdropPress={() => setShowDialog(!showDialog)}
            >
                {
                    loading
                        ?
                        <Dialog.Loading />
                        :
                        <>
                            <Dialog.Title titleStyle={{ color: '#000', fontSize: 25 }} title="Download QR" />
                            <Text style={{ color: '#000', fontSize: 18 }}>
                                Your barcode has been downloaded successfully. Check it on your <Text style={{ fontWeight: 'bold' }}>Downloads</Text> folder.
                            </Text>
                        </>
                }
            </Dialog>
        </View>
    )
}

export default BarcodeGenerator