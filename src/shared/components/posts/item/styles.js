import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  listItem: {
    flex: 1,
    flexDirection: 'row',
    borderBottomWidth: 1,
    borderBottomColor: '#d6d7da',
    padding: 6,
  },
  imageContainer: {
    padding: 5,
  },
  image: {
    width: 70,
    height: 70,
  },
  titleContainer: {
    flex: 1,
  },
  title: {
    fontSize: 20,
    textAlign: 'left',
    margin: 6,
  },
});

export default styles;
