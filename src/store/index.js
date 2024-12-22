import { createStore } from 'vuex';

export default createStore({
  state: {
    counter: 0, // Valor inicial del contador
  },
  mutations: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
  },
  actions: {
    increment({ commit }) {
      commit('increment');
    },
    decrement({ commit }) {
      commit('decrement');
    },
  },
  getters: {
    getCounter: (state) => state.counter,
  },
});
