<template>
    <div class="nota">
        <p v-if="note.titulo !== ''">{{ note.titulo }}</p>
        <p v-if="note.fecha !== ''">{{ note.fecha }}</p>
        <div class="checkboxes" v-for="(tareas, index) in note.tareas" :key="index">
            <input @change="handleCheckboxChange(tareas)" type="checkbox" :checked="tareas.completada">
            <label>{{ tareas.descripcion }}</label>
        </div>
    </div>
</template>

<script>
import store from '@/store';


export default {
    //tengo que recuperar los datos de la nota con props
    props: {
        note: Object // Propiedad para recibir el objeto del array
    },
    methods: {
        handleCheckboxChange(tareas) {
            tareas.completada = !tareas.completada;
            localStorage.clear();
            const notesStringed = JSON.stringify(store.state.notes);
            localStorage.setItem('jsonData', notesStringed); 
        }
    },
};
</script>

<style>
.nota {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
}
</style>