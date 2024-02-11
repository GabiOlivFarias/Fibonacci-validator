<template>
    <div>
        <p class="flex justify-start pl-4 font-regular text-2xl"> 
            {{ $t('view.instruction') }}
        </p>
        <NumberInput />
    </div>
</template>

<script setup>
    import NumberInput from '../components/globals/input/NumberInput.vue'
</script>
