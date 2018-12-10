import {AsyncStorage} from 'react-native';
import {FAVORITES} from './key';

export const fetchAll = () => {
  return AsyncStorage.getItem(FAVORITES).then(value => {
    return {data: JSON.parse(value)};
  }).catch(() => {
    return {data: {}};
  });
};

export const add = item => {
  return fetchAll().then(data => AsyncStorage.setItem(FAVORITES, JSON.stringify(data.push(item))));
};

export const remove = item => {
  return fetchAll().then(data => AsyncStorage.setItem(FAVORITES, JSON.stringify(data.splice(data.indexOf(item), 1))));
};

export const isFavorite = itemToFind => {
  return fetchAll().then(data => data.find(item => item.id === itemToFind.id));
};
