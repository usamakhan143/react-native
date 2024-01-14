/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Platform, StatusBar, View} from "react-native";
import Webviewpkg from "./components/Webviewpkg";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={Platform.OS === "android" ? "blue" : "yellow"}
        barStyle={"light-content"}
        hidden={false}
      />
      <Webviewpkg />
    </View>
  );
}

export default App;
