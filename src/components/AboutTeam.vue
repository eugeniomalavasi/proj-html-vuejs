<script>
import AboutCard from '../components/AboutCard.vue'

export default {
    props: {
        store: Object,
    },
components: {
    AboutCard,
}
}
</script>


<template>
    <div class="container pt-5">
        <h2 class="text-center">Get to Know <span class="title-color fw-bold">our team</span></h2>
        <div class="row pt-3">
            <div class="col-4 p-1" v-for="curCard in store.imgAbout">
                <AboutCard :cardData="curCard" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

</style>