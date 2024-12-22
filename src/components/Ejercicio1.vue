<template>
    <div>
      <h1>Contador</h1>
      <p>Valor actual: {{ counter }}</p>
      <button @click="increment">Incrementar</button>
      <button @click="decrement">Decrementar</button>
    </div>
  </template>
  
  <script>
  import { mapActions, mapGetters } from 'vuex';
  
  export default {
    name: 'Counter',
    computed: {
      ...mapGetters(['getCounter']),
      counter() {
        return this.getCounter; // Obtener el valor del estado
      },
    },
    methods: {
      ...mapActions(['increment', 'decrement']),
    },
  };
  </script>
  
  <style scoped>
  h1 {
    text-align: center;
  }
  button {
    margin: 5px;
    padding: 10px 20px;
    background-color: #42b983;
    color: white;
    border: none;
    cursor: pointer;
    border-radius: 5px;
  }
  button:hover {
    background-color: #38a774;
  }
  </style>
  