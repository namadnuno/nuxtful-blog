import client from "./client";
import { documentToHtmlString } from "@contentful/rich-text-html-renderer";

export function getPosts() {
  return client
    .getEntries({
      content_type: "post"
    })
    .then(entries => {
      return {
        posts: entries.items
      };
    });
}

export function getPostBySlug(slug) {
  return client
    .getEntries({
      content_type: "post",
      "fields.slug": slug
    })
    .then(async entries => {
      let post = entries.items[0];
      post.fields.content = documentToHtmlString(post.fields.content);
      return {
        post
      };
    });
}
