<template>
  <div class="popup-overlay" v-if="visible">
    <div class="popup-content">

      <h2>Añadir Tarea</h2>

      <div class="form">
        <label>Título:</label>
        <input v-model="nuevaNota.titulo" required />

        <label>Fecha de finalización:</label>
        <input v-model="nuevaNota.fecha" type="date" required />

        <label>Tipo:</label>
        <select v-model="nuevaNota.tipo">
          <option value="familia">Familia</option>
          <option value="ocio">Ocio</option>
          <option value="trabajo">Trabajo</option>
          <option value="series">Series</option>
          <option value="pelicula">Peliculas</option>

        </select>

        <label>Tarea:</label>
        <div class="tareas">
          <input v-model="tareaAux" type="text" required />
          <button type="button" @click="agregarTareas">+</button>
        </div>

        <button @click="agregarNota">Agregar Tarea</button>
      </div>

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
      },
      tareaAux: '',
      tareasAux: [],

    };
  },
  methods: {
    closePopup() {
      this.$emit('close');
    },
    agregarNota() {
      if (this.nuevaNota.titulo) {
        //creamos la nueva nota
        const notaNueva = {
          titulo: this.nuevaNota.titulo,
          fecha: this.nuevaNota.fecha,
          tipo: this.nuevaNota.tipo,
          tareas: [],
        };

        //creamos la nueva tarea
        for (const task in this.tareasAux) {
          console.log("entramos en el for");
          const tareaNueva = {
            descripcion: task,
            completada: false,
          };
          notaNueva.tareas.push(tareaNueva);
        }

        //guardamos en el store
        console.log(notaNueva);
        store.commit('agregarNota', notaNueva);

        //reseteamos campos y cerramos popUp
        this.nuevaNota.titulo = '';
        this.nuevaNota.fecha = '';
        this.nuevaNota.tipo = '';
        this.nuevaNota.tareas = [];
        this.nuevaTarea.descripcion = '';
        this.$emit('close');
      }
    },
    agregarTareas() {
      this.tareasAux.push(this.tareaAux);
      console.log(this.tareasAux)
    },

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

.form select {
  margin-bottom: 1em;
}

.tareas {
  display: flex;
  flex-direction: row;
}
</style>