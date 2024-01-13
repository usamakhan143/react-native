/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View} from "react-native";
import Customradio from "./components/Custom-radio-buttons/Customradio";
import Dynamicradio from "./components/Custom-radio-buttons/Dynamicradio";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Customradio />
      <Dynamicradio />
    </View>
  );
}

export default App;
