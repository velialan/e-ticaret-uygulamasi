import React from 'react'
import { View, Text, FlatList, ActivityIndicator } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { GETSubCategory } from '../../actions/category';
import Box from '../../Components/box';
import CategoryCard from '../../Components/CategoryCard';

export default function CategoryScreen({ navigation, route }) {

  const dispatch = useDispatch();
  React.useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      dispatch(GETSubCategory({ parent_id: route?.params?.category_id }))
    });

    return unsubscribe;
  }, [navigation]);

  const category = useSelector(state => state.category.subCategory);

  const isGetSubCategoryFetching = useSelector(state => state.category.isGetSubCategoryFetching);

  const renderFooter = () => {
    if (!isGetSubCategoryFetching) return null;
    return (
      <View style={{
        paddingVertical: 20
      }}>
        <ActivityIndicator size="small" color="red" />
      </View>
    )
  }
  return (
    <Box bg="#F9F9F9" flex={1} px={10}>
      <FlatList
        ListHeaderComponent={renderFooter}
        data={category}
        renderItem={CategoryCard}
        keyExtractor={item => item.id}
      />
    </Box>

  )
}
