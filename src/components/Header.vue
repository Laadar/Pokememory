<template>
    <div class="header">
        <div @click="goHome" class="headerLogo">
            <div class="headerLogo-icon"></div>
            <div class="headerLogo-text">pokememory</div>
        </div>

        <div className="headerButtons">
            <template v-if="isHomePage">
                <Button @click="showDialogByChoice('AboutUs')">
                    About us
                </Button>
            </template>
            <template v-else>
                <Button @click="showDialogByChoice('Restart')">
                    Restart
                </Button>
                <Button @click="showDialogByChoice('NewGame')" color="yellow">
                    New Game
                </Button>
            </template>
        </div>

        <Dialog v-if="showDialog" @close-dialog="showDialog = false">
            <component
                :is="dialogComponent"
                @close-dialog="showDialog = false"
                @change-dialog="(name: string) => showDialogByChoice(name)"
            ></component>
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, computed, markRaw, watch } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useGameStore } from '@/stores/game'

import Button from '@/components/Button.vue'
import Dialog from '@/components/Dialog.vue'
import AboutUs from '@/components/Dialogs/AboutUs.vue'
import Restart from '@/components/Dialogs/Restart.vue'
import NewGame from '@/components/Dialogs/NewGame.vue'
import SelectDifficulty from '@/components/Dialogs/SelectDifficulty.vue'
import Victory from '@/components/Dialogs/Victory.vue'

const router = useRouter()
const route = useRoute()
const showDialog = ref<boolean>(false)
const dialogComponent = ref<Component | null>(null)

const gameStore = useGameStore()
const isHomePage = computed((): boolean => route.path === '/')

const goHome = (): void => {
    gameStore.clearGame()
    router.push('/')
}

const showDialogByChoice = (name: string): void => {
    if (name === 'SelectDifficulty') goHome()

    const components = {
        AboutUs: AboutUs,
        Restart: Restart,
        NewGame: NewGame,
        SelectDifficulty: SelectDifficulty,
        Victory: Victory,
    }
    showDialog.value = true
    dialogComponent.value = markRaw(components[name as keyof Component])
}

watch(
    () => gameStore.isVictory,
    (victory) => {
        if (victory) {
            showDialog.value = true
            showDialogByChoice('Victory')
        }
    }
)
</script>

<style lang="scss" scoped>
@import '@/assets/styles/fonts.scss';

.header {
    width: 100%;
    max-width: 1280px;
    padding-bottom: 60px;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-between;
    align-items: center;

    &Logo {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        cursor: pointer;

        &-icon {
            width: 64px;
            height: 96px;
            margin-right: 20px;
            background: url('@/assets/svg/logo.svg') left center no-repeat;
        }

        &-text {
            font-size: 32px;
            font-family: 'JostBold';
        }
    }

    &Buttons {
        display: flex;
        flex-flow: row nowrap;

        .button:not(:first-child) {
            margin-left: 20px;
        }
    }

    @media screen and (max-width: 640px) {
        &Logo {
            &-text {
                display: none;
            }
        }
    }    
}
</style>
