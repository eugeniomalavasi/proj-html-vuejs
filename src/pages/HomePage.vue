<script>
import AppCardHome from '../components/AppCardHome.vue';
import AppOtherProject from '../components/AppOtherProject.vue';
import { store } from '../store';
import AppButton from '../components/AppButton.vue'

export default {
    components: {
        AppCardHome,
        AppOtherProject,
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
    <main class="container-fluid">
        <div>
            <!-- hero carousel section 1-->
            <header class="bg-gradient">
                <div id="hero-carousel" class="carousel carousel-dark slide mt-4 mb-5">
                    <div class="carousel-indicators">
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                            aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../assets/img/redHeadWomen-on-white-chair.jpg" class="d-block carouselImg1"
                                alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="2000">
                            <img src="../assets/img/Bussiness-employer-at-work.jpg" class="d-block carouselImg2"
                                alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/redHeadWomen-on-white-chair.jpg" class="d-block carouselImg3"
                                alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Third slide label</h5>
                                <p>Some representative placeholder content for the third slide.</p>
                            </div>
                        </div>
                    </div>
                    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel"
                        data-bs-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Previous</span>
                    </button>
                    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel"
                        data-bs-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="visually-hidden">Next</span>
                    </button>
                </div>
            </header>

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
                            <ol>
                                <li>Far far away, behind the word mountains</li>
                                <li>Large language ocean</li>
                                <li>far from the countries Vokalia and Consonantia</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <!-- pack price section 6 -->
            <div class="bg-gradient">
                <div class="container">
                    <div class="row">
                        <div class="col-3">

                        </div>

                        <div class="col-9">

                        </div>
                    </div>
                </div>
            </div>
            <!-- overlay citation section 7 -->
            <div>

            </div>

            <!-- latast news & and out blog section 8 -->
            <div>

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