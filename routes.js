import { createStackNavigator } from '@react-navigation/stack'
import React from 'react'

import Contacts from './screens/Contacts'
import Profile from './screens/Profile'
import Favorites from './screens/Favorites'

const Stack = createStackNavigator()

export default function AppNavigator() {
  return (
    <Stack.Navigator
    initialRouteName='Favorites'
      screenOptions={{
        headerStyle: {
          backgroundColor: 'blue'
        }
      }}
    >
      <Stack.Screen
          name='Contacts'
          component={Contacts}
          options={{title: 'Contacts!!!'}, Contacts.navigationOptions}
        />
      <Stack.Screen
        name='Profile'
        component={Profile}
        options={({route}) => ({
          title: route.params.contact.name,
          headerTintColor: 'green',
          headerStyle: {
            backgroundColor: 'tomato'
          }
        })}
      />
      <Stack.Screen
        name='Favorites'
        component={Favorites}
      />
    </Stack.Navigator>
  )
}
