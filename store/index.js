export default {
  actions: {
    async nuxtServerInit({ dispatch }) {
      await dispatch('categories/loadCategories');
    }
  }
};
