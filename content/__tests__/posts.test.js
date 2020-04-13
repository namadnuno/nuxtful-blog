require('dotenv').config({
  path: '.env'
});
const { getPosts } = require('../posts.js');

describe('posts', () => {
  console.log('here');

  test('can get all posts stored on contentful', done => {
    getPosts().then(({ posts }) => {
      expect(posts).toBeInstanceOf(Array);
      expect(posts[0]).toHaveProperty('fields');
      expect(posts[0].fields).toHaveProperty('title');
      expect(posts[0].fields).toHaveProperty('content');
      expect(posts[0].fields).toHaveProperty('image');
      done();
    });
  });
});
