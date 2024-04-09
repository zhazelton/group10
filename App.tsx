import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { Text } from "react-native";
import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Dashboard from "./screens/dashboard/Dashboard";
import CreateWhiteboard from "./screens/whiteboard/CreateWhiteboard";
import {
  AuthContextProvider,
  useAuthContext,
} from "./security/authContext/AuthContext";
import WhiteboardDetails from "./screens/whiteboard/Details";
import WhiteboardGallery from "./screens/whiteboard/Gallery";
import WhiteboardEdit from "./screens/whiteboard/Edit";
import WhiteboardARview from "./screens/whiteboard/ARview";
import ShareWhiteboard from "./screens/whiteboard/Share";

const Stack = createStackNavigator();

export default function App() {
  const a = false;

  return (
    <AuthContextProvider>
      <NavigationContainer>
        <Router />
      </NavigationContainer>
    </AuthContextProvider>
  );
}

const Router = () => {
  const { isLoggedIn } = useAuthContext();
  return (
    <Stack.Navigator initialRouteName="Home">
      {isLoggedIn ? (
        <>
          <Stack.Screen name="Home" component={Dashboard} />
          <Stack.Screen name="Create Whiteboard" component={CreateWhiteboard} />
          <Stack.Screen
            name="Whiteboard Details"
            component={WhiteboardDetails}
          />
          <Stack.Screen
            name="Whiteboard Gallery"
            component={WhiteboardGallery}
          />
          <Stack.Screen name = "View in AR" component={WhiteboardARview} />
          <Stack.Screen name = "Edit your Whiteboard" component={WhiteboardEdit} />
          <Stack.Screen name = "Share A Whiteboard" component={ShareWhiteboard} />
        </>
      ) : (
        <>
          <Stack.Screen name="Home" component={Login} />
          <Stack.Screen name="Register" component={Register} />
        </>
      )}
    </Stack.Navigator>
  );
};
