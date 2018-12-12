import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {WebView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';
import connect from 'react-redux/es/connect/connect';
import {bindActionCreators} from 'redux';
import {addToFavorite} from '../../actions/favoriteActions';

class PostPage extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  static get options() {
    return {
      topBar: {
        rightButtons: [{
          id: 'favoriteBtn',
          text: 'Favorite',
        }],
      },
    };
  }

  render() {
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
        this.props.actions.addToFavorite(this.props.post);
      } else {
        this.props.actions.removeFromFavorite(this.props.post);
      }
    }
  }
}

PostPage.propTypes = {
  post: PropTypes.shape({url: PropTypes.string}).isRequired,
  actions: PropTypes.object.isRequired,
  isFavorite: PropTypes.bool.isRequired,
  componentId: PropTypes.string,
};

const mapStateToProps = ({favorites}) => {
  return {
    isFavorite: favorites.posts.filter(item => this.props.post.id === item.id).length > 0,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(addToFavorite, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostPage);
