import type { Timer } from '@/models/timer'
import type { Ref } from 'vue'
import { ref, reactive, computed, watch } from 'vue'
import { defineStore } from 'pinia'
import { useGameStore } from '@/stores/game'

export const useTimerStore = defineStore('timer', () => {
    const gameStore = useGameStore()
    const interval: Ref<NodeJS.Timer | null> = ref(null)
    const timer = reactive<Timer>({
        seconds: 0,
        minutes: 0,
    })

    const formattedTimer = computed<string>(() => {
        const formatTime = (n: number) => String(n).padStart(2, '0')

        return `${formatTime(timer.minutes)}:${formatTime(timer.seconds)}`
    })

    const runTimer = (): void => {
        interval.value = setInterval(() => {
            timer.seconds++
            if (timer.seconds === 60) {
                timer.minutes++
                timer.seconds = 0
            }
        }, 1000)
    }

    const stopTimer = (): void => {
        if (interval.value) clearInterval(interval.value)
    }

    const restartGame = () => {
        $reset()
        runTimer()
    }

    const $reset = (): void => {
        stopTimer()
        Object.assign(timer, {
            seconds: 0,
            minutes: 0,
        })
    }

    watch(
        () => gameStore.isVictory,
        (victory) => {
            if (victory) stopTimer()
        }
    )

    return {
        timer,
        formattedTimer,
        runTimer,
        stopTimer,
        restartGame,
        $reset,
    }
})
