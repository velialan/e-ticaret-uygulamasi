import styled from 'styled-components'
import { View, } from 'react-native';
import { compose, color, size, flexbox, space, borderRadius, position,layout } from 'styled-system'

const Box = styled(View)(
    compose(
        space,
        color,
        size,
        flexbox,
        borderRadius,        
        position,
        layout   
        
    ),
);
//default proplar ekleyebiliyoruz örneğin tüm boxlarda borderRadius değeri 5 yapmak gibi
// Box.defaultProps = {
//     p: 2,
//     bg: 'white',
//   }

export default Box