<template>
<div>
  <div class="hero is-primary">
    <div class="hero-body">
      <div class="content is-large ">
        <h1 class="title">{{ category.fields.name }}</h1>
        <p>{{ category.fields.description }}</p>
      </div>
    </div>
  </div>
    <section class="section">
      <div class="columns">
        <div class="column is-3" v-for="(post, index) in posts" :key="'post-' + index">
          <post-item
            :post="post"
          ></post-item>
        </div>
      </div>
    </section>
  </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import PostItem from '~/components/PostItem';
export default {
  components: {
    PostItem
  },
  async asyncData({ store, route }) {
    await store.dispatch({
      type: 'categories/loadCategory',
      slug: route.params.slug
    });

    await store.dispatch({
      type: 'posts/loadPostOfCategory',
      slug: route.params.slug
    });

    return {};
  },
  computed: {
    ...mapGetters({
      category: 'categories/currentCategory',
      loadingCurrent: 'categories/loadingCurrentCategory',
      posts: 'posts/posts'
    })
  }
};
</script>

<style></style>
