<script>
import AppButton from '../components/AppButton.vue'
import { store } from '../store';
export default {
    components: {
        AppButton
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

    </section>
</template>

<style lang="scss" scoped>
.circle {
    height: 150px;
    width: 150px;
    border-radius: 50%;
    border: 1px solid black;
}

</style>