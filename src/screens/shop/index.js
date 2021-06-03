import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '../../Components/box'
import Text from '../../Components/text'
import { GETCart } from '../../actions/cart'
import { ScrollView, FlatList } from 'react-native';
import ProductCart from '../../Components/productcart';
import TextInput from '../../Components/textinput'
import Button from '../../Components/button';
import { ArrowRight } from '../../Components/icons';
export default function Shop() {
    const dispatch = useDispatch();
    const id_token = useSelector(state => state.auth.id_token);
    const data = useSelector(state => state.cart.carts);
    const [promo, setpromo] = React.useState('')
    React.useEffect(() => {
        dispatch(GETCart({ token: id_token }));

    }, [data.items])

    return (
        <Box flex={1} bg="Background" px={15}>

            <Text mt={50} fontWeight="bold" fontSize={30} color="black" fontFamily="rokkitt_bold">Sepetim</Text>

            <FlatList
                showsVerticalScrollIndicator={false}
                data={data.items}
                renderItem={({ item, index }) => <ProductCart onpress={() => { }} key={index.toString()} data={item} />}
                keyExtractor={item => item.id}
            />


                <Box my={1}>

                    <TextInput

                        borderWidth={1}
                        borderColor="#f0f0f0"
                        fontSize={14}
                        bg="white"
                        pl={10}
                        pr={50}
                        py={8}
                        fontFamily="rokkitt_regular"
                        color="#14467b"
                        borderTopLeftRadius={10}
                        borderBottomLeftRadius={10}
                        borderTopRightRadius={30}
                        borderBottomRightRadius={30}
                        placeholder="İndirim kodu"
                        value={promo}
                        onChangeText={setpromo}
                    />

                    <Box position="absolute" bottom={0} right={0}>
                        <Button bg="#252a34" borderRadius="full" size={45} justifyContent="center" alignItems="center">
                            <ArrowRight height={22} stroke="#fff" />
                        </Button>
                    </Box>
                </Box>


                <Box flexDirection="row" alignItems="flex-end" justifyContent="space-between">
                    <Text>Toplam</Text>
                    <Text>{data.formated_sub_total}</Text>
                </Box>
                <Button onPress={() => { }} my={10} style={{ elevation: 2 }} justifyContent="center" alignItems="center" borderRadius={25} bg="Primary" >
                    <Text fontFamily="rokkitt_regular" color="White" fontSize={18} py={14} >Tamamla</Text>

                </Button>
            </Box>
    )
}
