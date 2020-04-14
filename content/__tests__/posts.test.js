require('dotenv').config({
  path: '.env'
});
const { getPosts, getPostBySlug } = require('../posts.js');

describe('posts', () => {
  test('can get all posts stored on contentful', done => {
    getPosts().then(({ posts }) => {
      expect(posts).toBeInstanceOf(Array);
      expect(posts[0]).toHaveProperty('fields');
      expect(posts[0].fields).toHaveProperty('title');
      expect(posts[0].fields).toHaveProperty('content');
      expect(posts[0].fields).toHaveProperty('image');
      expect(posts[0].fields).toHaveProperty('category');
      done();
    });
  });

  test('it can get a post by slug', done => {
    getPostBySlug('post-sample').then(({ post }) => {
      console.log(post);
      expect(post).toBeInstanceOf(Object);
      expect(post).toHaveProperty('fields');
      expect(post.fields).toHaveProperty('title');
      expect(post.fields).toHaveProperty('content');
      expect(post.fields).toHaveProperty('image');
      expect(post.fields).toHaveProperty('category');
      done();
    });
  });
});
