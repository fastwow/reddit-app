import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import {Image, Text, View, TouchableOpacity} from 'react-native';
import styles from './styles';

class PostCart extends PureComponent {

  render() {
    const {item, viewItem} = this.props;
    return (<TouchableOpacity style={styles.listItem} onPress={() => viewItem(item)}>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={{
            uri: item.thumbnail ? item.thumbnail : 'https://ipsumimage.appspot.com/70x70',
          }}
        />
      </View>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>
          {item.title}
        </Text>
      </View>
    </TouchableOpacity>
    );
  }
}

PostCart.propTypes = {
  item: PropTypes.object.isRequired,
  viewItem: PropTypes.func.isRequired,
};

export default PostCart;
