<script>
export default {
    props: {
        cardData: Object,
    }
}
</script>

<template>
    <div class="ms-card d-flex flex-wrap">
        <div class="front-card">
            <img :src="cardData.imgUrl" alt="cardData.name">
        </div>
        <div class="back-card">
            <h3 class="text-center">{{ cardData.name }}</h3>
            <h6 class="text-center">{{ cardData.role }}</h6>
            <p class="text-center">{{ cardData.text }}</p>

        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>