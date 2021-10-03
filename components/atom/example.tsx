import { Entypo } from '@expo/vector-icons'
import { IconButton, Icon, Center, NativeBaseProvider } from 'native-base'
import React from 'react'
export const Example = () => {
  return (
    <IconButton
      icon={<Icon as={Entypo} name="emoji-sad" />}
      borderRadius="full"
      _icon={{
        color: 'orange.500',
        size: 'md',
      }}
      _hover={{
        bg: 'orange.600:alpha.20',
      }}
      _pressed={{
        bg: 'orange.600:alpha.20',
        _icon: {
          name: 'emoji-flirt',
        },
      }}
      _ios={{
        _icon: {
          size: '2xl',
        },
      }}
    />
  )
}
