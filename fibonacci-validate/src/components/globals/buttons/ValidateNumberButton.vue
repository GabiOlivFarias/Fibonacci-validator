<template>
    <button
      click="validate"
      class="flex items-center rounded-md bg-secundary text-white drop-shadow-orange-0.6 hover:drop-shadow-orange-1">
      <div class="m-2">
        <ValidateIcon />
      </div>
      <p class="m-2">
        Verificar
      </p>
    </button>
  </template>
  
  <script setup>
    import ValidateIcon from '@/components/icons/ValidateIcon.vue'
  </script>