<template>
  <div class="flex flex-row justify-center">
    <button class="m-2 p-2 text-2xl text-white bg-medium-red w-32 rounded-md flex flex-row hover:drop-shadow-red-1">
      <ValidateIcon class="text-white"/>
      <p>
        {{ $t('buttons.send') }}
      </p>
    </button>
  </div>
</template>

<script setup>
import ValidateIcon from '@/components/icons/ValidateIcon.vue';

</script>
