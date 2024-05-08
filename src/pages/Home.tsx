import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";
import Background from "../Background";
import Btn from "../Buttons/Btn";
import { blueBtn } from "../Constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";

const Home: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const navigateToLogin = () => {
    navigation.navigate("Login");
  };
  const navigateToSignup = () => {
    navigation.navigate("SignUp");
  };
  return (
    <Background>
      <View style={{ marginHorizontal: "18%", marginVertical: 80 }}>
        <View style={{ alignItems: "center" }}>
          <Image
            source={require("../../assets/Ambula-Logo.png")}
            style={{
              width: "100%",
              resizeMode: "contain",
              top: 0,
              position: "relative",
            }}
          />
          <Text
            style={{
              marginVertical: 0,
              fontSize: 15,
              fontWeight: "bold",
              marginBottom: 10,
            }}
          >
            Building a Healthier India, Together
          </Text>
        </View>
        <View style={{ alignItems: "center", justifyContent: "center" }}>
          <Btn
            bgColor={blueBtn}
            btnLabel="Login"
            textColor="white"
            Press={navigateToLogin}
          />
          <Btn
            bgColor="white"
            btnLabel="Signup"
            textColor={blueBtn}
            Press={navigateToSignup}
          />
        </View>
      </View>
    </Background>
  );
};
const style = StyleSheet.create({});
export default Home;
