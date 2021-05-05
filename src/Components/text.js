import styled from 'styled-components'
import {Text as T} from 'react-native';
import {compose, color, size, space,typography,position } from 'styled-system'

const Text = styled(T)(
    compose(
        typography,
        space,
        color,
        size,
        position
               
    ),
);
 

export default Text