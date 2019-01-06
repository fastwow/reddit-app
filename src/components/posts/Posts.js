import React from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text} from 'react-native';
import ProgressBar from '../common/ProgressBar';
import PostCart from './item/PostCart';
import styles from '../../containers/topposts/styles';
import Toast from 'react-native-simple-toast';
import {createListItemId} from '../../../e2e/helpers';

const Posts = ({
  isLoading, isRefreshing, posts, error, refreshPosts, onClick, fetchMore, shouldApplyFilter, testID
}) => {

  if (error) {
    Toast.show(error);
  }

  const isEmptyList = !posts.length;

  if (isLoading && isEmptyList) {
    return <ProgressBar/>;
  }

  return (<FlatList
    testID={testID}
    onRefresh={refreshPosts}
    refreshing={isRefreshing}
    data={posts}
    renderItem={({item, index}) => {
      return <PostCart testID={createListItemId(index)} item={item} viewItem={item => onClick(item)}/>;
    }}
    keyExtractor={item => item.id}
    onEndReached={fetchMore}
    onEndReachedThreshold={0.5}
    contentContainerStyle={[{flexGrow: 1}, isEmptyList ? {justifyContent: 'center', alignItems: 'center'} : null]}
    ListFooterComponent={() => !shouldApplyFilter && fetchMore && !isEmptyList ? <ProgressBar/> : null}
    ListEmptyComponent={() => <Text style={styles.emptyMessageStyle}>{error && isEmptyList ? error :
      shouldApplyFilter ? 'No matching posts found' : 'No posts yet'}</Text>}/>);
};

Posts.propTypes = {
  isLoading: PropTypes.bool,
  posts: PropTypes.array.isRequired,
  error: PropTypes.string,
  isRefreshing: PropTypes.bool,
  refreshPosts: PropTypes.func,
  onClick: PropTypes.func.isRequired,
  fetchMore: PropTypes.func,
  shouldApplyFilter: PropTypes.bool,
  testID: PropTypes.string.isRequired
};

Posts.defaultProps = {
  isLoading: false,
  isRefreshing: false,
  refreshPosts: null,
  fetchMore: null,
  error: null,
  shouldApplyFilter: false,
};

export default Posts;
