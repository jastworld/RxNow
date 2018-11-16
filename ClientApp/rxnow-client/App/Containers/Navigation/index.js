
//import Router from '../Navigation/AppNavigation';
import { NavigationActions } from 'react-navigation';


let AppNavigator;

function setTopLevelNavigator(navigatorRef) {
  AppNavigator = navigatorRef;
}

function navigate(routeName, params) {
  AppNavigator.dispatch(
    NavigationActions.navigate({
      routeName,
      params,
    })
  );
}
// add other navigation functions that you need and export them

export default {
  navigate,
  setTopLevelNavigator,
};

