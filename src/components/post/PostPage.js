import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';
import {connect} from 'react-redux';
import {addToFavorite, removeFromFavorite} from '../../actions/favoriteActions';

// Use named export for unconnected component (for tests)
export class PostPage extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    Navigation.mergeOptions(this.props.componentId, {
      topBar: {
        rightButtons: [{
          id: 'favoriteBtn',
          icon: this.props.isFavorite ? require('../../../img/favorite_selected.png') :
            require('../../../img/favorite_unselected.png'),
        }],
      },
    });

    return (
      <WebView
        source={{uri: this.props.post.url}}
        style={styles.webView}
      />
    );
  }

  navigationButtonPressed({buttonId}) {
    if (buttonId === 'favoriteBtn') {
      if (this.props.isFavorite) {
        this.props.removeFromFavorite(this.props.post);
      } else {
        this.props.addToFavorite(this.props.post);
      }
    }
  }
}

PostPage.propTypes = {
  post: PropTypes.shape({url: PropTypes.string}).isRequired,
  isFavorite: PropTypes.bool.isRequired,
  componentId: PropTypes.string,
  addToFavorite: PropTypes.func.isRequired,
  removeFromFavorite: PropTypes.func.isRequired,
};

const mapStateToProps = ({favorites}, {post}) => {
  return {isFavorite: favorites.posts.filter(item => item.id === post.id).length > 0};
};

const mapDispatchToProps = dispatch => {
  return {
    addToFavorite: item => dispatch(addToFavorite(item)),
    removeFromFavorite: item => dispatch(removeFromFavorite(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
