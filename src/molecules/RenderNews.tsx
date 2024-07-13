import { View, Text, Image, Pressable, FlatList, ActivityIndicator, RefreshControl } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import { MainNavigatorNewsStackProp } from '../navigation/MainNavigator.type';
import { Post } from '../assets/interfaces';
import { rendernewsStyle } from '../assets/Styles/RenderNewsStyle';

  interface PostProps{
    postData: Post[];
    loading: boolean;
    handleLoadMore: () => void;
    isListEnd: boolean;
    refreshing:boolean;
    handleRefreshData:()=>void
  }

const RenderNews = ({postData,loading,handleLoadMore,refreshing,handleRefreshData }:PostProps) => {
    const navigation = useNavigation<MainNavigatorNewsStackProp>();

    const navigateToNews = (post: Post) => {
        navigation.navigate('NewsDetail', { post });
      };

    const renderItem = ({ item }: { item: Post }) => (
        <Pressable style={rendernewsStyle.container} onPress={() => navigateToNews(item)}>
                <View style={rendernewsStyle.postsItemContainer}>
                {item.image_url && (
          <Image source={{ uri: item.image_url }} style={rendernewsStyle.postsImage} />
        )}
                    <View style={rendernewsStyle.overlay} />
                    <Text style={rendernewsStyle.datepost}>{item.pubDate}</Text>
                    <View style={rendernewsStyle.postsTextContainer}>
                        <Text style={rendernewsStyle.postTitle}>{item.title}</Text>
                    </View>
                    <View style={rendernewsStyle.clickIndicator}>
                        <Text style={rendernewsStyle.clickText}>&gt;</Text>
                    </View>
                </View>
      </Pressable>
      );

  return (
    <View style={rendernewsStyle.outerContainer}>
            <FlatList
                data={postData}
                renderItem={renderItem}
                keyExtractor={(item, index) => `${item.id}-${index}`}
                onEndReached={handleLoadMore} 
                onEndReachedThreshold={0.1} 
                ListFooterComponent={() => (loading ? <ActivityIndicator size="large" color="#0000ff" /> : null)} 
                refreshControl={
                    <RefreshControl
                      refreshing={refreshing} 
                      onRefresh={handleRefreshData} 
                      colors={['#0000ff']} 
                    />
                  }
        />
        </View>
  )
}

export default RenderNews

