import React from 'react'
import Box from './box'
import Text from './text'
import Pressable from './pressable'
import FastImage from 'react-native-fast-image'
import FavoriButton from '../Components/favoriButton'

export default function Product({ data, onpress }) {

    const [loading, setloading] = React.useState(false)
    const start = () => {

        setloading(false);
    }
    const finish = () => {
        setloading(true);
    }
    return (

        <Box width={140} height={240} m={5} borderRadius={10}>

            <Pressable flex={1} onPress={onpress} >
                <Box>
                    <FastImage
                        style={{ height: 170, width: '100%', borderRadius: 5 }}
                        source={{
                            uri: data?.base_image?.large_image_url,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                        onLoadStart={start}
                        onLoadEnd={finish}
                    />
                    <Box position="absolute" bottom={-25} right={-1}>
                        <FavoriButton onpress={() => { }} is_wishlisted={data?.is_wishlisted} />
                    </Box>
                </Box>

                <Text numberOfLines={2} fontFamily="rokkitt_regular"  >{data?.name}</Text>

                {/* <Text numberOfLines={2} fontSize={14} style={{ fontStyle: 'italic', fontWeight: 'bold' }} fontFamily="rokkitt_bold"  >{data?.name}</Text> */}
                <Box flexDirection="row">
                    <Text p={2} style={{ textDecorationLine: 'line-through', }} fontFamily="rokkitt_regular">{data?.formated_price}₺</Text>
                    <Text p={2} fontFamily="rokkitt_bold" style={{ fontWeight: 'bold' }}>{data?.formated_price}₺</Text>
                </Box>
            </Pressable>
        </Box>

    )
}
