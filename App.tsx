import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import { AppNavigator } from "./tab/Tab";

const Stack = createStackNavigator();

export default function App() {
  const a = false;
  return (
    <NavigationContainer>
      {a ? (
        <AppNavigator />
      ) : (
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </Stack.Navigator>
      )}
    </NavigationContainer>
  );
}
