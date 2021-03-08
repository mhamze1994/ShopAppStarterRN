import React from 'react';
import ScreenMain from './src/ScreenMain';
import ScreenProductDetails from './src/ScreenProductDetails';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {I18nManager} from 'react-native';
import RepoHome from './src/repository/RepoHome';
import {ApiResponseListener} from './src/network/ApiClient';

export const SCREEN_MAIN = 'Main';
export const SCREEN_PRODUCT_DETAILS = 'ProductDetails';

const Stack = createStackNavigator();

export default class App extends React.Component {
  constructor(props) {
    super(props);
    I18nManager.forceRTL(true);
    //RepoHome.getInstance().fetchData(new ApiResponseListener(){});
  }

  render() {
    return (
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name={SCREEN_MAIN}
            component={ScreenMain}
            options={{
              headerShown: false,
            }}
          />
          <Stack.Screen
            name={SCREEN_PRODUCT_DETAILS}
            component={ScreenProductDetails}
            options={{
              headerShown: false,
            }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    );
  }
}
