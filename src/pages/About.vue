<script>
import AppButton from '../components/AppButton.vue'
import AboutCard from '../components/AboutCard.vue'
import { store } from '../store';
export default {
    components: {
        AppButton,
        AboutCard,
    }, data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- BUSINESS PRESENTATION PART -->
    <div class="title-cont title-color">
        <h1 class="text-center mb-5 ">About Us</h1>
    </div>
    <section class="container">
        <div class="two-column d-flex">
            <div class="left-content">
                <h1>We are a creative <span class="title-color">web design agency</span></h1>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque voluptatibus amet officiis non ipsum
                    laborum, porro quisquam, eaque cupiditate perferendis exercitationem magnam distinctio eum? Quam,
                    maxime asperiores? Odio, provident voluptates.</p>
                <AppButton />
            </div>
            <img src="../assets/img/about-img/woman-hero.jpg" alt="agency woman">
        </div>
    </section>

    <!-- OUR VISION PART -->
    <div class="vision-part mt-5">
        <h2 class="text-center pt-5 pb-5 fs-1">Our Vision</h2>
        <div class="container ms-vision">
            <div>
                <ul class="d-flex">
                    <li v-for="curItem in store.visionArray" class="p-4">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <i :class="curItem.icon" class="icon-style"></i>
                        </div>
                        <h5 class="text-center pt-5">{{ curItem.title }}</h5>
                        <p class="text-center fs-6 pb-5">{{ curItem.text }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>

    <!-- OUR TEAM PART -->
    <div class="container pt-5">
        <h2 class="text-center">Get to Know <span class="title-color">our team</span></h2>
        <div class="row pt-3">
            <div class="col-4 p-1" v-for="curCard in store.imgAbout">
                <AboutCard :cardData="curCard" />
            </div>
        </div>
    </div>

    <!-- CONTACT US -->
    <div class="ms-contact-us d-flex align-items-center justify-content-center flex-column">
        <h2 class="text-center mb-5">PLEASE SEND US YOUR QUESTIONS AND WE WONT ANSWER THEM</h2>
        <AppButton />
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.title-cont {
    padding-top: 80px;
    background-image: $third-background;

    h1 {
        padding: 4rem 0;
        box-shadow: inset gray 0px 10px 20px -10px;
        font-size: 3rem;
        font-weight: 600;
    }
}

.vision-part {
    background-image: url(../assets/img/about-img/blur-office.jpg);
    color: white;
    background-size: cover;

    .ms-vision {
        height: 100%;
        display: flex;
        align-items: center;

        li {
            &:hover {
                border-radius: 60px;
                animation: fade-in 1s forwards;
            }

            @keyframes fade-in {
                0% {
                    background-color: rgba(0, 0, 0, 0.1);
                }

                100% {
                    background-color: rgba(0, 0, 0, 0.3);
                }
            }
        }

        .circle {
            height: 150px;
            width: 150px;
            border-radius: 50%;
            border: 3px solid rgba(255, 255, 255, 0.5);

            .icon-style {
                font-size: 3rem;
            }
        }
    }
}

.ms-contact-us {
    background-image: url(../assets/img/about-img/contact-us.jpg);
    height: 400px;
    width: 100%;
    background-size: cover;

    h2 {
        color: white;
    }
}
</style>