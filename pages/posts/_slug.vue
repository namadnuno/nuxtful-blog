<template>
  <div>
    <div v-if="loadingCurrent">loading...</div>
    <div v-else class="post-item">
      <img :src="post.fields.image.fields.file.url" />
      <nuxt-link :to="'posts/' + post.fields.slug">
        <h2 class="title">{{ post.fields.title }}</h2>
      </nuxt-link>
      <p v-html="post.fields.description"></p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";

export default {
  asyncData({ store, route }) {
    return store.dispatch({ type: "posts/loadPost", slug: route.params.slug });
  },
  computed: {
    ...mapGetters({
      post: "posts/currentPost",
      loadingCurrent: "posts/loadingCurrentPost"
    })
  }
};
</script>
