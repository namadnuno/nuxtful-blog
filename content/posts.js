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
