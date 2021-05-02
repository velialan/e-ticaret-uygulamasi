import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser, GETUser, } from '../../actions/action'
import { GETProduct } from '../../actions/product/action'
import { GETSlider } from '../../actions/slider/action'
import Box from '../../Components/box'
import Image from '../../Components/image'
import Text from '../../Components/text'
import TextInput from '../../Components/textinput'
import Product from '../../Components/product'
import { Search } from '../../Components/icons';
import { FlatList, Button, ActivityIndicator, useWindowDimensions, SafeAreaView, ScrollView } from 'react-native';
import { FlatListSlider } from 'react-native-flatlist-slider';

export default function Home() {

    React.useEffect(() => {
        dispatch(GETProduct())
        dispatch(GETSlider())
    }, [])

    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const dispatch = useDispatch();
    const fullName = useSelector(state => state.auth.name);
    const products = useSelector(state => state.product.products);
    const sliders = useSelector(state => state.slider.sliders);

    const isProductFetching = useSelector(state => state.product.isProductFetching);

    const isSliderFetching = useSelector(state => state.slider.isSliderFetching);



    const header = () => {
        return (
            <Box my={1}  >
                <TextInput
                    style={{
                        elevation: 10,
                    }}
                    bg="white"
                    placeholder="Search Your Product"
                    pl={52}

                />
                <Box position="absolute" style={{ elevation: 10 }} height={52} pl={16} justifyContent="center" alignItems="center">
                    <Search width={25} height={25} stroke="#818181" />
                </Box>
            </Box>
        )
    }

    return (
        <Box flex={1} bg="#fff" >
            {isSliderFetching ?
                <Box justifyContent="center" height={windowHeight * .30} bg="#252a34">
                    <ActivityIndicator size="large" color="red" />
                </Box> : (

                    <FlatListSlider
                        data={sliders}
                        imageKey={'image_url'}
                        height={windowHeight * .30}
                        width={windowWidth}
                        timer={5000}
                        onPress={item => alert(JSON.stringify(item))}
                        indicatorContainerStyle={{ position: 'absolute', bottom: 20 }}
                        indicatorActiveColor={'#8e44ad'}
                        indicatorInActiveColor={'#ffffff'}
                        indicatorActiveWidth={30}
                        animation
                    />
                )}

            {isProductFetching ? <ActivityIndicator size="large" color="red" /> : (
                <FlatList
                style={{height:200}}
                    horizontal={true}
                    data={products}
                    renderItem={({ item, index }) => <Product  key={index.toString()} image={item.base_image.original_image_url} price={item.formated_price} title={item.name} />}
                    keyExtractor={item => item.id}
                />
            )} 


            {/* <Button title="çıkış yap" onPress={() => dispatch(logoutUser())} />
            <Button title="get user" onPress={() => dispatch(GETUser())} /> */}

        </Box>
    )
}
