import React, { useEffect, useState, useRef } from "react";
import { Alert, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { bgColor, blueBtn } from "../Constants";
import CustomView from "../View/CustomView";
import InputBox from "./InputBox";
import Btn from "../Buttons/Btn";
import { TextInput } from "react-native";

const OtpVerify: React.FC = () => {
  const registerData = useSelector((state: any) => state.registerData);

  const inputRefs = useRef<Array<TextInput | null>>(
    Array.from({ length: 6 }, () => null)
  );

  const handleFocusNext = (index: number) => {
    const nextIndex = index + 1;
    if (nextIndex < inputRefs.current.length && inputRefs.current[nextIndex]) {
      inputRefs.current[nextIndex]?.focus();
    }
  };

  const inputBoxes = Array.from({ length: 6 }, (_, index) => (
    <InputBox
      key={index}
      maxLength={1}
      width={40}
      height={30}
      ref={(ref) => (inputRefs.current[index] = ref)}
      focusNext={() => handleFocusNext(index)}
    />
  ));

  const [countdown, setCountdown] = useState(60);

  useEffect(() => {
    const timer = setInterval(() => {
      if (countdown > 0) {
        setCountdown(countdown - 1);
      }
    }, 1000);

    // Clear the interval when component unmounts
    return () => clearInterval(timer);
  }, [countdown]);

  // Format the countdown time to display in MM:SS format
  const formattedTime = `${Math.floor(countdown / 60)
    .toString()
    .padStart(2, "0")}:${(countdown % 60).toString().padStart(2, "0")}`;

  return (
    <View style={{ backgroundColor: bgColor, flex: 1 }}>
      <Text
        style={{
          fontWeight: "500",
          color: "grey",
          marginTop: 10,
          marginLeft: 10,
          fontSize: 15,
        }}
      >
        We have sent a 6 digit OTP to {registerData.mobileNumber}
      </Text>
      <View style={{ justifyContent: "center", alignItems: "center" }}>
        <Image
          source={require("../../assets/OTP-img.png")}
          style={{ width: 200, height: 200, resizeMode: "contain" }}
        />
      </View>
      <CustomView
        backgroundColor="white"
        borderRadius={20}
        height={160}
        marginVertical={40}
        widthPercentage={0.9}
        alignItems="center"
        justifyContent="center"
      >
        <View
          style={{
            alignItems: "flex-start",
            width: "100%",
          }}
        >
          <Text
            style={{
              marginTop: 10,
              marginLeft: 20,
              fontSize: 15,
              fontWeight: "500",
              color: "grey",
            }}
          >
            Enter OTP
          </Text>
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {inputBoxes}
        </View>
        <View
          style={{ justifyContent: "center", alignItems: "center", flex: 1 }}
        >
          <Btn
            bgColor={blueBtn}
            btnLabel="Verify and continue"
            textColor="white"
            Press={() => Alert.alert("Details Updated Successfully")}
            fontSize={20}
          />
        </View>
      </CustomView>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          marginTop: -30,
        }}
      >
        <Text
          style={{
            fontSize: 15,
            fontWeight: "500",
            color: "grey",
          }}
        >
          Didn't receive OTP ?
        </Text>
        <Text
          style={{ color: blueBtn }}
        >{`Resend OTP (${formattedTime})`}</Text>
      </View>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "row",
        }}
      >
        <View
          style={{
            flexDirection: "row",
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 150,
          }}
        >
          <Image
            source={require("../../assets/NHA-logo.png")}
            style={{
              width: 80,
              height: 80,
              resizeMode: "contain",
              marginRight: 10,
            }}
          />
          <Image
            source={require("../../assets/ABHA-Logo.png")}
            style={{ width: 50, height: 50, resizeMode: "contain" }}
          />
        </View>
      </View>
    </View>
  );
};

export default OtpVerify;
