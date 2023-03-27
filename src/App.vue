<script setup lang="ts">
import { RouterView } from 'vue-router'
import Header from '@/components/Header.vue'
</script>

<template>
    <div class="wrapper">
        <Header />
        <RouterView />
    </div>
</template>

<style lang="scss">
@import '@/assets/styles/reset.scss';
@import '@/assets/styles/misc.scss';
</style>
