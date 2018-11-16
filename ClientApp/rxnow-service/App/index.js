import React, { Component } from 'react';
//import { Provider } from 'react-redux';
//import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation';
//import thunk from 'redux-thunk';
//import { composeWithDevTools } from 'redux-devtools-extension';
import NavigationService from './Navigation/';
import SignIn from './SignIn';
import Home from './Home';
import Maps from './Maps';
import Settings from './Settings';
import config from './../config'
const PUSH_ENDPOINT  = config.api+'/storepushtoken';
//import AppReducer from './Redux/Reducers/';
import { Permissions, Notifications } from 'expo';

//const middlewares = [thunk]; //,  

//const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(...middlewares)));
const AppNavigator = createStackNavigator({
  SignIn: { screen: SignIn },
  Home: { screen: Home },
  Maps: { screen: Maps },
  Settings: { screen: Settings},
},
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal',
  }
);

export default class App extends Component {
  registerForPushNotificationsAsync = async () => {
    const { status: existingStatus } = await Permissions.getAsync(
      Permissions.NOTIFICATIONS
    );
    let finalStatus = existingStatus;

    // only ask if permissions have not already been determined, because
    // iOS won't necessarily prompt the user a second time.
    if (existingStatus !== 'granted') {
      // Android remote notification permissions are granted during the app
      // install, so this will only ask on iOS
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      finalStatus = status;
    }

    // Stop here if the user did not grant permissions
    if (finalStatus !== 'granted') {
      return;
    }

    // Get the token that uniquely identifies this device
    let token = await Notifications.getExpoPushTokenAsync();
    console.log(token);
    return fetch(PUSH_ENDPOINT, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        token : token,
        //user
        
      }),
    });

  }
  componentDidMount() {
    this.registerForPushNotificationsAsync();
  };
  render() {
    return (
      <AppNavigator
        ref={navigatorRef => {
          NavigationService.setTopLevelNavigator(navigatorRef);
        }}
      />
    );
  }
}

