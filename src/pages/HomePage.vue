<script>
import AppCardHome from '../components/AppCardHome.vue';
import { store } from '../store';

export default {
data() {
    return {
        store
    }
}
}
</script>

<template>
    <main class="container">
        <div>
            <!-- hero carousel section 1-->
            <header>
                <div id="hero-carousel" class="carousel carousel-dark slide">
                    <div class="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0"
                                class="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                            aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                            aria-label="Slide 3"></button>
                    </div>
                    <div class="carousel-inner">
                        <div class="carousel-item active" data-bs-interval="10000">
                            <img src="../assets/img/redHeadWomen-on-white-chair.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>First slide label</h5>
                                <p>Some representative placeholder content for the first slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item " data-bs-interval="2000">
                            <img src="../assets/img/Bussiness-employer-at-work.jpg" class="d-block w-100" alt="...">
                            <div class="carousel-caption d-none d-md-block">
                                <h5>Second slide label</h5>
                                <p>Some representative placeholder content for the second slide.</p>
                            </div>
                        </div>
                        <div class="carousel-item">
                            <img src="../assets/img/redHeadWomen-on-white-chair.jpg" class="d-block w-100" alt="...">
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
            <div class="container" id="stylish">
                <div class="row">
                    <div class="col-6">
                        <h1>We Are Here To
                            Make YourWebsite
                            Look MoreElegantAnd Stylish!</h1>
                            <AppButton />
                    </div>

                    <div class="col-6">
                        <AppCardHome />
                    </div>
                </div>
            </div>

<<<<<<< HEAD
            <!-- mission section 3 -->
            <div>

            </div>

            <!-- other project section 4 -->
            <div>

            </div>

            <!-- double card section 5 -->
            <div>

            </div>

            <!-- pack price section 6 -->
            <div>

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

#carouselBody {
    width: 100%;
    height: 100%;
    background-color: red;
}
</style>