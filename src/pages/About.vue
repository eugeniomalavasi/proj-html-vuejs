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
        <h2>Our Vision</h2>


    </section>
</template>

<style lang="scss" scoped></style>