import React from 'react';
import PropTypes from 'prop-types';
import {FlatList} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import PostCart from './item/PostCart';

const Posts = ({isLoading, isRefreshing, posts, refreshPosts, onClick, fetchMore, renderFooter,
  renderEmptyMessage}) => {

  return (isLoading && !posts.length ? <ProgressBar/> : <FlatList
    onRefresh={refreshPosts}
    refreshing={isRefreshing}
    data={posts}
    renderItem={({item}) => <PostCart item={item} viewItem={item => onClick(item)}/>}
    keyExtractor={item => item.id}
    onEndReached={fetchMore}
    onEndReachedThreshold={0.5}
    ListFooterComponent={renderFooter}
    ListEmptyComponent={renderEmptyMessage}
  />);
};

Posts.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  posts: PropTypes.array.isRequired,
  isRefreshing: PropTypes.bool.isRequired,
  refreshPosts: PropTypes.func.isRequired,
  onClick: PropTypes.func.isRequired,
  fetchMore: PropTypes.func.isRequired,
  renderFooter: PropTypes.func.isRequired,
  renderEmptyMessage: PropTypes.func.isRequired,
};

export default Posts;
