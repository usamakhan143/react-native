/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Platform, StatusBar, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/screens/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./components/screens/Login";

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();

  return (
    <>
      <StatusBar
        backgroundColor={Platform.OS === "android" ? "blue" : "yellow"}
        barStyle={"light-content"}
        hidden={false}
      />
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: "red",
            },
            headerTitleStyle: {
              fontSize: 22,
              color: "white",
            },
          }}>
          <Stack.Screen
            name={"Login"}
            component={Login}
            options={{
              title: "Sign in",
              headerStyle: {
                backgroundColor: "red",
              },
              headerTitleStyle: {
                fontSize: 22,
                color: "white",
              },
            }}
          />
          <Stack.Screen name={"Home"} component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
