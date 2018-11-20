import React, { Component } from 'react';
import { Platform, BackHandler, View, ActivityIndicator } from 'react-native';
import { Constants, Location, Permissions, MapView } from 'expo';
import styles from './styles';

export default class App extends Component {
  state = {
    location: null,
    errorMessage: null,
    markers : [
      {
        latlng : {
          latitude: 40.86142930423505,
          longitude: -73.06191606769005,
        },
        title: 'Tayo',
        description: 'Home',
      }
    ]
  };

  componentWillMount() {
    if (Platform.OS === 'android' && !Constants.isDevice) {
      this.setState({
        errorMessage: 'Oops, this will not work on Sketch in an Android emulator. Try it on your device!',
      });
    } else {
      this._getLocationAsync();
    }
    
      const that = this;
      BackHandler.addEventListener('hardwareBackPress', () => {
          that.props.navigation.navigate('Profile');
          return true;
      });
  }

  _getLocationAsync = async () => {
    let { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== 'granted') {
      this.setState({
        errorMessage: 'Permission to access location was denied',
      });
    }

    let location = await Location.getCurrentPositionAsync({});
    this.setState({ location });
  };

  render() {
    let text = 'Waiting..';
    //console.log(this.state.location ? this.state.location.coords.latitude : '123...');
    if (this.state.errorMessage) {
      text = this.state.errorMessage;
    } else if (this.state.location) {
      text = JSON.stringify(this.state.location);
    }

    return (
      (

        !this.state.location ?
          <View style={styles.container}>
            <ActivityIndicator size="large" color="#0000ff" />
          </View>
          :
          <MapView
            style= {{ flex: 1 }}
            provider= {MapView.PROVIDER_GOOGLE}
            initialRegion={{
              latitude: this.state.location ? this.state.location.coords.latitude : 37.78825,
              longitude: this.state.location ? this.state.location.coords.longitude : -122.4324,
              latitudeDelta: 0.0022,
              longitudeDelta: 0.0021,
            }}
          >
            {this.state.markers.map((marker,i) => (
              <MapView.Marker
                coordinate={marker.latlng}
                title={marker.title}
                description={marker.description}
                key={i}
              />
            ))}
          </MapView>

      )

    );
  }
}
