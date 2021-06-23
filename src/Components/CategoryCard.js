import React from 'react'
import FastImage from 'react-native-fast-image'
import Box from './box'
import Text from './text'

export default function CategoryCard({ item }) {
  return (
    <Box flex={1} style={{ elevation: 2 }}
      borderRadius={4} my={4} bg="white" height={110} color="white" alignItems="center" flexDirection="space-evenly" flexDirection="row">
      <Text style={{ width: '50%', fontFamily: 'ABeeZee-Regular' }} pl={10}>{item.name}</Text>
      <FastImage
        style={{ height: 110, width: '50%', borderTopRightRadius: 6, borderBottomRightRadius: 6 }}
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
