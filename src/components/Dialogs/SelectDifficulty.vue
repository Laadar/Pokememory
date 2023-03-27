<template>
    <div className="selectDifficulty">
        <div className="selectDifficultyHeader">Select difficulty</div>
        <div className="selectDifficultyWrapper">
            <div
                @click="changeDifficulty('EASY')"
                class="difficulty easy"
                :class="isPicked('EASY')"
            ></div>
            <div
                @click="changeDifficulty('MEDIUM')"
                class="difficulty medium"
                :class="isPicked('MEDIUM')"
            ></div>
            <div
                @click="changeDifficulty('HARD')"
                class="difficulty hard"
                :class="isPicked('HARD')"
            ></div>
        </div>
        <Button @click="start">GO!</Button>
    </div>
</template>

<script setup lang="ts">
import type { Difficulty } from '@/models/difficulty'
import { useGameStore } from '@/stores/game'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import Button from '@/components/Button.vue'

const emit = defineEmits(['closeDialog'])
const router = useRouter()
const { difficulty } = storeToRefs(useGameStore())
const { changeDifficulty } = useGameStore()

const isPicked = (itemDifficulty: Difficulty): string => {
    return itemDifficulty === difficulty.value ? 'picked' : ''
}

const start = (): void => {
    emit('closeDialog')
    router.push('/game')
}
</script>

<style lang="scss" scoped>
.selectDifficulty {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    padding: 0 40px;

    &Header {
        font-size: 24px;
        margin-bottom: 26px;
    }

    &Wrapper {
        margin-bottom: 40px;
    }

    .difficulty {
        width: 200px;
        height: 140px;
        border-radius: 20px;
        cursor: pointer;
        border: 2px solid transparent;

        &:hover {
            border: 2px solid #000000;
        }

        &.picked {
            background-color: rgba(251, 169, 122, 0.68);
        }

        &:not(:last-child) {
            margin-bottom: 18px;
        }

        $difficulties: easy, medium, hard;

        @each $diff in $difficulties {
            &.#{$diff} {
                background-image: url('@/assets/svg/difficulty_#{$diff}.svg');
                background-position: center;
                background-repeat: no-repeat;
                background-size: contain;
            }
        }
    }

    @media screen and (max-width: 640px) {
        .difficulty {
            width: 140px;
            height: 100px;
            background-size: 100px 80px !important;
        }
    }
}
</style>
