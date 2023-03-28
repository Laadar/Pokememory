<template>
    <div className="game">
        <CardList />
        <div className="gameInfo">
            <Moves />
            <Timer />
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, onBeforeUnmount } from 'vue'
import { useGameStore } from '@/stores/game'

import Moves from '@/components/Moves.vue'
import Timer from '@/components/Timer.vue'
import CardList from '@/components/CardList.vue'

const gameStore = useGameStore()

onMounted(() => {
    gameStore.startGame()
})

onBeforeUnmount(() => {
    gameStore.clearGame()
})
</script>

<style lang="scss" scoped>
.game {
    max-width: 1280px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: center;
    flex-grow: 1;

    &Info {
        margin-top: 40px;
        width: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-around;
        font-size: 24px;
    }

    @media screen and (max-width: 640px) {
        justify-content: space-evenly;

        &Info {
            margin-top: 20px;
        }
    }
}
</style>
