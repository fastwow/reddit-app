import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {WebView} from 'react-native';
import {Navigation} from 'react-native-navigation';
import styles from './styles';

class PostPage extends PureComponent {

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
}

PostPage.propTypes = {
  post: PropTypes.shape({url: PropTypes.string}).isRequired,
  componentId: PropTypes.string,
};

export default PostPage;
