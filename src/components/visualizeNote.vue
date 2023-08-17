<template>
    <div class="nota">
        <p>{{ note.titulo }}</p>
        <p>{{ note.fecha }}</p>
        <div class="checkboxes" v-for="(tareas, index) in note.tareas" :key="index">
            <input type="checkbox" :checked="tareas.completada">
            <label>{{ tareas.descripcion }}</label>
        </div>
    </div>
</template>

<script>


export default {
    //tengo que recuperar los datos de la nota con props
    props: {
        note: Object // Propiedad para recibir el objeto del array
    }
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