require('dotenv').config({
  path: '.env'
});
const { getCategories, getCategoryBySlug } = require('../categories.js');

describe('categories', () => {
  test('can get all categories stored on contentful', done => {
    getCategories().then(({ categories }) => {
      expect(categories).toBeInstanceOf(Object);
      expect(categories[0]).toHaveProperty('fields');
      expect(categories[0].fields).toHaveProperty('name');
      expect(categories[0].fields).toHaveProperty('slug');
      expect(categories[0].fields).toHaveProperty('description');
      done();
    });
  });
  test('can get category stored on contentful by slug', done => {
    getCategoryBySlug('animals').then(({ category }) => {
      expect(category).toBeInstanceOf(Object);
      expect(category).toHaveProperty('fields');
      expect(category.fields).toHaveProperty('name');
      expect(category.fields).toHaveProperty('slug');
      expect(category.fields).toHaveProperty('description');
      done();
    });
  });
});
