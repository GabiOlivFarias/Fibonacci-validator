<template>
  <div class="flex flex-row justify-center">
    <button class="md:m-2 m-1 md:p-2 p-1 text-2xl text-white bg-tertiary w-32 rounded-md flex flex-row hover:drop-shadow-red-1">
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
