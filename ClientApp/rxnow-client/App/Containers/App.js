import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createStackNavigator } from 'react-navigation';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import AppReducer from './Redux/Reducers/';
import NavigationService from './Navigation/';
import SignIn from './Signing';
import Home from './Home';
import Profile from './Profile';
import PCPInformation from './Health/pcpInformation';
import HealthIssues from './Health/healthIssues';

const middlewares = [thunk]; //,  

const store = createStore(AppReducer, composeWithDevTools(applyMiddleware(...middlewares)));
const AppNavigator = createStackNavigator({
  SignIn: { screen: SignIn },
  Home: { screen: Home },
  Profile: { screen: Profile },
  PCPInformation: { screen: PCPInformation },
  HealthIssues: { screen: HealthIssues },

},
  {
    initialRouteName: 'Home',
    headerMode: 'none',
    mode: 'modal',
  }
);

export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppNavigator 
          ref={navigatorRef => {
            NavigationService.setTopLevelNavigator(navigatorRef);
          }}
        />
        </Provider>
      );
  }
}

