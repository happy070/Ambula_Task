import React from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { blueBtn } from "../Constants";
import Field from "../Inputs/Field";
import Btn from "../Buttons/Btn";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";

const Login: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const navigatetoDashBoard = () => {
    navigation.navigate("DashBoard");
  };
  const handleSignUpPress = () => {
    // Navigate to the SignUp page
    navigation.navigate("SignUp");
  };
  return (
    <View style={{ backgroundColor: "#C1D7FF", alignItems: "center" }}>
      <View style={{ alignItems: "center", width: 460 }}>
        <View
          style={{
            backgroundColor: "white",
            height: 700,
            width: 470,
            borderTopLeftRadius: 150,
            borderTopEndRadius: 150,
            paddingTop: 100,
            marginTop: 90,
            alignItems: "center",
          }}
        >
          <Text style={{ fontSize: 40, color: blueBtn, fontWeight: "bold" }}>
            Welcome Back
          </Text>
          <Text style={{ color: "grey", fontSize: 15, fontWeight: "bold" }}>
            Login To Your Account
          </Text>
          <Field
            placeholder="Enter Your Email"
            style={{ marginTop: 20 }}
            keyboardType={"email-address"}
          />
          <Field placeholder="Enter Your Password" secureTextEntry={true} />
          <View
            style={{
              alignItems: "flex-end",
              paddingRight: 50,
              width: "80%",
              marginTop: 5,
            }}
          >
            <Text style={{ fontWeight: "bold", color: blueBtn, fontSize: 15 }}>
              Forget Password ?
            </Text>
          </View>
          <Btn
            btnLabel="Submit"
            bgColor={blueBtn}
            textColor="white"
            Press={navigatetoDashBoard}
            style={{ marginTop: 30 }}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: "grey",
                fontSize: 15,
                fontWeight: "bold",
                marginTop: 5,
              }}
            >
              Don't Have an Account ?
            </Text>
            <TouchableOpacity onPress={handleSignUpPress}>
              <Text
                style={{
                  fontWeight: "bold",
                  color: blueBtn,
                  fontSize: 15,
                  marginTop: 5,
                  marginLeft: 5,
                }}
              >
                Signup
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Login;
