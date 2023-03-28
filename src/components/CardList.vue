<template>
    <div class="cardList" :class="gameDifficulty">
        <Card
            v-for="card in cards"
            :card="card"
            @card-clicked="cardClicked"
        ></Card>
    </div>
</template>

<script setup lang="ts">
import type { Card as CardType } from '@/models/card'
import { storeToRefs } from 'pinia'
import { useCardsStore } from '@/stores/cards'
import { useGameStore } from '@/stores/game'
import { computed } from '@vue/reactivity'

import Card from '@/components/Card.vue'

const cardStore = useCardsStore()
const gameStore = useGameStore()

const { difficulty, moveInProgress } = storeToRefs(gameStore)
const { setMoveInProgress, incrementMoves } = gameStore
const { cards, previousCard } = storeToRefs(cardStore)
const { flipCard, disableCard, setPreviousCard } = cardStore

const gameDifficulty = computed((): string => difficulty.value.toLowerCase())

const cardClicked = (card: CardType): void => {
    if (card.disabled || moveInProgress.value) return

    if (previousCard.value) {
        if (previousCard.value.id === card.id) return

        flipCard(card)
        incrementMoves()
        if (previousCard.value.name === card.name) {
            disableCard(previousCard.value)
            disableCard(card)
            setPreviousCard(null)
        } else {
            setMoveInProgress(true)
            setTimeout(() => {
                if (previousCard.value) flipCard(previousCard.value)
                flipCard(card)
                setMoveInProgress(false)
                setPreviousCard(null)
            }, 1400)
        }
    } else {
        flipCard(card)
        setPreviousCard(card)
    }
}
</script>

<style lang="scss" scoped>
.cardList {
    display: grid;
    grid-gap: 12px;

    &.easy {
        grid-template-columns: repeat(4, 1fr);
    }

    &.medium {
        grid-template-columns: repeat(6, 1fr);
    }

    &.hard {
        grid-template-columns: repeat(8, 1fr);
    }
}

@media screen and (max-width: 840px) {
    .cardList {
        &.hard {
            :deep {
                .card {
                    width: 64px;
                    height: 64px;
                }
            }
        }
    }
}


@media screen and (max-width: 640px) {
    .cardList {

        &.medium {
            grid-template-columns: repeat(6, 1fr);

            :deep {
                .card {
                    width: 40px;
                    height: 40px;
                }
            }
        }

        &.hard {
            grid-template-columns: repeat(8, 1fr);

            :deep {
                .card {
                    width: 40px;
                    height: 40px;
                }
            }
        }
    }
}
</style>
