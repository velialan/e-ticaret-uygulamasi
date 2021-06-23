import React from 'react'
import Box from './box'
import Button from './button'
import Text from './text'
import Pressable from './pressable'
import FastImage from 'react-native-fast-image'
import { Trash } from './icons'
import { useSelector } from 'react-redux'
export default function ProductCart({ data, onpressDelete }) {


    return (

        <Box width="100%" flexDirection="row" style={{ elevation: 2 }} height={104} my={5} bg="White" borderRadius={8}>

            <Box>
                <FastImage
                    style={{ height: 104, width: 104, borderBottomLeftRadius: 5, borderTopLeftRadius: 5 }}
                    source={{
                        uri: data.product.base_image.large_image_url,
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.cover}

                />

            </Box>
            <Box justifyContent="center" flex={1} p={8}>
                <Box flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Text numberOfLines={2} fontSize={16} style={{ fontStyle: 'italic', fontWeight: 'bold' }} fontFamily="rokkitt_regular"  >{data?.name}</Text>
                    <Button onPress={() => onpressDelete(data.id)}>
                        <Trash height={16} stroke="#000" />
                    </Button>
                </Box>
                <Text fontSize={11} style={{ lineHeight: 13 }} fontFamily="rokkitt_regular"  >Color: Black</Text>
                <Box flex={1} flexDirection="row" alignItems="center" justifyContent="space-between">
                    <Box flexDirection="row"  >
                        <Button size={36} borderRadius="full" bg="White" justifyContent="center" alignItems="center" style={{ elevation: 2 }}>
                            <Text>+</Text>
                        </Button>
                        <Box p={5} justifyContent="center" alignItems="center">
                            <Text fontSize={14} style={{ fontStyle: 'italic', fontWeight: 'bold', lineHeight: 20 }} fontFamily="rokkitt_regular">{data?.quantity}</Text>
                        </Box>
                        <Button size={36} borderRadius="full" bg="White" justifyContent="center" alignItems="center" style={{ elevation: 2 }}>
                            <Text >-</Text>
                        </Button>
                    </Box>
                    <Text fontSize={14} style={{ fontStyle: 'italic', fontWeight: 'bold', lineHeight: 20 }} fontFamily="rokkitt_regular">{data?.formated_price}</Text>
                </Box>

            </Box>

        </Box>

    )
}
