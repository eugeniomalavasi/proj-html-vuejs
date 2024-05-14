<script>
import AppButton from '../components/AppButton.vue'
import AboutCard from '../components/AboutCard.vue'
import { store } from '../store';
export default {
    components: {
        AppButton,
        AboutCard,
    }, data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- BUSINESS PRESENTATION PART -->
    <section class="container">
        <h2 class="text-center mb-5">About Us</h2>
        <div class="two-column d-flex">
            <div class="left-content">
                <h1>We are a creative <span class="main-color">web design agency</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus amet officiis non ipsum
                    laborum, porro quisquam, eaque cupiditate perferendis exercitationem magnam distinctio eum? Quam,
                    maxime asperiores? Odio, provident voluptates.</p>
                <AppButton />
            </div>
            <img src="../assets/img/about-img/woman-hero.jpg" alt="agency woman">
        </div>

        <!-- OUR VISION PART -->
        <div class="vision-part mt-5">
            <h2>Our Vision</h2>
            <div>
                <ul class="d-flex">
                    <li v-for="curItem in store.visionArray">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <i :class="curItem.icon"></i>
                        </div>
                        <p>{{ curItem.text }}</p>
                    </li>
                </ul>
            </div>
        </div>

        <!-- OUR TEAM PART -->
        <div class="container">
        <h2 class="text-center">Get to Know our team</h2>
            <div class="row">
                <div class="col-4" v-for="curCard in store.imgAbout">
                    <AboutCard :cardData="curCard"/>
                </div>
            </div>
        </div>

        <!-- CONTACT US -->
        <div class="ms-contact-us d-flex align-items-center justify-content-center flex-column">
            <h2 class="text-center mb-5">PLEASE SEND US YOUR QUESTIONS AND WE WONT ANSWER THEM</h2>
            <AppButton />
        </div>
    </section>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.vision-part {
background-image: $primary-background;
color: white;
    .circle {
        height: 80px;
        width: 80px;
        border-radius: 50%;
        border: 1px solid white;
    }
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