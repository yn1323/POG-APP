import { LinkingOptions } from '@react-navigation/native'
import * as Linking from 'expo-linking'
import { RootStackParamList } from '.'

const linking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.makeUrl('/')],
  config: {
    screens: {
      Top: 'top',
      Config: 'config',
    },
  },
}

export default linking
