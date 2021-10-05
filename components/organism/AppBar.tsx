import { FontAwesome, MaterialIcons } from '@expo/vector-icons'
import {
  HStack,
  IconButton,
  Icon,
  Text,
  Box,
  StatusBar,
  useTheme,
  Input,
} from 'native-base'
import React from 'react'

export default () => {
  const { colors } = useTheme()
  return (
    <HStack
      bg={colors.primary[900]}
      px="1"
      py="1"
      justifyContent="space-between"
      alignItems="center"
    >
      <HStack alignItems="center">
        <IconButton
          icon={
            <Icon size="sm" as={<FontAwesome name="gear" />} color="white" />
          }
        />
        <Text color="white" fontSize="20" fontWeight="bold">
          Home
        </Text>
      </HStack>
      <HStack alignItems="center">
        <Input
          placeholder="検索"
          variant="filled"
          width="100%"
          bg={colors.primary[100]}
          borderRadius="5"
          py="1"
          px="2"
          placeholderTextColor="gray.500"
          borderWidth="0"
          InputLeftElement={
            <Icon
              ml="2"
              size="5"
              color="gray.500"
              as={<FontAwesome name="search" />}
            />
          }
        />
      </HStack>
    </HStack>
  )
}
