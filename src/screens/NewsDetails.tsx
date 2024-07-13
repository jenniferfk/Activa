import { View, Text, KeyboardAvoidingView, ScrollView, Image, Pressable } from 'react-native'
import React, { PropsWithChildren } from 'react'
import { RouteProp, useNavigation } from '@react-navigation/native';
import { MainNavigatorNewsStackList } from '../navigation/MainNavigator.type';
import BackButton from '../assets/SvgIcons/BackButton';
import { windowWidth } from '../assets/styles';
import { NewsDetailsStyle } from '../assets/Styles/NewsDeatilsStyle';

type NewsDetailsScreenRouteProp = RouteProp<MainNavigatorNewsStackList, 'NewsDetail'>;

type Props = {
  route: NewsDetailsScreenRouteProp;
};

const NewsDetails = ({ route }: PropsWithChildren<Props>) => {
    const { post } = route.params;
    const navigation = useNavigation();
    return (
        <KeyboardAvoidingView style={NewsDetailsStyle.container} behavior="padding">
            <ScrollView>
              <View style={NewsDetailsStyle.container}>
                <View style={NewsDetailsStyle.imageContainer}>
                  <Image source={{ uri: post.image_url }} style={NewsDetailsStyle.image} />
                  <Pressable onPress={() => navigation.goBack()} style={NewsDetailsStyle.goBackButton}>
                    <BackButton size={windowWidth*0.1} />
                  </Pressable>
                </View>
              
                <View>
                  <Text style={NewsDetailsStyle.nametext}>{post.title} </Text>
                </View>
                
                <View style={NewsDetailsStyle.contentContainer}>
                    <Text style={NewsDetailsStyle.contentText}>{post.description}</Text>
                </View>
                <View>
                    <Text style={NewsDetailsStyle.pubdate}>{post.pubDate}</Text>
                </View>
              </View>
            </ScrollView>
        </KeyboardAvoidingView>
      );
}
export default NewsDetails

