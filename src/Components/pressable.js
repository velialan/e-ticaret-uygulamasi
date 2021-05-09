import styled from 'styled-components'
import {Pressable} from 'react-native';
import {compose, color,border, size, flexbox,space,borderRadius,position } from 'styled-system'

const Button = styled(Pressable)(
    compose(
        space,
        color,
        size,
        flexbox,
        borderRadius,
        border,
        position
    ),
);
 

export default Button