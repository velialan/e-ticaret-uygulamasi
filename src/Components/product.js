import React from 'react'
import Box from './box'
import Text from './text'
import Button from './button'
import FastImage from 'react-native-fast-image'

export default function Product({ image, title, price, onpress }) {

const [loading, setloading] = React.useState(false)
    const start=()=>{

        setloading(false);
    }
const finish=()=>{
        setloading(true);
    }
    return (

        <Box width={200} height={200} m={9} borderRadius={10}>
           
            <Button onPress={onpress} alignItems="center">            
                <FastImage
                    style={{ height: 150, width: '100%', borderRadius: 5 }}
                    source={{
                        uri: image, 
                        headers: { Authorization: 'someAuthToken' },
                        priority: FastImage.priority.normal,
                    }}
                    resizeMode={FastImage.resizeMode.contain}
                    onLoadStart={start}
                    onLoadEnd={finish}
                />
                <Text fontWeight="bold" >{title}</Text>
                <Text>{price}₺</Text>
            </Button>
        </Box>

    )
}
