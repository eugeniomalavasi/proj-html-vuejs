<script>
import { store } from '../store';
import AppCardHome from '../components/AppCardHome.vue';
import AppButton from '../components/AppButton.vue'

export default {
    components: {
        AppCardHome,
        AppButton,
    },

data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <div class="bg-gradient">
        <div class="container" id="stylish">
            <div class="row mt-4 mb-5">
                <div class="col-5">
                    <h1>We Are Here To <br>
                        Make Your <span class="title-color">Website</span> <br>
                        Look More <span class="title-color">Elegant</span> <br> And Stylish!</h1>
                    <img class="divider mt-3" src="../assets/img/divider/dividerGradient.png" alt="">
                    <AppButton class="mt-2 d-block" />
                </div>

                <div class="col-7 d-flex flex-wrap">
                    <div class="col-6 flex-grow-2 flex-wrap p-3" v-for="iconCard in store.cardHomeArray">
                        <AppCardHome :cardIcon="iconCard" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped></style>