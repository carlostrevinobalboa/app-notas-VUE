import Vuex from 'vuex';

const store = new Vuex.Store({
  state: {
    notes: []
  },
  mutations: {
    agregarNota(state, nuevaNota) {
      state.notes.push(nuevaNota);
      localStorage.clear();
      const notesStringed = JSON.stringify(state.notes);
      localStorage.setItem('jsonData', notesStringed);
    },
    
    eliminarNotaGlobal(state, titulo) {
      const newArray= state.notes.filter(element => element.titulo !== titulo);
      state.notes = newArray;
      localStorage.clear();
      const notesStringed = JSON.stringify(state.notes);
      localStorage.setItem('jsonData', notesStringed);
    }
  },
  getters: {
    getNotes(state) {
      return state.notes;
    }
  }
});

export default store;
