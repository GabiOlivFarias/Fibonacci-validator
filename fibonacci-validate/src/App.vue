
import ValidatorView from './composable/ValidatorView.vue';
<template>
  <div class="m-10 min-w-90 border-2 border-solid border-tertiary p-7 flex flex-col justify-center items-center">
    <div class="pb-4">
      <h1 class="flex justify-center items-center">
        Sequência Fibonacci
      </h1>
      <p> Vamos verificar se o numero pertence á sequência Fibonacci</p>
    </div>
    <ValidatorView />
  </div>
</template>
<script setup>
import ValidatorView from './composable/ValidatorView.vue'
</script>
