<template>
  <div class="popup-overlay" v-if="visible">
    <div class="popup-content">

      <h2>Añadir Tarea</h2>

      <form @submit.prevent="agregarTarea" class="form">
        <label>Título:</label>
        <input v-model="nuevaNota.titulo" required />

        <label>Fecha de finalización:</label>
        <input v-model="nuevaNota.fecha" type="time" required />

        <label>Tipo:</label>
        <input v-model="nuevaNota.tipo" required />

        <label>Tarea:</label>
        <input v-model="nuevaTarea.descripcion" type="text" required />

        <button type="submit">Agregar Tarea</button>
      </form>

      <button class="popup-close-button" @click="closePopup">Cancelar</button>

    </div>
  </div>
</template>

<script>

import store from '../store.js';

export default {

  props: {
    visible: Boolean
  },
  data() {
    return {
      nuevaNota: {
        titulo: '',
        fecha: '',
        tipo: '',
        tareas: []
      },
      nuevaTarea: {
        descripcion: '',
        completada: false
      }

    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    agregarTarea() {
      if (this.nuevaNota.titulo && this.nuevaTarea.descripcion) {
        const tareaNueva = {
          descripcion: this.nuevaTarea.descripcion,
          completada: false,
        }

        const notaNueva = {
          titulo: this.nuevaNota.titulo,
          fecha: this.nuevaNota.fecha,
          tipo: this.nuevaNota.tipo,
          tareas: [tareaNueva],
        };

        store.commit('agregarNota', notaNueva);
        localStorage.clear();
        const notesStringed = JSON.stringify(this.getTotalNotes);
        localStorage.setItem('jsonData', notesStringed);

        console.log(store.state.notes);
        this.nuevaNota.titulo = '';
        this.nuevaNota.fecha = '';
        this.nuevaNota.tipo = '';
        this.nuevaNota.tareas = [];
        this.nuevaTarea.descripcion = '';
        this.$emit('close');
      }
    }
  },
  computed: {
    getTotalNotes() { //funcion que es un puntero al getter finalCounter
      return store.getters.getNotes;
    },
  }
};
</script>

<style scoped>
/* Estilos para el componente pop-up */
.popup-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
}

.popup-content {
  background-color: aqua;
  padding: 20px;
  padding-right: 40px;
  padding-left: 40px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.popup-close-button {
  margin-top: 2em;
  cursor: pointer;
  float: right;
}

.form {
  display: flex;
  flex-direction: column;
}

.form button {
  margin-top: 1em;
}

.form input {
  margin-bottom: 1em;
}
</style>