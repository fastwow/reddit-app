import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import Posts from '../../components/posts/Posts';
import {viewPost} from '../../navigation';
import styles from './styles';
import * as postsActions from '../../actions/postsActions';
import * as filterActions from '../../actions/filterActions';
import Filter from '../../components/posts/filter/Filter';

class TopPosts extends Component {

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
      <View style={styles.rootContainer}>
        <Filter {...this.props} onChangeText={this.onChangeText}/>
        <Posts
          {...this.props}
          onClick={this.onClick}
          refreshPosts={this.refreshPosts}
          fetchMore={this.fetchMore}/>
      </View>
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
  }
}

TopPosts.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  isRefreshing: PropTypes.bool,
  errorMessage: PropTypes.string,
  filter: PropTypes.object.isRequired,
  shouldApplyFilter: PropTypes.bool,
  posts: PropTypes.array,
  navigator: PropTypes.object,
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
    errorMessage: posts.errorMessage,
    after: posts.after,
  };
};

const applyFilter = (posts, filter) => {
  const lowerCaseSearchTerm = filter.searchTerm.toLowerCase();
  return posts.filter(item => {
    return item.title.toLowerCase().includes(lowerCaseSearchTerm);
  });
};


const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(Object.assign({}, postsActions, filterActions), dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPosts);
