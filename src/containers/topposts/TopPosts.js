import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Text, TextInput, View} from 'react-native';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {Navigation} from 'react-native-navigation';
import Posts from '../../components/posts/Posts';
import ProgressBar from '../../components/common/ProgressBar';
import {viewPost} from '../../navigation';
import styles from './styles';
import * as postsActions from '../../actions/PostsActions';
import * as filterActions from '../../actions/FilterActions';

class TopPosts extends Component {

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
    return (
      <View style={styles.listContainer}>
        <TextInput
          selectionColor="#ffffff" style={styles.search}
          placeholder="Search"
          value={this.props.searchTerm}
          onChangeText={this.onChangeText}/>
        <Posts
          {...this.props}
          onClick={this.onClick}
          refreshPosts={this.refreshPosts}
          fetchMore={this.fetchMore}
          renderEmptyMessage={this.renderEmptyMessage}
          renderFooter={this.renderFooter}/>
      </View>
    );
  }

  onChangeText = text => {
    this.props.actions.filter(text);
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

  onClick = item => viewPost(this.props.componentId, item);

  renderEmptySearchResultListMessage = () => {
    return <Text style={styles.emptyMessageStyle}>No matching posts found</Text>;
  };

  renderEmptyPostListMessage = () => {
    return <Text style={styles.emptyMessageStyle}>No posts yet</Text>;
  };
}

TopPosts.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  isRefreshing: PropTypes.bool,
  searchTerm: PropTypes.string,
  posts: PropTypes.array,
  navigator: PropTypes.object,
  after: PropTypes.string,
  componentId: PropTypes.string,
};

const mapStateToProps = ({posts, filter}) => {
  return {
    searchTerm: filter.searchTerm,
    posts: applySearchTerm(posts.posts, filter.searchTerm),
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
    actions: bindActionCreators(Object.assign({}, postsActions, filterActions), dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TopPosts);
