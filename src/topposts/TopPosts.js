import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {SafeAreaView} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import Posts from '../shared/components/posts/Posts';
import {viewPost} from '../navigation';
import styles from './styles';
import * as postsActions from './topPostsActions';
import * as filterActions from '../filter/filterActions';
import Filter from '../filter/Filter';
import applyFilter from '../filter/filterProcessor';
import {componentTestId} from '../../e2e/helpers';

// Use named export for unconnected component (for tests)
export class TopPosts extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.fetchPosts();
  }

  fetchPosts = () => this.props.actions.fetchPosts();

  render() {
    return (
      <SafeAreaView style={styles.rootContainer}>
        <Filter {...this.props} onChangeText={this.onChangeText}/>
        <Posts
          {...this.props}
          onClick={this.onClick}
          refreshPosts={this.refreshPosts}
          fetchMore={this.fetchMore}
          testID={componentTestId.TOP_POSTS}/>
      </SafeAreaView>
    );
  }

  onChangeText = text => this.props.actions.filter(text);

  fetchMore = () => {
    if (!this.props.isLoading && !this.props.isRefreshing && !this.props.shouldApplyFilter) {
      this.props.actions.fetchMorePosts(this.props.after);
    }
    return null;
  };

  refreshPosts = () => {
    if (!this.props.shouldApplyFilter) {
      return this.props.actions.fetchRefreshedPosts();
    }
    return null;
  };

  onClick = item => {
    viewPost(this.props.componentId, item);
  };
}

TopPosts.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  isRefreshing: PropTypes.bool,
  error: PropTypes.string,
  filter: PropTypes.object.isRequired,
  shouldApplyFilter: PropTypes.bool,
  posts: PropTypes.array,
  after: PropTypes.string,
  componentId: PropTypes.string,
};

const mapStateToProps = ({posts, filter}) => {
  const shouldApplyFilter = filter.searchTerm.length > 2;
  return {
    filter,
    shouldApplyFilter,
    posts: shouldApplyFilter ? applyFilter(posts.posts, filter) : posts.posts,
    isLoading: posts.isLoading,
    isRefreshing: posts.isRefreshing,
    error: posts.error,
    after: posts.after,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, postsActions, filterActions), dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPosts);
