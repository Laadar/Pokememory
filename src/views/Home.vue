<template>
    <div className="homeWrapper">
        <div @click="showDialog = true" className="home">
            <div className="homeBlock">
                <div className="homeBlock-text">Do you remember them all</div>
                <div className="homeBlock-logo"></div>
            </div>
            <div class="homeButton">Tap to start new game</div>
        </div>

        <Dialog v-if="showDialog" @close-dialog="closeDialog">
            <SelectDifficulty @close-dialog="closeDialog" />
        </Dialog>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import Dialog from '@/components/Dialog.vue'
import SelectDifficulty from '@/components/Dialogs/SelectDifficulty.vue'

const showDialog = ref<boolean>(false)

const closeDialog = (): void => {
    showDialog.value = false
}
</script>

<style lang="scss">
.home {
    max-width: 1280px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    cursor: pointer;

    &Block {
        width: 925px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;

        &-text {
            width: 355px;
            font-size: 64px;
            margin-right: 16px;
            text-align: right;
            line-height: 96px;
        }

        &-logo {
            width: 250px;
            height: 380px;
            background: url('@/assets/svg/logo-big.svg') center no-repeat;
            background-size: cover;
        }
    }

    &Button {
        margin-top: 60px;
        font-size: 32px;
    }
}

@media screen and (max-width: 640px) {
    .homeWrapper {
        height: 100%;
        width: 100%;
        display: flex;
        flex-grow: 1;

        .home {
            width: 100%;
            justify-content: center;
            align-items: center;

            &Block {
                display: none;
            }

            &Button {
                margin-top: 0;
                text-align: center;
            }
        }
    }
}
</style>
