<template>
  <div class="container">
    <div v-if="loadingCurrent">loading...</div>
    <section v-else class="section">
      <h2 class="center title">{{ post.fields.title }}</h2>
      <div class="columns is-centered">
        <div class="column is-8">
          <img :src="post.fields.image.fields.file.url" />
        </div>
      </div>
      <p v-html="post.fields.content"></p>
    </section>
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
