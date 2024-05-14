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
    <div class="cardProject">
        <div class="overImg">
            <img :src="getImageUrl(cardProject.imgPath)" alt="">
            <div class="overText">
                <h1>{{ cardProject.title }}</h1>
                <p>{{ cardProject.subTitle }}</p>
            </div>
        </div>
    </div>
</template>

<style scoped lang="scss">
.cardProject {
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    aspect-ratio: 1;

    .overImg {
        position: relative;
    }

    .overText {
        position: absolute;
        bottom: 10px;
        left: 10px;

    }
}
</style>
