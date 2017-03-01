import axios from 'axios';
import config from '../util/config';

export const getArticleInfo = (articleId) => {
  return axios.get(`${config.serverUrl}/api/articles/${articleId}`)
    .then(resp => resp.data);
};

export const saveArticle = (articleInput) => {
  return axios.post(`${config.serverUrl}/api/articles`, articleInput)
    .then(resp => resp.data);
};
