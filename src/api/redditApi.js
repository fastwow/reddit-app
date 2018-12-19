import axios from 'axios';
import {TOP_POSTS} from '../constants/endpoints';

const DEFAULT_COUNT = 25;

export function fetchTopPosts(after) {
  return axios.get(`${TOP_POSTS}?count=${DEFAULT_COUNT}&after=${after}`)
    .then(res => res.data.data);
}
