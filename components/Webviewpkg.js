/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable prettier/prettier */
import { View } from "react-native";
import WebView from "react-native-webview";

const Webviewpkg = () => {
    return (
        <WebView source={{ uri: 'https://visech.com/' }} />
    );
}

export default Webviewpkg;