<script>
import AppButton from '../components/AppButton.vue'
export default {
    components: {
        AppButton
    }
}
</script>

<template>
    <div class="container">
        <div class="two-column d-flex">
            <div class="left-content">
                <h1>We are a creative <span class="main-color">web design agency</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus amet officiis non ipsum laborum, porro quisquam, eaque cupiditate perferendis exercitationem magnam distinctio eum? Quam, maxime asperiores? Odio, provident voluptates.</p>
                <AppButton />
            </div>
            <img src="../assets/img/about-img/woman-hero.jpg" alt="">
        </div>
    </div>
</template>

<style lang="scss" scoped>
    
</style>