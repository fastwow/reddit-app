import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import PostCart from './item/PostCart';
import styles from '../../containers/topposts/styles';
import Toast from 'react-native-simple-toast';

const Posts = ({
  isLoading, isRefreshing, posts, errorMessage, refreshPosts, onClick, fetchMore, shouldApplyFilter,
}) => {

  if (errorMessage) {
    Toast.show(errorMessage);
  }

  const isEmptyList = !posts.length;

  return isLoading && isEmptyList ? <ProgressBar/> : <FlatList
    onRefresh={refreshPosts}
    refreshing={isRefreshing}
    data={posts}
    renderItem={({item}) => <PostCart item={item} viewItem={item => onClick(item)}/>}
    keyExtractor={item => item.id}
    onEndReached={fetchMore}
    onEndReachedThreshold={0.5}
    ListFooterComponent={() => !shouldApplyFilter && fetchMore && !isEmptyList ? <ProgressBar/> : null}
    ListEmptyComponent={() => <Text style={styles.emptyMessageStyle}>{errorMessage && isEmptyList ? errorMessage :
      shouldApplyFilter ? 'No matching posts found' : 'No posts yet'}</Text>}/>;
};

Posts.propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.array.isRequired,
  errorMessage: PropTypes.string,
  isRefreshing: PropTypes.bool,
  refreshPosts: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  fetchMore: PropTypes.func,
  shouldApplyFilter: PropTypes.bool,
};

Posts.defaultProps = {
  isLoading: false,
  isRefreshing: false,
  refreshPosts: null,
  fetchMore: null,
  errorMessage: null,
  shouldApplyFilter: false,
};

export default Posts;
