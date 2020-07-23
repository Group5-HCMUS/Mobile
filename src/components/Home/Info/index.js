import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Avatar } from "react-native-elements";
import childAvatar from "../../../../assets/images/child.png";
import parentAvatar from "../../../../assets/images/parent.png";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import { DistanceScale, Colors, Typography } from "../../../global/styles";

const Info = () => {
  const authContext = useContext(AuthenticationContext);
  const isParent = authContext.state.userInfo.parent ? true : false;
  return (
    <View style={styles.container}>
      <View style={styles.avatar}>
        <Avatar
          rounded={true}
          size="large"
          source={isParent === true ? parentAvatar : childAvatar}
        />
      </View>
      <Text style={styles.fullName}>
        {authContext.state.userInfo.full_name}
      </Text>
      {isParent === false ? (
        <View style={styles.codeContainer}>
          <Text style={styles.txtYourCode}>Your code: </Text>
          <Text style={styles.txtCode}>{authContext.state.userInfo.child.id}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default Info;
const styles = StyleSheet.create({
  container: {
    padding: DistanceScale.spacing_8,
    marginTop: DistanceScale.spacing_20,
    justifyContent: "center",
    alignItems: "center",
  },
  avatar: {
    marginVertical: DistanceScale.spacing_10,
  },
  fullName: {
    color: Colors.black,
    fontSize: Typography.fontSize20,
    fontWeight: Typography.fontWeightBold,
  },
  codeContainer:{
    marginTop: DistanceScale.spacing_20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: '40%',
    backgroundColor: Colors.yellow,
    borderRadius: 5,
  },
  txtYourCode: {
      fontSize: Typography.fontSize16,
  },
  txtCode: {
      fontSize: Typography.fontSize20,
      fontWeight: Typography.fontWeightBold,
      color: Colors.black,
  }
});
