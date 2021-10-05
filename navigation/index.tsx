import { NavigationContainer, DarkTheme } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { FC } from 'react'
import Config from '@/screen/Config'
import Top from '@/screen/Top'

type MainStackParamList = {
  Top: undefined
  Config: undefined
}
const Main = createNativeStackNavigator<MainStackParamList>()

const Navigation: FC = () => (
  <NavigationContainer theme={DarkTheme}>
    <Main.Navigator>
      <Main.Screen name="Top" component={Top} />
      <Main.Screen name="Config" component={Config} />
    </Main.Navigator>
  </NavigationContainer>
)
export default Navigation
