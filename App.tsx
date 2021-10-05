import { NativeBaseProvider } from 'native-base'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { RecoilRoot } from 'recoil'
import useCachedResources from './hooks/useCachedResources'
import Navigation from '@/navigation/index'

export default () => {
  const isLoadingComplete = useCachedResources()

  if (!isLoadingComplete) {
    return null
  } else {
    return (
      <RecoilRoot>
        <NativeBaseProvider>
          <SafeAreaProvider>
            <Navigation />
          </SafeAreaProvider>
        </NativeBaseProvider>
      </RecoilRoot>
    )
  }
}
