<template>
  <div class="container">
    <div v-if="loadingCurrent">loading...</div>
    <section v-else class="section">
      <div class="columns is-centered">
        <div class="column is-8">
          <img :src="post.fields.image.fields.file.url" />
        </div>
      </div>
      <div class="columns">
        <div class="column is-8 is-offset-2">
          <div class="content is-medium">
            <nuxt-link :to="'/category/' + post.fields.category.fields.slug">
              <span class="tag">{{ post.fields.category.fields.name }}</span>
            </nuxt-link>
            <h2 class="subtitle is-2">{{ post.fields.title }}</h2>
            <h4 class="subtitle is-5">{{ post.sys.createdAt | date }}</h4>
            <p v-html="post.fields.content"></p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { mapGetters } from 'vuex';
import moment from 'moment';

export default {
  asyncData({ store, route }) {
    return store.dispatch({ type: 'post/loadPost', slug: route.params.slug });
  },
  computed: {
    ...mapGetters({
      post: 'post/post',
      loadingCurrent: 'post/loading'
    })
  },
  filters: {
    date(date) {
      return moment(date).format('MMMM d, YYYY');
    }
  }
};
</script>
