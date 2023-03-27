<template>
    <div
        @click="$emit('cardClicked', card)"
        class="card"
        :class="{ flipped: card.flipped }"
    >
        <img class="cardImage" :src="card.img" :alt="card.name" />
        <img
            class="pokeballImage"
            src="@/assets/svg/pokeball.svg"
            alt="pokeball"
        />
    </div>
</template>

<script setup lang="ts">
import type { Card } from '@/models/card'

defineProps<{
    card: Card
}>()

defineEmits<{
    (e: 'cardClicked', card: Card): void
}>()
</script>

<style lang="scss" scoped>
.card {
    cursor: pointer;
    position: relative;
    width: 92px;
    height: 92px;

    img {
        width: 100%;
        height: 100%;
        position: absolute;
        left: 0;
        top: 0;
        filter: drop-shadow(-5px 5px 4px #f1d5bc);

        -webkit-transition: transform 0.7s
            cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -moz-transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -ms-transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        -o-transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transition: transform 0.7s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        transform-style: preserve-3d;
        transform-origin: center center;
        backface-visibility: hidden;
    }

    .cardImage {
        transform: rotateY(-180deg);
    }

    .pokeballImage {
        transform: rotateY(0);

        &:hover {
            animation-name: wiggle;
            animation-duration: 0.5s;
            animation-timing-function: ease-in-out;
        }
    }

    &.flipped {
        .cardImage {
            transform: rotateY(0);
        }

        .pokeballImage {
            transform: rotateY(-180deg);
        }
    }

    @keyframes wiggle {
        20% {
            left: -4px;
            top: 1px;
        }
        40% {
            left: 2px;
        }
        60% {
            left: -2px;
        }
        80% {
            left: 4px;
            top: -1px;
        }
        0%,
        100% {
            left: 0;
        }
    }
}

@media screen and (max-width: 640px) {
    .card {
        width: 64px;
        height: 64px;
    }
}
</style>
