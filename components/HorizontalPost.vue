<template>
  <section class="section">
    <div class="card is-horizontal">
      <div class="columns">
        <div class="column is-4 card-image">
          <figure class="image is-4by3">
            <img :src="post.fields.image.fields.file.url" :alt="post.fields.image.fields.title" />
          </figure>
        </div>
        <div class="column is-8">
          <div class="card-content">
            <nuxt-link :to="'/posts/' + post.fields.slug">
              <h2 class="title is-4">{{ post.fields.title }}</h2>
            </nuxt-link>
            <div class="content">
              <span class="tag is-light mb-2 mt-1">{{ post.sys.createdAt | date }}</span>
              <p v-html="post.fields.description"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import moment from 'moment';


export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  },
  filters: {
    date(date) {
      return moment(date).format('d MMMM YYYY');
    }
  }
};
</script>

<style scoped lang="scss">
.card.is-horizontal {
  .card-image {
    padding: 0px;
  }
}
</style>
