import React, { useEffect, useState } from "react";
import { View, Text } from "react-native";
import Info from "../../../components/Home/Info";
import ListUserConnect from "../../../components/Home/ListUserConnect";
import AddChild from "../../../components/Home/AddChild";
const HomeParent = (props) => {
  const [location, setLocation] = useState(null);
  useEffect(() => {
    global.socket.on("server-send-location-of-child", function (data) {
      setLocation(data);
      console.log('vị trí server gửi', data);
    });
  });
  const moveChild = () => {
    props.navigation.navigate("ChildScreen", { location });
  };
  return (
    <View>
      <Info />
      <ListUserConnect moveChild={moveChild} />
      <AddChild />
    </View>
  );
};

export default HomeParent;
