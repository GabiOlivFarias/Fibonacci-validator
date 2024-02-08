
import ValidateNumberButton from '../buttons/ValidateNumberButton.vue';
<template>
    <div class="flex flex-row p-2">
        <input  id="number" type="number"  placeholder="Digite um numero"
            class="size-12 w-56 cursor-text p-4 m-2 appearance-none border-2 border-solid border-primary">
        <ValidateNumberButton />
    </div>
</template>

<script setup>
import ValidateNumberButton from '../buttons/ValidateNumberButton.vue'
</script>
