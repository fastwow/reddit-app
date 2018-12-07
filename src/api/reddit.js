import axios from 'axios';
import {TOP} from '../constants/api';

const DEFAULT_COUNT = 25;

export function fetchTopPosts(after) {
  return axios.get(TOP + '?count=' + DEFAULT_COUNT + '&after=' + after)
    .then(res => res.data.data);
}
