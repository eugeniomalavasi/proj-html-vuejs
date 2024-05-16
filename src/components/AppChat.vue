<script>

export default {
    props: {
        store: Object,
    },
    data() {
        return {
            chatOpen: false,
        }
    },
}
</script>

<template>
    <!-- CHAT CONTAINER -->
    <div class="ms-chat">
        <!-- CHAT MAIN WINDOW -->
        <div class="chat-window" v-show="chatOpen">
            <div class="top-chat">
                <ul class="d-flex flex-wrap">
                    <li v-for="curImg in store.imgAbout">
                        <img :src="curImg.imgUrl" alt="" class="icon-img">
                    </li>
                </ul>
                <p class="mb-2 fs-5">How can we help?</p>
                <p class="subtext">We will respond in a few moments</p>
            </div>

            <div class="form-container d-flex justify-content-center">
                <form>
                    <div class="text-center pb-3">
                        <label for="name">Name:</label> <br>
                        <input type="text" id="name">
                    </div>
                    <div class="text-center pb-3">
                        <label for="surname">Surname:</label>
                        <input type="text" id="surname">
                    </div>
                    <div class="text-center pb-3">
                        <label for="email">Your email:</label>
                        <input type="email" id="email">
                    </div>
                    <div class="text-center">
                        <label for="text-area">Your message:</label>
                        <input type="text-area" id="text-area" class="text-area">
                    </div>
                </form>
            </div>

        </div>

        <!-- CHAT BUTTON -->
        <div class="chat-btn" @click="chatOpen = !chatOpen">
            <i class="fa-regular fa-comment" v-if="!chatOpen"></i>
            <i class="fa-solid fa-x" v-else></i>
        </div>
    </div>
</template>

<style lang="scss" scoped>
@use"../style/partials/_variables" as*;

.ms-chat {
    position: fixed;
    left: 80%;
    bottom: 5%;
    z-index: 5;
    width: 15%;

    .chat-window {
        box-shadow: 2px 2px 5px 5px #888888;
        background-color: #dbdbdb;
        border-radius: 10px;

        .icon-img {
            height: 40px;
            width: 40px;
            border-radius: 50%;
            border: 3px solid white;
            object-fit: cover;
        }

        .top-chat {
            background-color: $title-color;
            padding: 1.2rem;
            text-align: center;
            font-weight: 600;
            color: white;
            border-radius: 10px 10px 0 0;

            .subtext {
                font-size: 0.8rem;
                color: rgb(50, 50, 50);
                font-weight: 600;
            }
        }

        .form-container {
            color: black;
            padding: 1.2rem;

            input {
                width: 100%;
                border-radius: 5px;
                border: none;
            }

            .text-area {
                height: 150px;
            }
        }

    }

    .chat-btn {
        font-size: 1.5rem;
        display: flex;
        justify-content: flex-end;

        i {
            width: 50px;
            height: 50px;
            background-color: $title-color;
            border-radius: 50%;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            margin-top: 2rem
        }
    }
}
</style>