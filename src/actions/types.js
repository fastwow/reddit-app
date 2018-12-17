import {asyncActionNames} from './utils/asyncUtils';

export const FETCH_POSTS = asyncActionNames('fetch_posts');
export const FETCH_MORE_POSTS = asyncActionNames('fetch_more_posts');
export const FETCH_REFRESHED_POSTS = asyncActionNames('fetch_refreshed_posts');

export const FILTER_POSTS = 'filter_posts';

export const ADD_TO_FAVORITE = 'add_to_favorite';
export const REMOVE_FROM_FAVORITE = 'remove_from_favorite';
