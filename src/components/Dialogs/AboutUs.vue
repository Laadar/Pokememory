<template>
    <div className="aboutUs">
        <div className="aboutUsGotcha"></div>
        <div className="aboutUsBlock">
            We made this website just for fun and hope you will enjoy this cute
            minimalistic game. Please <a target="_blank" href="https://savelife.in.ua/">support Ukraine</a> during
            russian invasion 🇺🇦
        </div>
        <div className="aboutUsBlock">
            <div>Developer: <a target="_blank" href="https://www.linkedin.com/in/y-fedorov">Yaroslav Shelest</a></div>
            <div>UI: <a target="_blank" href="https://www.linkedin.com/in/a-fedorova/">Anastasia Shelest</a></div>
            <div>Icon set by <a target="_blank" href="https://dribbble.com/roundicons">Ramy Wafaa</a></div>
        </div>
        <div className="aboutUsBlock">Love you ❤️</div>
        <div className="aboutUsIconBlock">
            <div className="aboutUsIconItem aboutUsIconItem-pika"></div>
            <div className="aboutUsIconItem aboutUsIconItem-bulba"></div>
            <div className="aboutUsIconItem aboutUsIconItem-eevee"></div>
        </div>
    </div>  
</template>

<style lang="scss" scoped>
.aboutUs {
    max-width: 400px;
    display: flex;
    flex-direction: column;
    align-items: center;

    &Gotcha {
        width: 126px;
        height: 126px;
        background: url('@/assets/svg/gotcha.svg') center no-repeat;
        margin-bottom: 14px;
    }

    &Block {
        margin-bottom: 20px;
        text-align: center;

        a {
            color: black;
        }
    }

    &IconBlock {
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
        width: 100%;
    }

    &IconItem {
        width: 120px;
        height: 120px;
        background-size: contain;

        &-pika {
            background-image: url('@/assets/svg/pika.svg');
        }

        &-eevee {
            background-image: url('@/assets/svg/eevee.svg');
        }

        &-bulba {
            background-image: url('@/assets/svg/bulba.svg');
        }
    }
}
</style>
