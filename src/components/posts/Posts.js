import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import PostCart from './item/PostCart';
import styles from '../../containers/topposts/styles';

const Posts = ({
  isLoading, isRefreshing, posts, refreshPosts, onClick, fetchMore, shouldApplyFilter,
}) => {

  return isLoading && !posts.length ? <ProgressBar/> : <FlatList
    onRefresh={refreshPosts}
    refreshing={isRefreshing}
    data={posts}
    renderItem={({item}) => <PostCart item={item} viewItem={item => onClick(item)}/>}
    keyExtractor={item => item.id}
    onEndReached={fetchMore}
    onEndReachedThreshold={0.5}
    ListFooterComponent={() => !shouldApplyFilter && fetchMore ? <ProgressBar/> : null}
    ListEmptyComponent={() => <Text style={styles.emptyMessageStyle}>{shouldApplyFilter ? 'No matching posts found' :
      'No posts yet'}</Text>}/>;
};

Posts.propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.array.isRequired,
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
  shouldApplyFilter: false,
};

export default Posts;
