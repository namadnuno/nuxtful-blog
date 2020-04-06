<template>
  <div class="post-item">
    <img :src="post.fields.image.fields.file.url" />
    <nuxt-link :to="'posts/' + post.fields.slug">
      <h2 class="title">{{ post.fields.title }}</h2>
    </nuxt-link>
    <p v-html="post.fields.description"></p>
  </div>
</template>

<script>
export default {
  props: {
    post: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped lang="scss">
.post-item {
  padding: 1em;
  border-radius: 5px;
  border: 1px solid #eee;
  margin-bottom: 1.3em;

  img {
    max-width: 100%;
  }

  .title {
    font-size: 24px;
    margin-bottom: 20px;
  }
}
</style>
