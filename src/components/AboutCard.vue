<script>
export default {
    props: {
        cardData: Object,
    },
    data() {
        return {
            isVisible: true,
        }
    },
}
</script>

<template>
    <div class="ms-card d-flex flex-wrap">
        <div class="front-card" v-if="isVisible" @click="isVisible = !isVisible">
            <img :src="cardData.imgUrl" alt="cardData.name">
        </div>
        <div class="back-card" v-else >
            <h3 class="text-center">{{ cardData.name }}</h3>
            <h6 class="text-center">{{ cardData.role }}</h6>
            <p class="text-center">{{ cardData.text }}</p>
        </div>
    </div>
</template>

<style lang="scss" scoped>

</style>