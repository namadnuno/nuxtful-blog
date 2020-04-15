import { documentToHtmlString } from '@contentful/rich-text-html-renderer';
import client from './client';

export function getPosts() {
  return client
    .getEntries({
      content_type: 'post',
      order: '-sys.createdAt'
    })
    .then(entries => ({
      posts: entries.items
    }));
}

export function getPostBySlug(slug) {
  return client
    .getEntries({
      content_type: 'post',
      'fields.slug': slug,
      order: '-sys.createdAt'
    })
    .then(async entries => {
      const post = entries.items[0];
      post.fields.content = documentToHtmlString(post.fields.content);
      return {
        post
      };
    });
}

export function getPostOfCategory(categorySlug) {
  return client
    .getEntries({
      content_type: 'post',
      'fields.category.sys.contentType.sys.id': 'postCategory',
      'fields.category.fields.slug': categorySlug,
      order: '-sys.createdAt'
    })
    .then(async entries => {
      return {
        posts: entries.items
      };
    });
}
