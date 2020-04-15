<template>
  <nav class="navbar is-transparent">
    <div class="navbar-brand">
      <nuxt-link class="navbar-item" to="/">
        Nuxtful
      </nuxt-link>
      <div
        class="navbar-burger burger"
        data-target="navbarExampleTransparentExample"
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
    <div id="navbarExampleTransparentExample" class="navbar-end">
      <div class="navbar-start">
        <div class="navbar-item has-dropdown is-hoverable">
          <a class="navbar-link">
            Categories
          </a>

          <div class="navbar-dropdown">
            <nuxt-link
              class="navbar-item"
              v-for="category in categories"
              :key="'category-' + category.fields.id"
              :to="'/category/' + category.fields.slug"
            >
              {{ category.fields.name }}
            </nuxt-link>
          </div>
        </div>
        <nuxt-link class="navbar-item" to="/posts">
          Latest
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapGetters } from 'vuex';

export default {
  computed: {
    ...mapGetters({
      categories: 'categories/categories'
    })
  }
};
</script>

<style land="scss">
nav.navbar {
    height: 6rem !important;
    box-shadow: 0 1px 3px 0 rgba(0, 0, 0, .1), 0 1px 2px 0 rgba(0, 0, 0, .06) !important;
}
</style>
