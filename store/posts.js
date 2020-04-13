import { getPosts, getPostBySlug } from '../content/posts';

export default {
  state: () => ({
    posts: [],
    currentPost: {},
    loadingCurrentPost: false,
  }),
  getters: {
    posts: (state) => state.posts,
    currentPost: (state) => state.currentPost,
    loadingCurrentPost: (state) => state.loadingCurrentPost,
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = [...posts];
    },
    setCurrentPost(state, post) {
      state.currentPost = {
        ...post,
      };
    },
    setLoadingCurrentPost: (state, loading) => {
      state.loadingCurrentPost = loading;
    },
  },
  actions: {
    loadPosts(context) {
      return getPosts().then(({ posts }) => {
        if (posts) {
          context.commit('setPosts', posts);
        }
      });
    },
    loadPost(context, payload) {
      context.commit('setLoadingCurrentPost', true);
      return getPostBySlug(payload.slug).then(({ post }) => {
        if (post) {
          context.commit('setCurrentPost', post);
          context.commit('setLoadingCurrentPost', false);
        }
      });
    },
  },
};
