<template>
    <div className="restart">
        <div className="restartInfo">Restart this match?</div>
        <div className="restartButtons">
            <Button @click="restart">Yes</Button>
            <Button color="yellow" @click="$emit('closeDialog')">No</Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import Button from '@/components/Button.vue'
import { useGameStore } from '@/stores/game'

const emit = defineEmits(['closeDialog'])

const { resetGame } = useGameStore()

const restart = (): void => {
    emit('closeDialog')
    resetGame()
}
</script>

<style lang="scss" scoped>
.restart {
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
