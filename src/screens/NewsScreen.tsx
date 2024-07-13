import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../redux/Reducers/rootreducer';
import { setAccessToken } from '../redux/slices/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RenderNews from '../molecules/RenderNews';
import Config from 'react-native-config';
import {  NavStyles } from '../assets/styles';
import { Post } from '../assets/interfaces';
import { AppStyles } from '../assets/Styles/LoadingContainerAppStyle';

const API_POSTS = Config.API_POSTS || '';
const API_REFRESHTOKEN = Config.API_REFRESHTOKEN || '';

const NewsScreen = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [refreshing, setRefreshing] = useState(false);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1); 
  const [isListEnd, setIsListEnd] = useState(false);
  const accessToken = useSelector((state: RootState) => state.auth.accessToken);
  const refreshTokenn = useSelector((state: RootState) => state.auth.refreshToken);
  const dispatch = useDispatch();

const fetchData = async () => {
  setLoading(true)
  console.log('fetching with', accessToken)

  try {
    if (!accessToken) return;

    const response = await axios.get(
      `${API_POSTS}?page=${page}&pageSize=20`,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        },
      }
    );
    if (response && response.data && response.data.results) {
      setPosts(prevPosts => [...prevPosts, ...response.data.results]);
      setPage(prevPage => prevPage + 1); 
    }else {
      setIsListEnd(true); 
    }
  } catch (error) {
    if (error) {
      try {
        const refreshResponse = await axios.post(
          API_REFRESHTOKEN,
          {
            refreshToken: refreshTokenn,
          }
        );
        const newAccessToken = refreshResponse.data.accessToken;
        console.log('New Access Token:', newAccessToken);
        dispatch(setAccessToken(newAccessToken));
        await AsyncStorage.setItem('accessToken', newAccessToken);
        const refreshedResponse = await axios.get(
          `${API_POSTS}?page=${page}&pageSize=20`,
          {
            headers: {
              Authorization: `Bearer ${newAccessToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        if (refreshedResponse && refreshedResponse.data && refreshedResponse.data.results) {
          setPosts(prevPosts => [...prevPosts, ...refreshedResponse.data.results]);
          setPage(prevPage => prevPage + 1); 
        }else {
          setIsListEnd(true); 
        }
      } catch (refreshError) {
        console.error('Error refreshing token:', refreshError);
      }
    } else {
      console.error('Error fetching data:', error);
    }
  } finally {
    setLoading(false)
  }
};

  useEffect(() => {
    fetchData();
  }, []);

  const handleLoadMore = () => {
    if (!loading && !isListEnd) {
      fetchData();
    }
  };
  const handleRefresh =()=>{
  fetchData();
  }

  return (
    <View style={styles.container}>
      <Text style={NavStyles.whatsnew}>What's New?</Text>
      {posts.length > 0 ? (
      <RenderNews
      postData={posts}
      loading={loading}
      handleLoadMore={handleLoadMore}
      isListEnd={isListEnd}
      refreshing={refreshing}
      handleRefreshData={handleRefresh}
    />
      ) : (
        <View style={AppStyles.loadingContainer}>
        <ActivityIndicator size="large" color="#0000ff" />
      </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgb(19,34,51)',
    paddingHorizontal: 20,
    paddingVertical: 10,
  },
});

export default NewsScreen;
