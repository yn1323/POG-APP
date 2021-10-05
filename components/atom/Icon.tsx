import { FontAwesome } from '@expo/vector-icons'
import React from 'react'

interface Props {
  name: React.ComponentProps<typeof FontAwesome>['name']
  color: string
}

export default (props: Props) => {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />
}
