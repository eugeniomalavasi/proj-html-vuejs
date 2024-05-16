<script>
import { store } from '../store';
import AppOtherProject from '../components/AppOtherProject.vue';

export default {
    components: {
        AppOtherProject,
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
                <div class="container mt-4">
                    <div class="row  mt-4 mb-5">
                        <div class="col-6 d-flex justify-content-between flex-column align-items-start">
                            <img class="divider mb-3" src="../assets/img/divider/dividerGradient.png" alt="">
                            <h1 class="title">Our recent <span class="title-color">web designs</span> &
                                some examples of
                                past <span class="title-color">projects</span></h1>
                                <img class="divider mt-3" src="../assets/img/divider/dividerGradient.png" alt="">
                        </div>
                        
                        <div class="col-6 d-flex align-items-end">
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the
                                Semantics, a large language ocean.Separated they live in Bookmarksgrove.Far far away,
                                behind
                                the word mountains, far from the countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove.</p>
                        </div>
                    </div>
                    <div class="row d-flex flex-wrap">
                        <div class="col-3 p-0 flex-wrap" v-for="otherProjectImg in store.cardOtherProject">
                            <AppOtherProject :cardProject="otherProjectImg" />
                        </div>
                    </div>
                </div>
            </div>
</template>

<style class="scss" scoped>

</style>