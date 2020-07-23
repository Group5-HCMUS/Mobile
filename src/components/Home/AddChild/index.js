import React, { useContext, useState, useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  ToastAndroid
} from "react-native";
import { Avatar } from "react-native-elements";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import { DistanceScale, Colors, Typography } from "../../../global/styles";
import { addChild } from "../../../actions/user-action";
import { UserContext } from "../../../providers/user-provider";

const AddChild = () => {
  const authContext = useContext(AuthenticationContext);
  const isParent = authContext.state.userInfo.parent ? true : false;
  const userContext = useContext(UserContext);
  const [childCode, setChildCode] = useState("");
  const onAddChild = () => {
    if (childCode !== "") {
        addChild(childCode);
    }
  };
  useEffect(() => {
    if(userContext.state.messageAddChild){
        ToastAndroid.showWithGravity(userContext.state.messageAddChild, ToastAndroid.LONG, ToastAndroid.TOP);
    }
  }, [userContext.state.messageAddChild]);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={onAddChild}>
        <Text style={styles.txtAddChild}>Add Child</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.textInput}
        placeholder="Your child's code"
        onChangeText={(text) => setChildCode(text)}
      />
    </View>
  );
};

export default AddChild;
const styles = StyleSheet.create({
  container: {
    padding: DistanceScale.spacing_8,
    marginTop: DistanceScale.spacing_20,
    justifyContent: "center",
    alignItems: "center",
  },
  button: {
    padding: DistanceScale.spacing_10,
    backgroundColor: Colors.orange,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    width: "40%",
  },
  txtAddChild: {
    fontSize: Typography.fontSize16,
    fontWeight: Typography.fontWeightBold,
  },
  textInput: {
    padding: DistanceScale.spacing_8,
    marginTop: DistanceScale.spacing_20,
    fontSize: Typography.fontSize16,
    borderColor: Colors.black,
    borderWidth: 1,
    borderRadius: 5,
    width: "40%",
  },
});
