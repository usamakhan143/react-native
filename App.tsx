/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Platform, StatusBar, View} from "react-native";
import Pressablecomp from "./components/Pressablecomp";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <StatusBar
        backgroundColor={Platform.OS === "android" ? "blue" : "yellow"}
        barStyle={"light-content"}
        hidden={false}
      />
      <Pressablecomp />
    </View>
  );
}

export default App;
