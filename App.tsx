/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View} from "react-native";
import Custombutton from "./components/Custombutton";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Custombutton />
    </View>
  );
}

export default App;
