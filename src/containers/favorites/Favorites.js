import React, {Component} from 'react';
import {Text} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from '../favorites/styles';
import {bindActionCreators} from 'redux';
import {viewPost} from '../../navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Posts from '../../components/posts/Posts';
import * as favoritesActions from '../../actions/FavoritesActions';

class Favorites extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  componentDidMount() {
    this.fetchFavorites();
  }

  fetchFavorites = () => this.props.actions.fetchFavorites();

  render() {
    return (
      <Posts
        {...this.props}
        onClick={this.onClick}
        renderEmptyMessage={this.renderEmptyMessage}
      />
    );
  }

  onClick = item => viewPost(this.props.componentId, item);

  renderEmptyMessage = () => <Text style={styles.emptyMessageStyle}>No favorite posts yet</Text>;
}

Favorites.propTypes = {
  actions: PropTypes.object.isRequired,
  isLoading: PropTypes.bool,
  posts: PropTypes.array,
  navigator: PropTypes.object,
  componentId: PropTypes.string,
};

const mapStateToProps = ({favorites}) => {
  return {
    posts: favorites.posts,
    isLoading: favorites.isLoading,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(favoritesActions, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Favorites);
