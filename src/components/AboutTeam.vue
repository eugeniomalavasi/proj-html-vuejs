<script>
    import AboutCard from '../components/AboutCard.vue'

    export default {
        props: {
            store: Object,
        },
        components: {
            AboutCard,
        },
    }
</script>


<template>
    <div class="container pt-5 scroll-animation">
        <div class="title-cont">
            <h2 class="text-center">Get to Know <span class="title-color fw-bold">our team</span></h2>
            <img src="../assets/img/divider/dividerGradient.png" class="divider mt-3 div-cust" alt="divider">

        </div>
        <div class="row pt-3">
            <div class="col-4 p-1" v-for="curCard in store.imgAbout">
                <AboutCard :cardData="curCard" />
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
    .container {
        .title-cont {
            width: 30%;

            .div-cust {
                display: block;
                margin: 0 auto;
            }
        }


        h2 {
            font-size: 3rem
        }

    }
</style>