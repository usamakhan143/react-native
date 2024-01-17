/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable quotes */
/* eslint-disable react/react-in-jsx-scope */
/* eslint-disable react-native/no-inline-styles */
import {Button, Platform, StatusBar, Text, View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import Home from "./components/screens/Home";
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import Login from "./components/screens/Login";
import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {createMaterialTopTabNavigator} from "@react-navigation/material-top-tabs";
import Grid from "./components/Grid";
import User from "./components/User";
import Togglecom from "./components/Togglecom";

function App(): JSX.Element {
  const Stack = createNativeStackNavigator();
  const bottomTab = createBottomTabNavigator();
  const TopTab = createMaterialTopTabNavigator();

  return (
    <>
      <StatusBar
        backgroundColor={Platform.OS === "android" ? "blue" : "yellow"}
        barStyle={"light-content"}
        hidden={false}
      />

      {/* Stack Navigation */}
      {/* <NavigationContainer>
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
              headerTitle: () => <Button title={"Left"} />,
              headerRight: () => <Text style={{color: "#fff"}}>VIP</Text>,
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
      </NavigationContainer> */}

      {/* Top Tab Navigation */}
      {/* <NavigationContainer>
        <TopTab.Navigator>
          <TopTab.Screen name="Login" component={Grid} />
          <TopTab.Screen name="Home" component={User} />
          <TopTab.Screen name="Status" component={Togglecom} />
        </TopTab.Navigator>
      </NavigationContainer> */}

      {/* Bottom Tab Navigation */}
      <NavigationContainer>
        <bottomTab.Navigator>
          <bottomTab.Screen name="Login" component={Grid} />
          <bottomTab.Screen name="Home" component={User} />
          <bottomTab.Screen name="Status" component={Togglecom} />
        </bottomTab.Navigator>
      </NavigationContainer>
    </>
  );
}

export default App;
