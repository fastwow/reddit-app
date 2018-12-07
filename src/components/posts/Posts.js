import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {FlatList, Text, TextInput, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import * as postsActions from '../../actions/PostsActions';
import ProgressBar from '../common/ProgressBar';
import styles from './styles';
import {Navigation} from 'react-native-navigation';
import PostCart from './item/PostCart';
import {viewPost} from '../../navigation';

class Posts extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => {
    this.props.actions.fetchPosts();
  };

  render() {

    if (this.props.isLoading && !this.props.posts.length) {
      return <ProgressBar/>;
    }

    return (<View style={styles.listContainer}>
        <TextInput
          selectionColor="#ffffff" style={styles.search}
          placeholder="Search"
          value={this.props.searchTerm}
          onChangeText={this.onChangeText}/>
        <FlatList
          onRefresh={this.refreshPosts}
          refreshing={this.props.isRefreshing}
          data={this.props.posts}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
          onEndReached={this.fetchMore}
          onEndReachedThreshold={0.5}
          ListFooterComponent={this.renderFooter}
          ListEmptyComponent={this.renderEmptyMessage}
        />
      </View>
    );
  }

  onChangeText = text => {
    this.props.actions.search(text);
  };

  renderItem = ({item}) => {
    return (<PostCart info={item} viewItem={item => viewPost(this.props.componentId, item)}/>);
  };

  keyExtractor = item => {
    return item.id;
  };

  fetchMore = () => {
    if (!this.props.isLoading && !this.props.isRefreshing && !this.props.searchTerm) {
      this.props.actions.fetchMorePosts(this.props.after);
    }
  };

  refreshPosts = () => {
    if (!this.props.searchTerm) {
      this.props.actions.fetchRefreshedPosts();
    }
  };

  renderFooter = () => {
    if (!this.props.searchTerm) {
      return <ProgressBar/>;
    }
    return null;
  };

  renderEmptyMessage = () => {
    if (this.props.searchTerm) {
      return this.renderEmptySearchResultListMessage();
    } else {
      return this.renderEmptyPostListMessage();
    }
  };

  renderEmptySearchResultListMessage = () => {
    return <Text style={styles.emptyMessageStyle}>No matching posts found</Text>;
  };

  renderEmptyPostListMessage = () => {
    return <Text style={styles.emptyMessageStyle}>No posts yet</Text>;
  };
}

Posts.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  isRefreshing: PropTypes.bool,
  searchTerm: PropTypes.string,
  posts: PropTypes.array,
  navigator: PropTypes.object,
  after: PropTypes.string,
  componentId: PropTypes.string,
};

const mapStateToProps = ({posts}) => {
  return {
    searchTerm: posts.searchTerm,
    posts: applySearchTerm(posts.posts, posts.searchTerm),
    isLoading: posts.isLoading,
    isRefreshing: posts.isRefreshing,
    after: posts.after,
  };
};

const applySearchTerm = (posts, searchTerm) => {
  if (searchTerm.length > 2) {
    const lowerCaseSearchTerm = searchTerm.toLowerCase();
    return posts.filter(item => {
      return item.title.toLowerCase().includes(lowerCaseSearchTerm);
    });
  }
  return posts;
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(postsActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Posts);
