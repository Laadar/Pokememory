<template>
    <div class="moves">Moves: {{ moves }}</div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useGameStore } from '@/stores/game'

const { moves } = storeToRefs(useGameStore())
</script>

<style lang="scss" scoped>
    .moves {
        margin-right: 20px;
    }
</style>
