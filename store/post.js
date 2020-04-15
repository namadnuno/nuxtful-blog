import { getPostBySlug } from '../content/posts';

export default {
  state: () => ({
    post: {},
    loading: false
  }),
  getters: {
    post: state => state.post,
    loading: state => state.loading
  },
  mutations: {
    setPost(state, post) {
      state.post = {
        ...post
      };
    },
    setLoading: (state, loading) => {
      state.loading = loading;
    }
  },
  actions: {
    loadPost(context, payload) {
      context.commit('setLoading', true);
      return getPostBySlug(payload.slug).then(({ post }) => {
        if (post) {
          context.commit('setPost', post);
          context.commit('setLoading', false);
        }
      });
    }
  }
}
