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
        <nuxt-link class="navbar-item" to="/posts">
          Latest
        </nuxt-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {};
</script>

<style></style>
