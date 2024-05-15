<script>
import { store } from '../store';
import AppButton from '../components/AppButton.vue'
import AboutBusiness from '../components/AboutBusiness.vue'
import AboutVision from '../components/AboutVision.vue';
import AboutTeam from '../components/AboutTeam.vue';
import AboutContact from '../components/AboutContact.vue';
export default {
    components: {
        AppButton,
        AboutBusiness,
        AboutVision,
        AboutTeam,
        AboutContact
    }, data() {
        return {
            store,
        }
    },
}
</script>

<template>
    <!-- BUSINESS PRESENTATION PART -->
    <AboutBusiness />

    <!-- OUR VISION PART -->
    <AboutVision :store="store"/>

    <!-- OUR TEAM PART -->
    <AboutTeam :store="store"/>

    <!-- CONTACT US -->
    <AboutContact />

</template>

<style lang="scss" scoped></style>