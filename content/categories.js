import client from './client';

export function getCategories() {
  return client
    .getEntries({
      content_type: 'postCategory'
    })
    .then(entries => ({
      categories: entries.items
    }));
}

export function getCategoryBySlug(slug) {
  return client
    .getEntries({
      content_type: 'postCategory',
      'fields.slug': slug
    })
    .then(entries => {
      return {
        category: entries.items[0]
      };
    });
}
