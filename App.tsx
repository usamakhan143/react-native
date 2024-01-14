/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {View} from "react-native";
import Pressablecomp from "./components/Pressablecomp";

function App(): JSX.Element {
  return (
    <View style={{flex: 1}}>
      <Pressablecomp />
    </View>
  );
}

export default App;
