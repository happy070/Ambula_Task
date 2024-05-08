import React, { useState, useEffect } from "react";
import Background from "../Background";
import CustomView from "../View/CustomView";
import Field from "../Inputs/Field";
import Btn from "../Buttons/Btn";
import { blueBtn } from "../Constants";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { View, StyleSheet, Image, Text, Alert, Dimensions } from "react-native";
import RadioButton from "../Inputs/RadioButton";
import { useDispatch, useSelector } from "react-redux";
import { updateRegisterData } from "../Redux-State/registerDataSlice";
import { RootStackParamList } from "../RootStackParams";

interface RegisterData {
  name: string;
  selectedGender: string | null;
  mobileNumber: string;
  address: string;
  city: string;
  district: string;
  ABHA: string;
}

const Signup: React.FC = () => {
  const dispatch = useDispatch();
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();
  const register = useSelector((state: any) => state.registerData);
  const navigatetoDashBoard = () => {
    navigation.navigate("DashBoard");
  };

  // State object to store all input field values
  const [registerData, setRegisterData] = useState<RegisterData>({
    name: "",
    selectedGender: null,
    mobileNumber: "",
    address: "",
    city: "",
    district: "",
    ABHA: "",
  });

  const handleSelectGender = (gender: string) => {
    setRegisterData((prevData) => ({
      ...prevData,
      selectedGender: gender === prevData.selectedGender ? null : gender,
    }));
  };

  const handleRegister = () => {
    const { ABHA, ...restData } = registerData;
    if (
      Object.values(restData).some(
        (value) => value?.trim() === "" || value === null
      )
    ) {
      Alert.alert(
        "Incomplete Form",
        "Kindly fill out all fields before registering."
      );
    } else {
      // Generate a 14-digit random number
      const randomABHA = Math.floor(
        10000000000000 + Math.random() * 90000000000000
      );

      // Update the registerData state with the generated random number
      setRegisterData((prevData) => ({
        ...prevData,
        ABHA: String(randomABHA),
      }));

      // Dispatch the updated registerData
      dispatch(
        updateRegisterData({ ...registerData, ABHA: String(randomABHA) })
      );
      navigatetoDashBoard();
    }
  };

  useEffect(() => {
    console.log("Register Data after dispatch", register);
  }, [register]);

  return (
    <Background>
      <CustomView
        widthPercentage={0.9}
        backgroundColor="white"
        borderRadius={15}
        marginVertical={10}
        justifyContent="center"
        alignItems="center"
        height={630}
      >
        <Image
          source={require("../../assets/Ambula-Logo.png")}
          style={{
            width: "50%",
            resizeMode: "contain",
            position: "absolute",
            top: -25,
          }}
        />
        <Text style={{ fontSize: 16, fontWeight: "bold", marginBottom: 10 }}>
          Kindly Register to join us
        </Text>
        <Field
          placeholder="Enter Your Name"
          style={{ width: "80%" }}
          value={registerData.name}
          onChangeText={(value) =>
            setRegisterData((prevData) => ({
              ...prevData,
              name: value,
            }))
          }
        />
        <RadioButton
          selectedValue={registerData.selectedGender}
          onSelect={handleSelectGender}
          Label="Gender:"
          label1="Male"
          label2="Female"
        />
        <Field
          placeholder="Mobile Number"
          style={{ width: "80%" }}
          value={registerData.mobileNumber}
          onChangeText={(value) =>
            setRegisterData((prevData) => ({
              ...prevData,
              mobileNumber: value,
            }))
          }
          keyboardType="numeric"
        />
        <Field
          placeholder="Address"
          style={{ width: "80%" }}
          value={registerData.address}
          onChangeText={(value) =>
            setRegisterData((prevData) => ({
              ...prevData,
              address: value,
            }))
          }
        />
        <Field
          placeholder="City"
          style={{ width: "80%" }}
          value={registerData.city}
          onChangeText={(value) =>
            setRegisterData((prevData) => ({
              ...prevData,
              city: value,
            }))
          }
        />
        <Field
          placeholder="District"
          style={{ width: "80%" }}
          value={registerData.district}
          onChangeText={(value) =>
            setRegisterData((prevData) => ({
              ...prevData,
              district: value,
            }))
          }
        />

        <View>
          <Btn
            bgColor={blueBtn}
            btnLabel="Register"
            textColor="white"
            Press={handleRegister}
          />
        </View>
      </CustomView>
    </Background>
  );
};

const styles = StyleSheet.create({});

export default Signup;
