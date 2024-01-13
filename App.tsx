/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View} from "react-native";
import Responsiveui from "./components/Responsiveui";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Responsiveui />
    </View>
  );
}

export default App;
