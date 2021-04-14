import styled from 'styled-components'
import { Image } from 'react-native';
import { compose, color, size, flexbox, space,  zIndex,background,borderRadius } from 'styled-system'

const Photo = styled(Image)(
    compose(
        space,
        color,
        size,
        flexbox,
        zIndex,
        background,
        borderRadius
    ),
);
//default proplar ekleyebiliyoruz örneğin tüm boxlarda borderRadius değeri 5 yapmak gibi
// Box.defaultProps = {
//     p: 2,
//     bg: 'white',
//   }

export default Photo