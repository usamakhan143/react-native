/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View} from "react-native";
import ActivityIndicatorloader from "./components/ActivityIndicatorloader";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <ActivityIndicatorloader />
    </View>
  );
}

export default App;
