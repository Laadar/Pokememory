<template>
    <div className="newGame">
        <div className="newGameInfo">
            Do you really want to finish this match and start new one?
        </div>
        <div className="newGameButtons">
            <Button @click="$emit('changeDialog', 'SelectDifficulty')">Yes</Button>
            <Button color="yellow" @click="$emit('closeDialog')">No</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'

defineEmits<{
    (e: 'closeDialog'): void
    (e: 'changeDialog', name: string): void
}>()
</script>

<style lang="scss" scoped>
.newGame {
    width: 340px;

    &Info {
        text-align: center;
        font-size: 24px;
        margin-bottom: 30px;
    }

    &Buttons {
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
    }
}
</style>
