<script>
import AppButton from "../components/AppButton.vue"
export default {
    components: {
        AppButton,
    },
};
</script>

<template>
    <header class="bg-gradient">
        <div id="hero-carousel" class="carousel carousel-dark slide mb-5 container-carousel">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active d-flex" data-bs-interval="10000">
                    <div class="text-carousel">
                        <h4 class="title-color mt-5">17 YEARS OF EXPERIENCE</h4>
                        <h1 class="title-carousel mt-4">We Are a <br>Web Design <span class="title-color">Agency</span>
                        </h1>
                        <img class="divider" src="../assets/img/divider/dividerGradient.png" alt="">
                                    <p class="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the
                                Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
                        <AppButton />
                    </div>
                    <div>
                        <div class="gray-circle"></div>
                        <img src="../assets/img/redHeadWomen-on-white-chair.jpg"
                            class="d-block carouselImg1 rounded-circle" alt="...">
                    </div>
                </div>
                <div class="carousel-item " data-bs-interval="2000">
                    <div class="d-flex">
                        <div class="text-carousel">
                            <h4 class="title-color mt-5">17 YEARS OF EXPERIENCE</h4>
                            <h1 class="title-carousel mt-4">A Group of <br>Expert <span
                                    class="title-color">Planners</span></h1>
                                    <img class="divider" src="../assets/img/divider/dividerGradient.png" alt="">
                                    <p class="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the
                                Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
                                    <AppButton />
                        </div>
                        <div>
                            <div class="gray-circle"></div>
                            <img src="../assets/img/Bussiness-employer-at-work.jpg"
                                class="d-block carouselImg1 rounded-circle" alt="...">
                            </div>
                    </div>
                </div>

                <div class="carousel-item">
                    <div class="d-flex">
                        <div class="text-carousel">
                            <h4 class="title-color mt-5">17 YEARS OF EXPERIENCE</h4>
                            <h1 class="title-carousel mt-4">Focus <br>on Your <span
                                    class="title-color">Bussiness</span></h1>
                                    <img class="divider" src="../assets/img/divider/dividerGradient.png" alt="">
                                    <p class="mt-5">Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                                there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                                the
                                Semantics, a large language ocean.Separated they live in Bookmarksgrove.</p>
                                    <AppButton />
                        </div>
                        <div>
                            <div class="gray-circle"></div>
                            <img src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/img3-822x822.jpg"
                                class="d-block carouselImg1 rounded-circle" alt="...">
                        </div>
                    </div>
                </div>
                <!-- https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2022/04/img3-822x822.jpg -->
            </div>
            <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
            </button>
            <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Next</span>
            </button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
.container-carousel {}

.text-carousel {
    margin-left: 10%;
    margin-top: 10%;
    width: 760px;
}


.carousel-item {
    background-color: white;

    .divider {
        height: 8px;
        width: 124px;
        margin: 40px 0 0 0;
    }

    img {
        height: 100%;
        width: 100%;
        max-width: 800px;
    }

    .img-carousel {
        position: relative;
    }

    .carouselImg1 {
        position: relative;
    }

    .gray-circle {
        top: -6%;
        right: 0%;
        left: 52%;
        position: absolute;
        background-color: #d5d5d5;
        height: 900px;
        width: 900px;
        border-radius: 50%;

    }
}
</style>