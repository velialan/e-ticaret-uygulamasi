import React from 'react'
import Box from './box'
import Text from './text'
import Button from './button'
import Pressable from './pressable'

import FastImage from 'react-native-fast-image'
import { Heart } from './icons'

export default function Product({ data, onpress }) {

    const [loading, setloading] = React.useState(false)
    const start = () => {

        setloading(false);
    }
    const finish = () => {
        setloading(true);
    }
    return (

        <Box width={170} height={280} m={5} borderRadius={10}>

            <Pressable flex={1} onPress={onpress} >
                <Box>
                    <FastImage
                        style={{ height: 190, width: '100%', borderRadius: 5 }}
                        source={{
                            uri: data?.base_image?.original_image_url,
                            headers: { Authorization: 'someAuthToken' },
                            priority: FastImage.priority.normal,
                        }}
                        resizeMode={FastImage.resizeMode.cover}
                        onLoadStart={start}
                        onLoadEnd={finish}
                    />
                    <Button zIndex={10} style={{elevation:2}} justifyContent="center" alignItems="center" size={50} borderRadius="full" position="absolute" bottom={-25} right={-1} bg={data?.is_wishlisted ? "Primary" : "White"}>

                        <Heart height={25} width={25} stroke={data?.is_wishlisted ? "#fff" : "#9B9B9B"} />

                    </Button>
                </Box>

                <Text fontFamily="rokkitt_regular"  >{data?.name}</Text>

                <Text fontSize={20} style={{ fontStyle: 'italic', fontWeight: 'bold' }} fontFamily="rokkitt_bold"  >{data?.name}</Text>
                <Box flexDirection="row">
                    <Text p={2} style={{ textDecorationLine: 'line-through', }} fontFamily="rokkitt_regular">{data?.formated_price}₺</Text>
                    <Text p={2} fontFamily="rokkitt_bold">{data?.formated_price}₺</Text>
                </Box>
            </Pressable>
        </Box>

    )
}
