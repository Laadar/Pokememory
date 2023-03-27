<template>
    <div class="dialogWrapper" @click="outerClick">
        <div class="dialog">
            <div class="dialogClose" @click="$emit('closeDialog')" />
            <slot></slot>
        </div>
    </div>
</template>

<script setup lang="ts">
const emit = defineEmits(['closeDialog'])
const outerClick = (e: Event) => {
    if (e.target === e.currentTarget) emit('closeDialog')
}
</script>

<style lang="scss" scoped>
.dialogWrapper {
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 9999;
    background: rgba(0, 0, 0, 0.3);
    display: flex;
    flex-flow: row nowrap;
    justify-content: center;
    align-items: center;

    .dialog {
        background: #fff8e6;
        border-radius: 25px;
        padding: 40px 60px;
        min-width: 200px;
        position: relative;

        &Close {
            width: 14px;
            height: 14px;
            background: url('@/assets/svg/cross.svg') center no-repeat;
            background-size: cover;
            position: absolute;
            top: 15px;
            right: 15px;
            cursor: pointer;
        }
    }
}
</style>
