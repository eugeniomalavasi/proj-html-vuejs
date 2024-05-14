<script>
export default {
    data() {
        return {
            menu: [
                {
                    title: "Home",
                    routeName: "home"
                },
                {
                    title: "Contacts",
                    routeName: "contacts"
                },
                {
                    title: "About",
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
        <img src="../assets/img/logo.png" alt="business logo">
        <!-- MENU LIST ITEM -->
        <ul>
            <li v-for="item in menu">
                <router-link :to="{ name: item.routeName }" class="nav-link p-3">{{ item.title }}</router-link>
            </li>
        </ul>
    </section>

</template>

<style lang="scss" scoped>
.header-menu {
    display: flex;
    height: 100px;
    position: fixed;
    width: 100%;
    z-index: 2;

    img {
        width: 20%;
    }

    ul {
        display: flex;
        list-style-type: none;


        .router-link-active {
            color: blue;
        }
    }

}
</style>