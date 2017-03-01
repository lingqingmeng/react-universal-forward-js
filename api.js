const uuidV4 = require('uuid/v4');

const articles = {
  1: { id: 1, title: 'Hello', body: 'Just test', date: new Date(), authorId: 7 },
  2: { id: 2, title: 'Hello 1', body: 'Just test', date: new Date(), authorId: 7 },
  3: { id: 3, title: 'Hello 2', body: 'Just test', date: new Date(), authorId: 7 },
  4: { id: 4, title: 'Hello 3', body: 'Just test', date: new Date(), authorId: 7 },
};

const authors = {
  7: { id: 7, name: "Jordan Walke" },
  8: { id: 7, name: "Jordan Walke" },
  9: { id: 7, name: "Jordan Walke" },
};

const data = {
  articles,
  authors,
};

export const getArticles = () => {
  // no body...
  const _articles = {};

  Object.values(articles).map(article => {
    _articles[article.id] = { id: article.id, title: article.title };
  });

  return Promise.resolve(_articles);
};

export const getArticleInfo = (articleId) => {
  const article = articles[articleId];
  article.author = authors[article.authorId];
  return Promise.resolve(article);
};

export const addArticle = (newArticleInfo) => {
  // title, body
  newArticleInfo.id = uuidV4();

  articles[newArticleInfo.id] = newArticleInfo;

  return new Promise(function(resolve, reject) {
    setTimeout(() => { resolve(newArticleInfo) }, 5000);
  });
};

export default data;
