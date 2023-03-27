<template>
    <div class="button" :class="color">
        <slot></slot>
    </div>
</template>

<script setup lang="ts">
export interface ButtonProps {
    color?: string
}

withDefaults(defineProps<ButtonProps>(), {
    color: 'blue',
})
</script>

<style lang="scss" scoped>
@import '@/assets/styles/colors.scss';

.button {
    position: relative;
    font-size: 18px;
    line-height: 18px;
    box-sizing: border-box;
    padding: 10px 6px;
    color: #fff;
    border-radius: 10px;
    cursor: pointer;
    width: 150px;
    text-align: center;

    &.yellow {
        background: $yellow;
    }

    &.blue {
        background: $blue;
    }

    &:hover {
        transition: 1s all cubic-bezier(0.075, 0.82, 0.165, 1);
        filter: drop-shadow(1px 1px 3px rgba(0, 0, 0, 0.5));
    }
}
</style>
