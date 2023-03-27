<template>
    <div class="timer">Timer: {{ timerStore.formattedTimer }}</div>
</template>

<script setup lang="ts">
import { useTimerStore } from '@/stores/timer'

const timerStore = useTimerStore()
</script>
