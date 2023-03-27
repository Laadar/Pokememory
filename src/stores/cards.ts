import type { Card } from '@/models/card'
import type { Ref } from 'vue'
import { ref } from 'vue'
import { defineStore } from 'pinia'
import { useGameStore } from '@/stores/game'
import { DIFFICULTY_LEVELS } from '@/models/difficulty'
import { default as defaultCards } from '@/assets/data/cards'

export const useCardsStore = defineStore('card', () => {
    const cards: Ref<Card[]> = ref([])
    const previousCard: Ref<Card | null> = ref(null)
    const gameStore = useGameStore()

    const $reset = (): void => {
        cards.value = []
        previousCard.value = null
    }

    const flipCard = (payload: Card): void => {
        const selectedCard = cards.value.find((card) => card.id === payload.id)

        if (selectedCard) {
            selectedCard.flipped = !selectedCard.flipped
        }
    }

    const disableCard = (payload: Card): void => {
        const selectedCard = cards.value.find((card) => card.id === payload.id)

        if (selectedCard) {
            selectedCard.disabled = true
        }
    }

    const setPreviousCard = (payload: Card | null): void => {
        previousCard.value = payload
    }

    const shuffleCards = (): void => {
        for (let i = cards.value.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1))
            ;[cards.value[i], cards.value[j]] = [cards.value[j], cards.value[i]]
        }
    }

    const setCardsAmount = (): void => {
        Object.entries(DIFFICULTY_LEVELS).map((difficulty) => {
            if (difficulty[0] === gameStore.difficulty) {
                let clonedArray = JSON.parse(JSON.stringify(defaultCards))
                cards.value = clonedArray.slice(0, difficulty[1])
            }
        })
    }

    const restartGame = (): void => {
        setCardsAmount()
        shuffleCards()
    }

    return {
        cards,
        previousCard,
        flipCard,
        disableCard,
        setPreviousCard,
        shuffleCards,
        setCardsAmount,
        restartGame,
        $reset
    }
})
