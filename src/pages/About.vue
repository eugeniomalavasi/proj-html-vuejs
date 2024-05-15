<script>
import AppButton from '../components/AppButton.vue'
import AboutCard from '../components/AboutCard.vue'
import AboutBusiness from '../components/AboutBusiness.vue'
import { store } from '../store';
import AboutVision from '../components/AboutVision.vue';
export default {
    components: {
        AppButton,
        AboutCard,
        AboutBusiness,
        AboutVision
    }, data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- BUSINESS PRESENTATION PART -->
    <AboutBusiness />

    <!-- OUR VISION PART -->
    <AboutVision :store="store"/>

    <!-- OUR TEAM PART -->
    <div class="container pt-5">
        <h2 class="text-center">Get to Know <span class="title-color">our team</span></h2>
        <div class="row pt-3">
            <div class="col-4 p-1" v-for="curCard in store.imgAbout">
                <AboutCard :cardData="curCard" />
            </div>
        </div>
    </div>

    <!-- CONTACT US -->
    <div class="ms-contact-us d-flex align-items-center justify-content-center flex-column">
        <h2 class="text-center mb-5">PLEASE SEND US YOUR QUESTIONS AND WE WONT ANSWER THEM</h2>
        <AppButton />
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;
.two-column img {
    margin-top: 5rem;
}

.ms-contact-us {
    background-image: url(../assets/img/about-img/contact-us.jpg);
    height: 400px;
    width: 100%;
    background-size: cover;

    h2 {
        color: white;
    }
}
</style>