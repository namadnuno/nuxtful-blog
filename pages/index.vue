<template>
  <div class="container">
    <div>
      <h2 class="subtitle">Contentful Blog Sample</h2>
      <div class="post-list">
        <post-item v-for="(post, index) in posts" :post="post" :key="'post-' + index"></post-item>
      </div>
    </div>
  </div>
</template>

<script>
//import { getPosts } from "../content/posts";
import PostItem from "../components/PostItem";
import { mapGetters } from "vuex";

export default {
  components: {
    PostItem
  },
  asyncData({ store }) {
    return store.dispatch("posts/loadPosts");
  },
  computed: {
    ...mapGetters({
      posts: "posts/posts"
    })
  }
};
</script>

<style socped lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 1024px;

  .post-list {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    margin-top: 40px;
  }
}
</style>
