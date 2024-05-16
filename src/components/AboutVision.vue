<script>
export default {
    props: {
        store: Object,
    }
}
</script>


<template>
    <div class="vision-part mt-5 scroll-animation">
        <h2 class="text-center pt-5 pb-5">Our Vision</h2>
        <img src="../assets/img/divider/dividerWhite.png" class="divider div-cust" alt="divider">
        <div class="container ms-vision">
            <div>
                <ul class="d-flex">
                    <li v-for="curItem in store.visionArray" class="p-4">
                        <div class="circle d-flex justify-content-center align-items-center">
                            <i :class="curItem.icon" class="icon-style"></i>
                        </div>
                        <h5 class="text-center pt-5 h3">{{ curItem.title }}</h5>
                        <p class="text-center fs-6 pb-5">{{ curItem.text }}</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>


<style lang="scss" scoped>
.vision-part {
    background-image: url(../assets/img/about-img/blur-office.jpg);
    color: white;
    background-size: cover;

    .div-cust {
        display: block;
    }

    h2 {
        font-size: 4rem;
    }

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
</style>