<template>
    <div class="flex flex-row p-2">
      <input
        id="number"
        type="number"
        placeholder="Digite um numero"
        class="size-12 w-56 cursor-text p-4 m-2 appearance-none border-2 border-solid border-primary"
      />
      <ValidateNumberButton @click="validateNumber" />
    </div>
    <div v-if="resultMessage" class="result-container">
      <h3>{{ resultMessage }}</h3>
    </div>
  </template>
  
  <script>
  import ValidateNumberButton from '../buttons/ValidateNumberButton.vue'
  
  export default {
    components: {
      ValidateNumberButton,
    },
    data() {
      return {
        resultMessage: '',
      }
    },
    methods: {
      validateNumber() {
        let number = parseInt(document.getElementById('number').value)
  
        this.resultMessage = isFibonacci(number)
          ? 'É um número de Fibonacci!'
          : 'Não é um número de Fibonacci!'
      },
    },
  }
  function isFibonacci(n) {
    return isPerfectSquare(5 * n * n + 4) || isPerfectSquare(5 * n * n - 4)
}

function isPerfectSquare(x) {
    let s = Math.sqrt(x)
    return s * s === x
}
</script>
  