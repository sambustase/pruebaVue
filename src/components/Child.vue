<template>
    <div>
      <input v-model="inputText" type="text" placeholder="Ingresa un texto" />
      <button @click="sendText">Enviar texto</button>
    </div>
  </template>
  
  <script>
  export default {
    name: 'Child',
    data() {
      return {
        inputText: '', // Texto ingresado por el usuario
      };
    },
    methods: {
      sendText() {
        if (this.inputText.trim()) {
          this.$emit('text-sent', this.inputText); // Emitir el evento con el texto
          this.inputText = ''; // Limpiar el campo de texto
        }
      },
    },
  };
  </script>
  
  <style scoped>
  input {
    margin-right: 10px;
    padding: 5px;
  }
  button {
    padding: 5px 10px;
    background-color: #42b983;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  button:hover {
    background-color: #38a774;
  }
  </style>
  