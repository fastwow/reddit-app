import {TextInput} from 'react-native';
import styles from './styles';
import PropTypes from 'prop-types';
import React from 'react';

const Filter = ({filter, onChangeText}) => {

  return (
    <TextInput
      style={styles.search}
      placeholder="Search..."
      value={filter.searchTerm}
      underlineColorAndroid="transparent"
      onChangeText={onChangeText}/>
  );
};

Filter.propTypes = {
  filter: PropTypes.shape({searchTerm: PropTypes.string}).isRequired,
  onChangeText: PropTypes.func.isRequired,
};

export default Filter;
