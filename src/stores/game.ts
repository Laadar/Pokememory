import type { Difficulty } from '@/models/difficulty'
import type { Ref } from 'vue'
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { useCardsStore } from '@/stores/cards'
import { useTimerStore } from '@/stores/timer'

export const useGameStore = defineStore('game', () => {
    const cardsStore = useCardsStore()
    const timerStore = useTimerStore()
    const difficulty: Ref<Difficulty> = ref('EASY')
    const moves: Ref<number> = ref(0)
    const moveInProgress: Ref<boolean> = ref(false)

    const $reset = (): void => {
        difficulty.value = 'EASY'
        moves.value = 0
        moveInProgress.value = false
    }

    const changeDifficulty = (payload: Difficulty): void => {
        difficulty.value = payload
    }

    const incrementMoves = (): void => {
        moves.value++
    }

    const setMoveInProgress = (payload: boolean): void => {
        moveInProgress.value = payload
    }
    
    const startGame = (): void => {
        cardsStore.$reset()
        timerStore.$reset()
        cardsStore.setCardsAmount()
        cardsStore.shuffleCards()
        timerStore.runTimer()
    }

    const resetGame = (): void => {
        moves.value = 0
        cardsStore.restartGame()
        timerStore.restartGame()
    }

    const clearGame = (): void => {
        $reset()
        cardsStore.$reset()
        timerStore.$reset()
    }

    const isVictory = computed<boolean>(() => {
        return cardsStore.cards.length > 0 && cardsStore.cards.every((card) => card.disabled)
    })

    return {
        difficulty,
        moves,
        moveInProgress,
        isVictory,
        changeDifficulty,
        startGame,
        resetGame,
        clearGame,
        incrementMoves,
        setMoveInProgress,
        $reset,
    }
})
