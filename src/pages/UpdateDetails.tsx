import React, { useState, useRef, forwardRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import InputBox from "./InputBox";
import CustomView from "../View/CustomView";
import Btn from "../Buttons/Btn";
import { bgColor, blueBtn } from "../Constants";

const UpdateDetails: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const [selectedMethod, setSelectedMethod] = useState("");

  const navigateToOTP = () => {
    navigation.navigate("VerifyOTP");
  };

  const inputRefs = useRef<Array<TextInput | null>>([null, null, null, null]);

  const focusNextInput = (index: number) => {
    const nextIndex = index + 1;
    if (nextIndex < inputRefs.current.length && inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  return (
    <View style={{ flex: 1, backgroundColor: bgColor }}>
      <View style={{ justifyContent: "flex-start", alignItems: "flex-start" }}>
        <Text
          style={{
            fontSize: 14,
            fontWeight: "bold",
            marginTop: 10,
            marginLeft: 15,
          }}
        >
          You're about to create a new ABHA address using
        </Text>
        <View
          style={{
            flexDirection: "row",
            alignItems: "flex-start",
            marginTop: 10,
            marginLeft: 15,
          }}
        >
          <Image
            source={require("../../assets/ABHA-Logo.png")}
            style={{
              width: 30,
              height: 30,
              resizeMode: "contain",
              margin: 5,
            }}
          />
          <Text
            style={{
              color: blueBtn,
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 10,
            }}
          >
            ABHA Number
          </Text>
        </View>
        <CustomView
          backgroundColor="white"
          borderRadius={10}
          height={160}
          marginVertical={40}
          widthPercentage={0.9}
          alignItems="center"
          justifyContent="center"
        >
          <View style={{ marginBottom: 20, marginLeft: 5 }}>
            <Text
              style={{
                fontWeight: "bold",
                fontSize: 15,
                color: "grey",
              }}
            >
              Enter ABHA number below
            </Text>
            <Text style={{ fontWeight: "500", fontSize: 12 }}>
              We will send a 6 digit OTP to the mobile number linked to your
              ABHA
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: 15,
            }}
          >
            <InputBox
              ref={(ref) => (inputRefs.current[0] = ref)}
              maxLength={2}
              width={60}
              height={50}
              focusNext={() => focusNextInput(0)}
            />
            <InputBox
              ref={(ref) => (inputRefs.current[1] = ref)}
              maxLength={4}
              width={60}
              height={50}
              focusNext={() => focusNextInput(1)}
            />
            <InputBox
              ref={(ref) => (inputRefs.current[2] = ref)}
              maxLength={4}
              width={60}
              height={50}
              focusNext={() => focusNextInput(2)}
            />
            <InputBox
              ref={(ref) => (inputRefs.current[3] = ref)}
              maxLength={4}
              width={60}
              height={50}
              focusNext={() => focusNextInput(3)}
            />
          </View>
        </CustomView>
      </View>
      <View style={{ alignItems: "flex-end", marginRight: 25, marginTop: -25 }}>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            color: blueBtn,
          }}
        >
          Forgotten ABHA Number ?
        </Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            justifyContent: "flex-start",
            alignItems: "flex-start",
            width: "100%",
            marginLeft: 40,
          }}
        >
          <Text
            style={{
              color: "grey",
              fontWeight: "500",
            }}
          >
            Choose an OTP method
          </Text>
        </View>
        <CustomView
          backgroundColor={bgColor}
          borderRadius={25}
          height={50}
          marginVertical={10}
          widthPercentage={0.9}
          justifyContent="center"
          style={{ borderWidth: 2, borderColor: "grey", flexDirection: "row" }}
        >
          <TouchableOpacity
            style={[
              styles.methodButton,
              {
                backgroundColor:
                  selectedMethod === "Aadhaar" ? "grey" : bgColor,
                borderTopLeftRadius: 25,
                borderBottomLeftRadius: 25,
              },
            ]}
            onPress={() => setSelectedMethod("Aadhaar")}
          >
            <Text style={styles.methodButtonText}>Aadhaar</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
              styles.methodButton,
              {
                backgroundColor: selectedMethod === "Mobile" ? "grey" : bgColor,
                borderTopRightRadius: 25,
                borderBottomRightRadius: 25,
              },
            ]}
            onPress={() => setSelectedMethod("Mobile")}
          >
            <Text style={styles.methodButtonText}>Mobile</Text>
          </TouchableOpacity>
        </CustomView>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          marginTop: 100,
        }}
      >
        <Btn
          bgColor={blueBtn}
          btnLabel="Continue"
          textColor="white"
          Press={navigateToOTP}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  methodButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  methodButtonText: {
    fontWeight: "bold",
  },
});

export default UpdateDetails;
