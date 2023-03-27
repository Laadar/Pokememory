<template>
    <div className="victory">
        <div className="victoryRow">Good job!</div>
        <div className="victoryRow">Your time: {{ timerStore.formattedTimer }}</div>
        <div className="victoryRow">Moves: {{ moves }}</div>

        <div className="victoryButtons">
            <Button @click="restart">Restart</Button>
            <Button
                color="yellow"
                @click="$emit('changeDialog', 'SelectDifficulty')"
            >
                New Game
            </Button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useGameStore } from '@/stores/game'
import { useTimerStore } from '@/stores/timer'
import { storeToRefs } from 'pinia'
import Button from '@/components/Button.vue'

const emits = defineEmits<{
    (e: 'closeDialog'): void
    (e: 'changeDialog', name: string): void
}>()
const { resetGame } = useGameStore()
const { moves } = storeToRefs(useGameStore())
const timerStore = useTimerStore()

const restart = (): void => {
    emits('closeDialog')
    resetGame()
}
</script>

<style lang="scss" scoped>
.victory {
    width: 340px;

    &Row {
        text-align: center;
        font-size: 24px;
        margin-top: 4px;
    }

    &Buttons {
        display: flex;
        flex-flow: row nowrap;
        justify-content: space-around;
        margin-top: 26px;

        .button:not(:first-child) {
            margin-left: 20px;
        }
    }
}
</style>
