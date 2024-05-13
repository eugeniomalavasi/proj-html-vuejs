<script>
export default {
    data() {
        return {
            menu: [
                {
                title: "Home",
                routName: "home"
            },
                {
                title: "About Us",
                routName: "about"
            },
                {
                title: "Contacts",
                routName: "contacts"
            },
        ]
        }
    },
}
</script>

<template>
<ul v-for="item in menu">
    <li>
        <router-link :to="{ name: item.routeName }">{{ item.title }}</router-link>
    </li>
</ul>

</template>

<style lang="scss" scoped>
    
</style>