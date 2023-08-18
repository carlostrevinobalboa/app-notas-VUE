<template>
  <div class="mainContainer">

    <!-- filtro -->
    <select v-model="selectorTipo">
      <option value="">todas</option>
      <option v-for="(tipo, index) in tiposTotal" :key="index"> {{ tipo }} </option>
    </select>


    <!-- visualizar tareas-->
    <noteCard v-for="(note, index) in filteredNotes" :key="index">
      <VisualizeNote :note="note"></VisualizeNote>
      <button @click="deleteNote(note.titulo)">Eliminar Tarea</button>
    </noteCard>

    <button @click="openPopUp">Agregar Tarea</button>

    <addNote :visible="visiblePopUp" @close="closePopup"> </addNote>

  </div>
</template>

<script>

import noteCard from './UI/noteCard';
import addNote from './components/AnadirNota.vue';
import VisualizeNote from './components/visualizeNote.vue';
import store from './store';

export default {
  components: {
    noteCard,
    VisualizeNote,
    addNote
  },
  data() {
    return {
      visiblePopUp: false,
      selectorTipo: '',
      tiposTotal: ['familia', 'ocio', 'trabajo', 'series', 'peliculas']
    };
  },
  methods: {
    openPopUp() { //funcion que es un puntero al action increment
      this.visiblePopUp = true;
    },
    closePopup() { //funcion que es un puntero al action increment
      this.visiblePopUp = false;
    },
    deleteNote(titulo) {
      store.commit('eliminarNotaGlobal', titulo);
    }
  },
  computed: {
    getNotesCreated() { //funcion que es un puntero al getter finalCounter
      return store.getters.getNotes;
    },

    //filtrado de notas
    filteredNotes() {
      if (this.selectorTipo) {
        console.log(this.selectorTipo)
        return store.state.notes.filter(note => note.tipo === this.selectorTipo); 
      } else {
        return store.state.notes;
      }
    }
  },

}
</script>

<style>
html,
body {
  display: flex;
  flex-direction: column;
  height: 100vh;
  margin: 0;
}

.mainContainer {
  height: 100vh;
  width: 100%;
  background-color: blueviolet;

  display: flex;
  align-items: start;
}

p {
  white-space: normal;
  /* Permite el salto de línea */
  word-wrap: break-word;
  /* Divide las palabras que son muy largas */
}
</style>