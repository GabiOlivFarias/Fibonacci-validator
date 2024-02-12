<template>
    <div>
      <div class="md:flex md:flex-row md:p-2">
        <input
          id="number"
          type="text"
          :placeholder="$t('placeholders.type_number')"
          class="md:size-12 md:w-56 cursor-text p-4 m-2 appearance-none border-2 border-solid border-primary"
          @input="onInput"
        />
        <ValidateNumberButton @click="validateNumber" />
      </div>
      <div v-if="resultMessage" class="result-container font-medium text-2xl">
        <h3>{{ resultMessage }}</h3>
      </div>
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
    if (n <= 0) {
        return false
    }

    const test1 = Math.sqrt(5 * n * n + 4)
    const test2 = Math.sqrt(5 * n * n - 4)

    return Number.isInteger(test1) || Number.isInteger(test2)
    }
</script>
  