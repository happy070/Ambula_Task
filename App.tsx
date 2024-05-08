import * as React from "react";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./src/pages/Home";
import Login from "./src/pages/Login";
import Signup from "./src/pages/Signup";
import DashBoard from "./src/pages/DashBoard";
import { Provider } from "react-redux";
import { store } from "./src/Redux-State/store";
import { Image, TouchableOpacity } from "react-native";
import UpdateDetails from "./src/pages/UpdateDetails";
import { bgColor } from "./src/Constants";
import OtpVerify from "./src/pages/OtpVerify";
const Stack = createNativeStackNavigator();
const BackButton = () => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Image
        source={require("./assets/arrow.png")}
        style={{ width: 30, height: 20, marginLeft: 10 }}
      />
    </TouchableOpacity>
  );
};
function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator
          screenOptions={{
            headerShown: true,
            headerLeft: () => <BackButton />,
          }}
        >
          <Stack.Screen name="Home" component={Home} options={{ title: "" }} />
          <Stack.Screen
            name="Login"
            component={Login}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="SignUp"
            component={Signup}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="DashBoard"
            component={DashBoard}
            options={{ title: "" }}
          />
          <Stack.Screen
            name="UpdateUser"
            component={UpdateDetails}
            options={{
              title: "New ABHA Address",
              headerStyle: {
                backgroundColor: bgColor,
              },
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: "bold",
                color: "black", // Set text color to white
              },
              headerTitleAlign: "center",
            }}
          />
          <Stack.Screen
            name="VerifyOTP"
            component={OtpVerify}
            options={{
              title: "OTP Verification",
              headerStyle: {
                backgroundColor: bgColor,
              },
              headerTitleStyle: {
                fontSize: 16,
                fontWeight: "bold",
                color: "black", // Set text color to white
              },
              headerTitleAlign: "center",
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
export default App;
