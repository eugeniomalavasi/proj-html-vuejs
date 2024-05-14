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
    <ul>
        <li v-for="item in menu">
            <router-link :to="{ name: item.routeName }" class="nav-link">{{ item.title }}</router-link>
        </li>
    </ul>

</template>

<style lang="scss" scoped>
ul {
    display: flex;
    list-style-type: none;
    .router-link-active {
        color: blue;
    }
}
</style>