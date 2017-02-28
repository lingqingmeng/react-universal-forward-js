import axios from 'axios';
import config from '../util/config';

export const getArticleInfo = (articleId) => {
  return axios.get(`${config.serverUrl}/api/articles/${articleId}`)
}
