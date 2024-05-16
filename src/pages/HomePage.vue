<script>
import AppCardHome from '../components/AppCardHome.vue';
import AppOtherProject from '../components/AppOtherProject.vue';
import AppPackPrices from '../components/AppPackPrices.vue';
import AppCitHomepage from '../components/AppCitHomepage.vue';
import AppCardPackPrices from '../components/AppCardPackPrices.vue';
import AppNewsBlog from '../components/AppNewsBlog.vue';
import AppCarousel from '../components/AppCarousel.vue';
import AppDoubleCard from '../components/AppDoubleCard.vue';
import AppOurMissionSec from '../components/AppOurMissionSec.vue';
import AppOtherProjectSection from '../components/AppOtherProjectSection.vue';
import AppStylishSection from '../components/AppStylishSection.vue';
import { store } from '../store';
import AppButton from '../components/AppButton.vue'

export default {
    components: {
        AppCardHome,
        AppOtherProject,
        AppButton,
        AppPackPrices,
        AppCardPackPrices,
        AppCitHomepage,
        AppNewsBlog,
        AppCarousel,
        AppDoubleCard,
        AppOurMissionSec,
        AppOtherProjectSection,
        AppStylishSection,
    },
    data() {
        return {
            store,
        }
    }
}
</script>

<template>
    <main class="container-fluid">
        <div>
            <!-- hero carousel section 1-->
            <AppCarousel />
            <!-- stylish! section 2 -->
            <AppStylishSection class="scroll-animation"/>
            <!-- mission section 3 -->
            <AppOurMissionSec class="scroll-animation"/>
            <!-- other project section 4 -->
            <AppOtherProjectSection class="scroll-animation"/>
            <!-- double card section 5 -->
            <AppDoubleCard class="scroll-animation"/>
            <!-- pack price section 6 -->
            <AppPackPrices class="scroll-animation"/>
            <!-- overlay citation section 7 -->
            <div>
            <AppCitHomepage />
            </div>
            <!-- latast news & and out blog section 8 -->
            <div>
            <AppNewsBlog class="scroll-animation"/>
            </div>
            <!-- preFooter section 9 -->
        </div>
    </main>
</template>

<style lang="scss" scoped>
main {
    padding-top: 80px;
}

.carousel-inner {

    height: 500px;

    #carousel-item {
        height: 100%;
        width: 100%;
    }
}


</style>