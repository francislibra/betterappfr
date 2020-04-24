// import { createAppContainer, createSwitchNavigator } from 'react-navigation';

// import Main from '~/pages/Main';

// const Routes = createAppContainer(createSwitchNavigator({ Main }));

// export default Routes;

import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Login from '~/pages/Login';
import Main from '~/pages/Main';

const Stack = createStackNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerStyle: {
            backgroundColor: '#fff',
          },
          headerTintColor: '#1074b6',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Home" component={Main} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
