<script>
import AppCardHome from '../components/AppCardHome.vue';
import AppOtherProject from '../components/AppOtherProject.vue';
import AppPackPrices from '../components/AppPackPrices.vue';
import AppCitHomepage from '../components/AppCitHomepage.vue';
import AppCardPackPrices from '../components/AppCardPackPrices.vue';
import AppNewsBlog from '../components/AppNewsBlog.vue';
import AppCarousel from '../components/AppCarousel.vue';
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
                            <h1>We Are Here To
                                Make YourWebsite
                                Look MoreElegantAnd Stylish!</h1>

                            <AppButton />
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
            <div class="bg-gradient">
                <div class="container ">
                    <div class="row mt-4 mb-5" id="doubleCardSection">

                        <div class="col-6">
                            <img class="doubleCard1" src="../assets/img/doubleCard1.jpg" alt="">
                            <img class="doubleCard2" src="../assets/img/doubleCard2.jpg" alt="">
                        </div>

                        <div class="col-6">
                            <h1>learn more about our missions</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the
                                Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
                            <AppButton />
                        </div>
                    </div>
                </div>
            </div>
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
            <div class="bg-gradient">
                <div class="container-fluid">
                    <div class="row mt-4 mb-5" id="doubleCardSection5">
                        <div
                            class="col-6 imgText text-center d-flex flex-column justify-content-center align-items-centers gap-2">
                            <div class="col-12">
                                <h1>280</h1>
                            </div>
                            <div class="d-flex justify-content-center align-items-centers gap-5">
                                <div class="col-6">
                                    <h3>+3,500</h3>
                                    <p>USERS'COMMENTS</p>
                                </div>
                                <div class="col-6">
                                    <h3>+3,500</h3>
                                    <p>USERS'COMMENTS</p>
                                </div>
                            </div>
                        </div>
                        <div class="col-6 onlyText">
                            <h1> We Love What We Do</h1>
                            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the
                                Semantics, a large language ocean.Separated they live in Bookmarksgrove.Far far away,
                                behind
                                the word mountains, far from the countries Vokalia and Consonantia, there live the blind
                                texts. Separated they live in Bookmarksgrove.</p>
                            <ul>
                                <li><i class="fa-solid fa-circle fa-2xs dots" style="color: #00d9a6;"></i> Far far away, behind the word mountains</li>
                                <li><i class="fa-solid fa-circle fa-2xs dots" style="color: #00d9a6;"></i> Large language ocean</li>
                                <li><i class="fa-solid fa-circle fa-2xs dots" style="color: #00d9a6;"></i> Far from the countries Vokalia and Consonantia</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>

            <!-- pack price section 6 -->
            <AppPackPrices />
            <!-- overlay citation section 7 -->
            <div>
            <AppCitHomepage />
            </div>

            <!-- latast news & and out blog section 8 -->
            <div>
            <AppNewsBlog />
            </div>

            <!-- preFooter section 9 -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: 100px;
}

.carousel-inner {

    height: 500px;

    #carousel-item {
        height: 100%;
        width: 100%;
    }
}

.dots {
    font-size: 10px;
}

#doubleCardSection {
    position: relative;

    .doubleCard1 {
        border-radius: 10px;
        max-width: 300px;
    }

    .doubleCard2 {
        max-width: 300px;
        border-radius: 10px;
        position: absolute;
        top: 50px;
        left: 150px;
    }
}

#doubleCardSection5 {
    position: relative;
    min-height: 700px;

    .imgText {
        background-image: url("../assets/img/deskboy.jpg");
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        min-height: 500px;
        max-width: 40%;
        border-radius: 10px;
        color: white;
        position: absolute;
        top: 5%;
        left: 10%;
    }

    .onlyText {
        background-color: white;
        max-width: 40%;
        min-height: 500px;
        padding: 40px;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        position: absolute;
        top: 15%;
        left: 45%;
    }
}
</style>