import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, Text, View, Dimensions } from 'react-native';

export default class App extends React.Component {
  render() {
      const {location} = this.props.route.params;
    return (
        <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: location? location.latitude : 9.179425,
            longitude: location? location.longitude : 105.167256,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.1421,
          }}>
          <Marker
            draggable
            coordinate={{
              latitude: location? location.latitude : 9.179425,
              longitude: location? location.longitude : 105.167256,
            }}
            onDragEnd={(e) => alert(JSON.stringify(e.nativeEvent.coordinate))}
            title={'Nguyen Thi Child1'}
          />
        </MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'flex-end',
      },
      map: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
      },
});