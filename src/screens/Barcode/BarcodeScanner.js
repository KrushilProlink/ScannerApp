import { Button, Dialog } from "@rneui/themed";
import { CameraView, useCameraPermissions } from "expo-camera";
import { useState } from "react";
import { Alert, StyleSheet, Text, TouchableOpacity, Vibration, View } from "react-native";
import * as Clipboard from 'expo-clipboard';


const BarcodeScanner = () => {
    const [facing, setFacing] = useState("back");
    const [permission, requestPermission] = useCameraPermissions();
    const [scanned, setScanned] = useState(false);
    const [light, setLight] = useState(false);
    const [showDialog, setShowDialog] = useState(false);
    const [barcodeValue, setBarcodeValue] = useState("");

    if (!permission) {
        return <View />;
    }

    if (!permission.granted) {
        return (
            <View style={styles.container}>
                <Text style={{ textAlign: "center" }}>
                    We need your permission to show the camera
                </Text>
                <Button onPress={requestPermission} title="grant permission" />
            </View>
        );
    }


    const copyToClipboard = async (data) => {
        Alert.alert(
            "Success",
            "Barcode Copy Successfully...",
            [
                {
                    text: "Ok",
                }
            ],
            { cancelable: true }
        );
        await Clipboard.setStringAsync(data);
    };


    const handleBarCodeScanned = ({ type, data }) => {
        Vibration.vibrate()
        setScanned(true);
        setShowDialog(true);

        setBarcodeValue(data);
    };

    return (
        <View style={styles.container}>
            <CameraView
                style={styles.camera}
                facing={facing}
                barcodeScannerSettings={{
                    barcodeTypes: ["code39", "code128", "upc_e", "upc_a"],
                    bounds: {
                        x: 0,
                        y: 0,
                        width: 300,
                        height: 300,
                    },
                }}
                enableTorch={light}
                onBarcodeScanned={scanned ? undefined : handleBarCodeScanned}
            >
                <View style={styles.buttonContainer}>
                    <View style={styles.button}>
                        <Button
                            title={`Flash ${light ? "OFF" : "ON"}`}
                            icon={{
                                ...styles.iconButtonHome,
                                size: 20,
                                name: "qr-code-scanner",
                            }}
                            iconContainerStyle={styles.iconButtonHomeContainer}
                            titleStyle={{ ...styles.titleButtonHome, fontSize: 20 }}
                            buttonStyle={{ ...styles.buttonHome, height: 50 }}
                            containerStyle={{
                                ...styles.buttonHomeContainer,
                                marginTop: 20,
                                marginBottom: 10,
                            }}
                            onPress={() => {
                                setLight(!light);
                            }}
                        />
                    </View>
                </View>
            </CameraView>
            <Dialog
                isVisible={showDialog}
                onBackdropPress={() => { setShowDialog(!showDialog); setScanned(false); }}
            >
                <Dialog.Title
                    titleStyle={{ color: "#000", fontSize: 25 }}
                    title="Scanned Barcode :"
                />
                <Text style={{ color: "#000", fontSize: 25 }} onPress={() => copyToClipboard(barcodeValue)}>{barcodeValue}</Text>
                <Dialog.Actions>
                    <Dialog.Button
                        title="Scan Again"
                        onPress={() => {
                            setShowDialog(false);
                            setScanned(false);
                        }}
                    />
                </Dialog.Actions>
            </Dialog>
        </View>
    );
};

export default BarcodeScanner;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
    },
    camera: {
        flex: 1,
    },
    buttonContainer: {
        flex: 1,
        flexDirection: "row",
        margin: 64,
    },
    button: {
        flex: 1,
        alignSelf: "flex-end",
        alignItems: "center",
    },
    text: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
    },
    iconButtonHomeContainer: { marginRight: 10 },
    iconButtonHome: {
        type: "material",
        size: 50,
        color: "white",
    },
    titleButtonHome: {
        fontWeight: "700",
        fontSize: 25,
    },
    buttonHome: {
        backgroundColor: "#0C8E4E",
        borderWidth: 0,
        borderRadius: 30,
        height: 100,
    },
    buttonHomeContainer: {
        width: 200,
        marginHorizontal: 50,
        marginVertical: 20,
    },
});
