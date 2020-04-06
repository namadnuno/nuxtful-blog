import client from "./client";

export function getPosts() {
  return client.getEntries({
    content_type: 'post'
  }).then(entries => {
    return {
      posts: entries.items
    }
  })
}

export function getPostBySlug(slug) {
  return client.getEntries({
    content_type: 'post',
    "fields.slug": slug,
  }).then(entries => {
    return {
      post: entries.items[0]
    }
  })
}
