import { getPosts, getPostOfCategory } from '../content/posts';

export default {
  state: () => ({
    posts: [],
 }),
  getters: {
    posts: state => state.posts,
 },
  mutations: {
    setPosts(state, posts) {
      state.posts = [...posts];
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
   loadPostOfCategory(context, payload) {
      return getPostOfCategory(payload.slug).then(({ posts }) => {
        if (posts) {
          context.commit('setPosts', posts);
        }
      });
    }
  }
};
