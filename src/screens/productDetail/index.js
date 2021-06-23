import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import Box from '../../Components/box'
import Button from '../../Components/button'
import Text from '../../Components/text'
import { FlatList, ActivityIndicator, useWindowDimensions, ScrollView, Share } from 'react-native';
import { Addcart } from '../../actions/cart';
import { ADDWishlist } from '../../actions/product/action';

import FastImage from 'react-native-fast-image';
import FavoriButton from '../../Components/favoriButton';
import { Share as ShareIcon } from '../../Components/icons';
export default function ProductDetail({ navigation, route }) {
    const { product_index } = route.params;
    const windowWidth = useWindowDimensions().width;
    const windowHeight = useWindowDimensions().height;
    const dispatch = useDispatch();
    const product = useSelector(state => state.product.products[product_index]);

    const isCartFetching = useSelector(state => state.cart.isCartFetching);

    const token = useSelector(state => state.auth.id_token);

    const sepeteEkle = (id) => {
        dispatch(Addcart({ id: id, token: token }))
    }
    React.useEffect(() => {
        console.log(product)

    }, [])
    const favoriEkle = (id) => {
        dispatch(ADDWishlist({ product_id: id, token: token }))
    }
    const onShare = async () => {
        try {
            const result = await Share.share({
                message:
                    'React Native | A framework for building native apps using React',
            });
            if (result.action === Share.sharedAction) {
                if (result.activityType) {
                    // shared with activity type of result.activityType
                } else {
                    // shared
                }
            } else if (result.action === Share.dismissedAction) {
                // dismissed
            }
        } catch (error) {
            alert(error.message);
        }
    };
    React.useLayoutEffect(() => {
        navigation.setOptions({
            headerTitleStyle: { alignSelf: 'center' },
            headerTitle: product.name,
            headerRight: () => (
                <Button onPress={onShare} pr={10}>
                    <ShareIcon height={30} width={30} stroke="black" />
                </Button>

            ),
        });
    }, [navigation]);
    return (
        <Box as={ScrollView} contentContainerStyle={{ flex: 1 }} bg="#fff" >

            <Box height={windowHeight * .45}>
                <FlatList
                    pagingEnabled={true}
                    showsHorizontalScrollIndicator={false}
                    horizontal={true}
                    data={product.images}
                    renderItem={({ item, index }) => (
                        <FastImage
                            key={index}
                            style={{ height: windowHeight * .45, width: windowWidth }}
                            source={{
                                uri: item.large_image_url,
                                headers: { Authorization: 'someAuthToken' },
                                priority: FastImage.priority.normal,
                            }}
                            resizeMode={FastImage.resizeMode.cover}

                        />
                    )}
                    keyExtractor={item => item.id.toString()}
                />
            </Box>

            <Box px={10}>
                <Box flexDirection="row" justifyContent="space-between">
                    <FavoriButton onpress={() => { }} is_wishlisted={product?.is_wishlisted} />
                </Box>
                <Box>
                    <Text>{product.name}</Text>

                </Box>


            </Box>
            <Box position="absolute" overflow="hidden" bottom={0} left={0} bg="White" style={{
                shadowRadius: 2,
                shadowOffset: {
                    width: 0,
                    height: -20,
                },
                shadowColor: '#000000',
                elevation: 24,
            }} width='100%' justifyContent="center" height={100}>
                <Button disabled={isCartFetching} onPress={() => sepeteEkle(product.id)} mx={15} style={{ elevation: 1 }} justifyContent="center" alignItems="center" borderRadius={25} bg="Primary" >
                    {
                        isCartFetching ? <ActivityIndicator style={{ paddingVertical: 18 }} size="small" color="#fff" /> : <Text fontFamily="rokkitt_regular" color="White" fontSize={18} py={14} >Sepete Ekle</Text>
                    }
                </Button>
            </Box>

        </Box>
    )
}
