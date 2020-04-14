import { getCategoryBySlug, getCategories } from '../content/categories';

export default {
  state: () => ({
    categories: [],
    currentCategory: {},
    loadingCurrentCategory: false
  }),
  getters: {
    categories: state => state.categories,
    currentCategory: state => state.currentCategory,
    loadingCurrentCategory: state => state.loadingCurrentCategory
  },
  mutations: {
    setCategories(state, categories) {
      state.categories = [...categories];
    },
    setCurrentCategory(state, category) {
      state.currentCategory = {
        ...category
      };
    },
    setLoadingCurrentCategory: (state, loading) => {
      state.loadingCurrentCategory = loading;
    }
  },
  actions: {
    loadCategories(context) {
      return getCategories().then(({ categories }) => {
        if (categories) {
          context.commit('setCategories', categories);
        }
      });
    },
    loadCategory(context, payload) {
      context.commit('setLoadingCurrentCategory', true);
      return getCategoryBySlug(payload.slug).then(({ category }) => {
        if (category) {
          context.commit('setCurrentCategory', category);
          context.commit('setLoadingCurrentCategory', false);
        }
      });
    }
  }
};
