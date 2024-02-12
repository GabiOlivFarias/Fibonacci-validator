<template>
    <div class="md:w-full md:max-w-screen-md bg-light-red border-4 border-solid border-secundary rounded-md flex justify-center">
      <div class="flex flex-col items-center p-2 w-full">
        <p class="flex justify-start pl-4 font-regular text-2xl"> 
            {{ $t('view.instruction') }}
        </p>
        <NumberInput />
      </div>
    </div>
</template>

<script setup>
    import NumberInput from '../components/globals/input/NumberInput.vue'
</script>
