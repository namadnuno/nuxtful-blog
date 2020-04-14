require('dotenv').config({
  path: '.env'
});
const { getCategories } = require('../categories.js');

describe('categories', () => {
  test('can get all categories stored on contentful', done => {
    getCategories().then(({ categories }) => {
      expect(categories).toBeInstanceOf(Array);
      expect(categories[0]).toHaveProperty('fields');
      expect(categories[0].fields).toHaveProperty('name');
      expect(categories[0].fields).toHaveProperty('slug');
      expect(categories[0].fields).toHaveProperty('description');
      done();
    });
  });
});
