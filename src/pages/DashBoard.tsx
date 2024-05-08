import React, { useState } from "react";
import { Alert, Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { bgColor, blueBtn } from "../Constants";
import CustomView from "../View/CustomView";
import DisplayText from "../Inputs/DisplayText";
import Btn from "../Buttons/Btn";
import Checkbox from "../Inputs/Checkbox";
import { useNavigation } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../RootStackParams";
import dp from "../../assets/Default_img.jpg";
const DashBoard: React.FC = () => {
  const navigation =
    useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  const registerData = useSelector((state: any) => state.registerData);

  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };
  const navigateToUpdate = () => {
    if (isChecked) {
      navigation.navigate("UpdateUser");
    } else {
      Alert.alert("Kindly agree to T&C");
    }
  };
  return (
    <View
      style={{
        backgroundColor: bgColor,
        height: "100%",
      }}
    >
      <View
        style={{
          marginVertical: 15,
          position: "absolute",
          marginHorizontal: 20,
        }}
      >
        <View>
          <Text style={{ fontWeight: "bold", fontSize: 20 }}>
            Your profile details
          </Text>
        </View>
      </View>
      <CustomView
        backgroundColor="white"
        borderRadius={10}
        height={350}
        widthPercentage={0.9}
        marginVertical={50}
      >
        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <View style={{ flex: 8, marginLeft: 10 }}>
            <DisplayText label="Name" value={registerData.name} />
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              <DisplayText
                label="Mobile Number"
                value={registerData.mobileNumber}
              />
              <DisplayText
                label="Gender"
                value={registerData.selectedGender}
                style={{ marginRight: 20 }}
              />
            </View>
          </View>
          <View style={{ flex: 4 }}>
            <Image
              source={dp}
              style={{ width: 90, height: 90, borderRadius: 10 }}
            />
          </View>
        </View>

        <View style={{ marginBottom: 10, marginLeft: 10 }}>
          <DisplayText label="Address" value={registerData.address} />
          <DisplayText label="City" value={registerData.city} />
          <DisplayText label="District" value={registerData.district} />
          <Text style={{ fontWeight: "bold", fontSize: 20, color: "grey" }}>
            ABHA Number :
          </Text>
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {registerData.ABHA}
          </Text>
        </View>
      </CustomView>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingTop: 0,
        }}
      >
        <View
          style={{ flexDirection: "row", alignItems: "center", padding: 20 }}
        >
          <Checkbox checked={isChecked} onChange={handleCheckboxChange} />
          <Text
            style={{
              color: "grey",
              fontWeight: "bold",
              fontSize: 12,
              marginTop: 15,
              marginLeft: 2,
              marginBottom: 5,
            }}
          >
            I agree to share my identity information with NHA to create my ABHA
            address.
          </Text>
        </View>
        <Btn
          btnLabel="Update Details"
          textColor="white"
          bgColor={blueBtn}
          Press={navigateToUpdate}
          style={{ justifyContent: "center", alignItems: "center" }}
        />
      </View>
    </View>
  );
};

export default DashBoard;
