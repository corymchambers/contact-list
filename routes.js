import { createStackNavigator } from '@react-navigation/stack';
import React from 'react';

import Contacts from './screens/Contacts';
import Profile from './screens/Profile';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Contacts" component={Contacts} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}
