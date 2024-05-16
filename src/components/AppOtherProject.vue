<script>
export default {
    props: {
        cardProject: Object,
    },
    methods: {
        getImageUrl(imageName) {
            return new URL(`../assets/img/${imageName}.jpg`, import.meta.url).href;
        }
    }
};


</script>

<template>
    <div class="cardProject ms-card">
            <img :src="getImageUrl(cardProject.imgPath)" alt="">
            <div class="back-card">
                <div>
                <h4>{{ cardProject.title }}</h4>
                <p>{{ cardProject.subTitle }}</p>
                </div>
            </div>
    </div>
</template>

<style scoped lang="scss">
@use"../style/partials/_variables" as*;


    .ms-card {
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    aspect-ratio: 1;


    &:hover .back-card {
        display: flex;
        justify-content: end;
        align-items: start;
        flex-direction: column;
        background-image: $transp-primary;
        color: white;
        animation: mymove 1s forwards;
        border-radius: 15px;
    }

    @keyframes mymove {
        0% {
            scale: 0;
        }

        25% {
            scale: 0.8;
        }

        100% {
            scale: 1.03;
        }
    }

    .back-card {
        display: flex;
        justify-content: end;
        align-items: end;
        padding: 20px;
        scale: 0;
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
    }
}
</style>
