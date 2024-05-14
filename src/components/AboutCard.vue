<script>
export default {
    props: {
        cardData: Object,
    },
    data() {
        return {
        }
    },
}
</script>

<template>
    <div class="ms-card">
        <div class="front-card">
            <img :src="cardData.imgUrl" alt="cardData.name">
        </div>
        <div class="back-card text-center p-3">
            <h3>{{ cardData.name }}</h3>
            <h6>{{ cardData.role }}</h6>
            <p>{{ cardData.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.ms-card {
    position: relative;


    &:hover .back-card {
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        background-color: rgba(6, 212, 163, 0.8);
        color: white;
        animation: mymove 1s 1;
        animation-fill-mode: forwards;
        border-radius: 15px;
    }
    
            @keyframes mymove {
                0% {

                    z-index: 0;
                    scale: 0;
                }
    
                25% {
                    z-index: 1;
                    scale: 0.8;
                }

                100% {
                    z-index: 1;
                    scale: 1.02;
                }
    }

    .back-card {
        z-index: 0;
        scale:0;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
    }
}
</style>