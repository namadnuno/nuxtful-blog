<template>
  <div>
    <div class="hero is-info ">
      <div class="hero-body">
        <h2 class="title">Latest Posts</h2>
      </div>
    </div>
    <div class="container">
      <div class="section">
          <div
            v-for="(post, index) in posts"
            :key="'post-' + index"
          >
            <horizontal-post :post="post"></horizontal-post>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getPosts } from "../content/posts";
import { mapGetters } from 'vuex';
import HorizontalPost from '../../components/HorizontalPost.vue';

export default {
  components: {
    HorizontalPost
  },
  asyncData({ store }) {
    return store.dispatch('posts/loadPosts');
  },
  computed: {
    ...mapGetters({
      posts: 'posts/posts'
    })
  }
};
</script>

<style socped lang="scss"></style>
