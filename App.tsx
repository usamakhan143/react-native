/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View} from "react-native";
import Modaldialogue from "./components/Modaldailogue";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Modaldialogue />
    </View>
  );
}

export default App;
