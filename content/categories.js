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
