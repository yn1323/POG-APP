import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import linking from './linking'
import Config from '@/screen/Config'
import Stub from '@/screen/Stub'
import Top from '@/screen/Top'

export type RootStackParamList = {
  Top: undefined
  Config: undefined
  Stub: undefined
}
const Root = createNativeStackNavigator<RootStackParamList>()

const Navigation: FC = () => (
  <NavigationContainer theme={DarkTheme} linking={linking}>
    <Root.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Root.Screen name="Top" component={Top} />
      <Root.Screen name="Config" component={Config} />
      <Root.Screen name="Stub" component={Stub} />
    </Root.Navigator>
  </NavigationContainer>
)
export default Navigation
