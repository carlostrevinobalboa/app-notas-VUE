<template>
    <div class="card">
        <slot></slot>
    </div>
</template>
  
<style scoped>
    .card {
    border-radius: 12px;
    box-shadow: 10px 10px 15px rgba(232, 24, 24, 0.26);
    padding: 1rem;
    width: 10em;
    height: 10em;
    background-color: aqua;
    overflow: hidden;
    margin: 1em;
  }
</style>