import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import linking from './linking'
import Config from '@/screen/Config'
import Top from '@/screen/Top'

export type RootStackParamList = {
  Top: undefined
  Config: undefined
}
const Root = createNativeStackNavigator<RootStackParamList>()

const Navigation: FC = () => (
  <NavigationContainer theme={DarkTheme} linking={linking}>
    <Root.Navigator>
      <Root.Screen name="Top" component={Top} />
      <Root.Screen name="Config" component={Config} />
    </Root.Navigator>
  </NavigationContainer>
)
export default Navigation
