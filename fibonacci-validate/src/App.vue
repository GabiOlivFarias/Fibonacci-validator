<template>
  <div class="m-10 min-h-180 min-w-90 bg-light-red border-4 border-solid border-secundary rounded-md p-7 flex flex-col justify-center items-center">
    <div class="pb-24">
      <h1 class="flex justify-center font-bold text-6xl">
        Sequência Fibonacci
      </h1>
      <p class="flex justify-center font-medium text-3xl"> 
        Vamos verificar se o número pertence á sequência Fibonacci
      </p>
    </div>
    <ValidatorView />
  </div>
</template>
<script setup>
import ValidatorView from './composable/ValidatorView.vue'
</script>
