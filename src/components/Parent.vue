<template>
    <div>
      <h1>Componente Parent</h1>
      <Child @text-sent="updateText" />
      <p v-if="receivedText">Texto recibido: {{ receivedText }}</p>
    </div>
  </template>
  
  <script>
  import Child from './Child.vue';
  
  export default {
    name: 'Parent',
    components: {
      Child,
    },
    data() {
      return {
        receivedText: '', // Texto recibido del componente hijo
      };
    },
    methods: {
      updateText(text) {
        this.receivedText = text; // Actualizar el texto recibido
      },
    },
  };
  </script>
  
  <style scoped>
  h1 {
    color: #42b983;
  }
  </style>
  