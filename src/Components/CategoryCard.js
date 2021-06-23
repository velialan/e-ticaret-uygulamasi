import React from 'react'
import FastImage from 'react-native-fast-image'
import Box from './box'
import Text from './text'

export default function CategoryCard({ item }) {
  return (
    <Box flex={1} style={{ elevation: 2 }}
      borderRadius={10} my={2} bg="white" height={100} color="white" alignItems="center" flexDirection="space-evenly" flexDirection="row">
      <Text style={{ width: '50%', fontFamily: 'ABeeZee-Regular' }} pl={10}>{item.name}</Text>
      <FastImage
        style={{ height: 100, width: '50%', borderTopRightRadius: 10, borderBottomRightRadius: 10 }}
        source={{
          uri: item?.image_url,
          headers: { Authorization: 'someAuthToken' },
          priority: FastImage.priority.normal,
        }}
        resizeMode={FastImage.resizeMode.cover}
      />

    </Box>
  )
}
