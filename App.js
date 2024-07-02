import { StatusBar } from 'expo-status-bar';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Home from './src/screens/Home';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Barcode from './src/screens/Barcode/Barcode';
import Qrcode from './src/screens/Qrcode/Qrcode';
import BarcodeScanner from './src/screens/Barcode/BarcodeScanner';
import BarcodeGenerator from './src/screens/Barcode/BarcodeGenerator';
import QrcodeGenerator from './src/screens/Qrcode/QrcodeGenerator';
import QrcodeScanner from './src/screens/Qrcode/QrcodeScanner';
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
        <Stack.Screen name="barcode" component={Barcode} options={{ title: "Bar Code" }} />
        <Stack.Screen name="barcode-scan" component={BarcodeScanner} options={{ title: "Barcode Scan" }} />
        <Stack.Screen name="barcode-generator" component={BarcodeGenerator} options={{ title: "Barcode Generator" }} />
        <Stack.Screen name="qrcode" component={Qrcode} options={{ title: "Qr Code" }} />
        <Stack.Screen name="qrcode-scan" component={QrcodeScanner} options={{ title: "Qrcode Scan" }} />
        <Stack.Screen name="qrcode-generator" component={QrcodeGenerator} options={{ title: "Qrcode Generator" }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
