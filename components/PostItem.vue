<template>
  <div class="card">
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="post.fields.image.fields.file.url" alt="Placeholder image" />
      </figure>
    </div>
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

<style scoped lang="scss"></style>
