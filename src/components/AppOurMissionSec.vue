<script>
import AppButton from '../components/AppButton.vue'
export default {
    components: {
        AppButton,
    }
}
</script>

<template>
    <div class="bg-gradient ms-margin ms-padding">
        <div class="container ">
            <div class="row mt-4 mb-5" id="doubleCardSection">

                <div class="col-6 container-double-card">
                    <div class="filter">
                        <img class="doubleCard1" src="../assets/img/doubleCard1.jpg" alt="">
                    </div>
                    <div>
                        <img class="doubleCard2" src="../assets/img/doubleCard2.jpg" alt="">
                    </div>
                </div>

                <div class="col-6">
                    <h1 class="title">learn more <br> about our <br> <span class="title-color">missions</span></h1>
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                        the
                        Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
                    <AppButton class="mt-3" />
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.ms-margin {
    margin-top: 100px;
    margin-bottom: 100px;
}

.ms-padding {
    padding-top: 100px;
    padding-bottom: 100px;
}

#doubleCardSection {

    .container-double-card {

        position: relative;
    }



    .cardProject {
        min-height: 900px;
    }

    .doubleCard1 {
        border-radius: 30px;
        max-width: 100%;
        position: absolute;
        top: -60px;
        right: 300px;
        box-shadow: 0 1px 8px rgba(0, 0, 0, 0.15);
    }

    .doubleCard2 {
        max-width: 100%;
        border-radius: 30px;
        position: absolute;
        top: 0px;
        right: 100px;
    }
}
</style>