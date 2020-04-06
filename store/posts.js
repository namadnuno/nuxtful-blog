import {
  getPosts
} from '../content/posts'

export default {
  state: () => ({
    posts: []
  }),
  getters: {
    posts: (state) => {
      return state.posts
    }
  },
  mutations: {
    setPosts(state, posts) {
      state.posts = [...posts];
    }
  },
  actions: {
    loadPosts(context) {
      return getPosts().then(({
        posts
      }) => {
        if (posts) {
          context.commit('setPosts', posts);
        }
      });
    }
  }
}
