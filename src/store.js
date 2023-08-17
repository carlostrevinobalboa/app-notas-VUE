import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    agregarNota(state, nuevaNota) {
      state.notes.push(nuevaNota);
    }
  },
  getters: {
    getNotes(state) {
      return state.notes;
    }
  }
});

export default store;
