<template>
  <div>
    <div class="hero is-medium is-primary is-bold">
      <div class="hero-body">
        <h2 class="title">Nuxtful</h2>
        <p>Integration between Nuxt and Contentful using vuex to manage the state. 💪</p>
      </div>
    </div>
    <div class="container">
      <div class="section">
        <div class="columns">
          <div
            class="column"
            v-for="(post, index) in posts"
            :key="'post-' + index"
          >
            <post-item :post="post"></post-item>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import { getPosts } from "../content/posts";
import { mapGetters } from 'vuex';
import PostItem from '../components/PostItem.vue';

export default {
  components: {
    PostItem
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
