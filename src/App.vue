<template>
  <div class="mainContainer">
    <!-- A CADA NOTA LE TENGO QUE PASAR SUS PARAMETROS-->
    <noteCard v-for="(note, index) in notes" :key="index">
      <VisualizeNote :note="note"></VisualizeNote>
    </noteCard>

    <button @click="openPopUp">Agregar Tarea</button>
    <AnadirNota :visible="visiblePopUp" @close="closePopup"> </AnadirNota>

  </div>
</template>

<script>

import noteCard from './UI/noteCard';
import AnadirNota from './components/AnadirNota.vue'
import VisualizeNote from './components/visualizeNote.vue';
import store from './store';

export default {
  components: {
    noteCard,
    VisualizeNote,
    AnadirNota
  },
  mounted() {
    //guardamos en las notas al crear el componente
    this.notes = this.getNotesCreated;
  },
  data() {
    return {
      notes: [],
      visiblePopUp: false,
    };
  },
  methods: {
    openPopUp() { //funcion que es un puntero al action increment
      this.visiblePopUp = true;
    },
    closePopup() { //funcion que es un puntero al action increment
      this.visiblePopUp = false;
    }
  },
  computed: {
    getNotesCreated() { //funcion que es un puntero al getter finalCounter
      return store.getters.getNotes;
    },
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