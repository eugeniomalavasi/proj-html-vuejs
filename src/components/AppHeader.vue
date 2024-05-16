<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: "HOME",
                    routeName: "home"
                },
                {
                    title: "CONTACTS",
                    routeName: "contacts"
                },
                {
                    title: "ABOUT",
                    routeName: "about"
                },
            ]
        }
    },
}
</script>

<template>

    <section class="header-menu">
        <!-- LOGO -->
        <div class="img-container">
            <img src="../assets/img/logo.png" alt="business logo">
        </div>
        <!-- MENU LIST ITEM -->
        <ul class="align-items-center">
            <li v-for="item in menu">
                <router-link :to="{ name: item.routeName }" class="nav-link p-3">{{ item.title }}</router-link>
            </li>
        </ul>
    </section>

</template>

<style lang="scss" scoped>
.header-menu {
    display: flex;
    height: 80px;
    position: fixed;
    width: 100%;
    z-index: 2;
    background-color: white;
    box-shadow: 2px 2px 10px #888888;

    .img-container {
        width: 20%;
        line-height: 75px;
    }

    ul {
        display: flex;
        margin-bottom: 0;
        .router-link-active {
            color: blue;
            font-weight: 600;
        }
    }

}
</style>