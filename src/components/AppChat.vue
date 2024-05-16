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

            </div>
            <div class="form-container d-flex justify-content-center">
                <form>
                    <div class="text-center">
                        <label for="name">Name</label> <br>
                        <input type="text" id="name">
                    </div>
                    <div class="text-center">
                        <label for="surname">Surname</label>
                        <input type="text" id="surname">
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
    left: 85%;
    bottom: 10%;
    z-index: 5;
    // background-color: lightgray;


    width: 15%;

    .form-container {
        background-image: $secondary-background;
        border-radius: 10px;
        padding: 1rem;
        color: white;
    }

    .chat-window {
        input {
            width: 80%;
            border-radius: 5px;
            border: none;
        }

        .text-area {
            height: 150px;
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