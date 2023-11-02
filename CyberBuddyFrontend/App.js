import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import AppNavigator from './src/Screens/AppNavigator'
import registerNNPushToken from 'native-notify'

export default function App ()  {
  registerNNPushToken(14292, 'iEb8whWvC1FqlFsHI9KqYV');

  return (
    <AppNavigator/>
  )
}

