<script>
import AppCardHome from '../components/AppCardHome.vue';
import AppOtherProject from '../components/AppOtherProject.vue';
import AppPackPrices from '../components/AppPackPrices.vue';
import AppCitHomepage from '../components/AppCitHomepage.vue';
import AppCardPackPrices from '../components/AppCardPackPrices.vue';
import AppNewsBlog from '../components/AppNewsBlog.vue';
import AppCarousel from '../components/AppCarousel.vue';
import AppDoubleCard from '../components/AppDoubleCard.vue';
import AppOurMissionSec from '../components/AppOurMissionSec.vue';
import { store } from '../store';
import AppButton from '../components/AppButton.vue'

export default {
    components: {
        AppCardHome,
        AppOtherProject,
        AppButton,
        AppPackPrices,
        AppCardPackPrices,
        AppCitHomepage,
        AppNewsBlog,
        AppCarousel,
        AppDoubleCard,
        AppOurMissionSec,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main class="container-fluid">
        <div>
            <!-- hero carousel section 1-->
            <AppCarousel />
            <!-- stylish! section 2 -->
            <div class="bg-gradient">
                <div class="container" id="stylish">
                    <div class="row mt-4 mb-5">
                        <div class="col-5">
                            <h1>We Are Here To <br>
                                Make Your <span class="title-color">Website</span> <br>
                                Look More <span class="title-color">Elegant</span> <br> And Stylish!</h1>
                                <img class="divider mt-3" src="../assets/img/divider/dividerGradient.png" alt="">
                            <AppButton class="mt-2 d-block"/>
                        </div>

                        <div class="col-7 d-flex flex-wrap">
                            <div class="col-6 flex-grow-2 flex-wrap p-3" v-for="iconCard in store.cardHomeArray">
                                <AppCardHome :cardIcon="iconCard" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <!-- mission section 3 -->
            <AppOurMissionSec class="scroll-animation"/>
            <!-- other project section 4 -->
            <div class="bg-gradient">
                <div class="container mt-4">
                    <div class="row  mt-4 mb-5">
                        <div class="col-6">
                            <h1>Our recentweb designs&
                                some examples of
                                pastprojects</h1>
                        </div>
                        <div class="col-6">
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

            <!-- double card section 5 -->
            <AppDoubleCard class="scroll-animation"/>

            <!-- pack price section 6 -->
            <AppPackPrices class="scroll-animation"/>
            <!-- overlay citation section 7 -->
            <div>
            <AppCitHomepage />
            </div>

            <!-- latast news & and out blog section 8 -->
            <div>
            <AppNewsBlog class="scroll-animation"/>
            </div>

            <!-- preFooter section 9 -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: 80px;
}

.carousel-inner {

    height: 500px;

    #carousel-item {
        height: 100%;
        width: 100%;
    }
}


</style>