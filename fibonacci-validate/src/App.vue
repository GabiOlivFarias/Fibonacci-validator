<template>
  <div class="m-10 min-h-180 min-w-90 bg-light-red border-4 border-solid border-secundary rounded-md p-7 flex flex-col justify-center items-center">
    <div class="pb-4">
      <h1 class="flex justify-center">
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
