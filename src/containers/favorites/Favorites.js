import React, {Component} from 'react';
import {Navigation} from 'react-native-navigation';
import {viewPost} from '../../navigation';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import Posts from '../../components/posts/Posts';
import styles from '../topposts/styles';

class Favorites extends Component {

  constructor(props) {
    super(props);
    Navigation.events().bindComponent(this);
  }

  render() {
    return (
      <Posts
        style={styles.rootContainer}
        {...this.props}
        onClick={this.onClick}
      />
    );
  }

  onClick = item => viewPost(this.props.componentId, item);
}

Favorites.propTypes = {
  posts: PropTypes.array,
  navigator: PropTypes.object,
  componentId: PropTypes.string,
};

const mapStateToProps = ({favorites}) => {
  return {
    posts: favorites.posts,
  };
};

export default connect(mapStateToProps)(Favorites);
