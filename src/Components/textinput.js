import { TextInput } from 'react-native'
import styled from 'styled-components'
import {
  compose,
  color,
  size,
  typography,
  space,
  shadow,
  borderRadius,
  zIndex,  
} from 'styled-system'

import theme from '../utils/theme'

const Input = styled(TextInput).attrs(props => ({
  placeholderTextColor: theme.colors[props.placeholderTextColor] || '#252a34'
}))(
  compose(
    borderRadius,
    typography,
    space,
    color,
    size,
    shadow,
    zIndex
  )
)

export default Input