<script>
export default {
    props: {
        cardProject: Object,
    }
};
</script>

<template>
<div class="cardProject">
    <div>
        <img :src="cardProject.imgPath" alt="">
    </div>
    <div>
        <h1>{{ cardProject.title }}</h1>
        <p>{{ cardProject.subTitle }}</p>
    </div>
</div>
</template>

<style scoped lang="scss">
.cardProject {
    background-image: url(cardProject.imgPath);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    border-radius: 10px;
    padding: 20px;
    min-height: 300px;
}
</style>
