import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

class PostCart extends Component {

  constructor(props) {
    super(props);
    this.info = this.props.info;
    this.viewItem = this.props.viewItem.bind(this, this.info);
  }

  render() {
    return (<TouchableOpacity style={styles.listItem} onPress={this.viewItem}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.image}
            source={{
              uri: this.info.thumbnail ? this.info.thumbnail : 'https://ipsumimage.appspot.com/70x70',
            }}
          />
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>
            {this.info.title}
          </Text>
        </View>
      </TouchableOpacity>
    );
  }
}

PostCart.propTypes = {
  info: PropTypes.object.isRequired,
  viewItem: PropTypes.func.isRequired,
};

export default PostCart;
