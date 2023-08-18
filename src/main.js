import { createApp } from 'vue'
import App from './App.vue'
import store from './store';


const notesFromStorage = localStorage.getItem('jsonData');
if (notesFromStorage) {
    
    const notesJson = JSON.parse(notesFromStorage);

    for(let i=0;i<notesJson.length;i++){
        store.commit('agregarNota', notesJson[i]);
    }

  }

createApp(App).mount('#app')
