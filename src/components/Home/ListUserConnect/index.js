import React, { useContext, useEffect, useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Avatar, Card, ListItem } from "react-native-elements";
import childAvatar from "../../../../assets/images/child.png";
import parentAvatar from "../../../../assets/images/parent.png";
import { AuthenticationContext } from "../../../providers/authentication-provider";
import { DistanceScale, Colors, Typography } from "../../../global/styles";
import Separator from "../../Separator";
import { getListChild } from "../../../actions/user-action";
import { apiGetListChild } from "../../../core/services/user-service";

const users = [
  {
    fullName: "Nguyen Van A",
  },
  {
    fullName: "Nguyen Van B",
  },
  {
    fullName: "Nguyen Van C",
  },
];

const ListUserConnect = (props) => {
  const authContext = useContext(AuthenticationContext);
  const isParent = authContext.state.userInfo.parent ? true : false;
  const [listChild, setListChild] = useState([]);
  const getData = async () => {
    await apiGetListChild(authContext.state.access_token).then((res) => {
        setListChild(res.data);
      });
  }
  useEffect(() =>  {
     getData()
  }, []);
  const renderListUser = () => {
    if (listChild === undefined) {
      return null;
    }
    return listChild.map((u, i) => {
      return (
        <TouchableOpacity key={i} onPress={props.moveChild}>
          <ListItem
            roundAvatar
            title={u.user.full_name}
            leftAvatar={{ source: childAvatar }}
          />
          <Separator />
        </TouchableOpacity>
      );
    });
  };
  return (
    <View style={styles.container}>
      <Card
        containerStyle={styles.card}
        title={isParent === true ? "Your children" : "Your parent"}
      >
        {renderListUser()}
      </Card>
    </View>
  );
};

export default ListUserConnect;
const styles = StyleSheet.create({
  container: {
    marginTop: DistanceScale.spacing_20,
    justifyContent: "center",
    alignItems: "center",
  },
  card: {
    width: "80%",
  },
});
