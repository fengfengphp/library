'use strict';

/**
 * @param {Egg.Application} app - egg application
 */
module.exports = app => {
  const { router, controller } = app;
  router.redirect('/','/user', 302);
  router.get('/user','home.user');
  router.get('/search','home.search');
  router.post('/userPost', 'home.userPost');
};
