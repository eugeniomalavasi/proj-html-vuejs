<script>
export default {

}
</script>

<template>
    <div class="bg-gradient ms-margin">
        <div class="container-fluid">
            <div class="row mt-4 mb-5" id="doubleCardSection5">
                <div
                    class="col-6 cardProject imgText text-center d-flex flex-column justify-content-center align-items-centers gap-2">
                    <div class="col-12">
                        <h1 class="numberClass">280</h1>
                        <h4>PROJECTS</h4>
                    </div>
                    <div class="d-flex justify-content-center align-items-centers gap-5">
                        <div class="col-6">
                            <h3>+3,500</h3>
                            <p>USERS'COMMENTS</p>
                        </div>
                        <div class="col-6">
                            <h3>+3,500</h3>
                            <p>USERS'COMMENTS</p>
                        </div>
                    </div>
                </div>
                <div class="col-6 onlyText">
                    <h1 class="title"> We <span class="title-color">Love</span> What <br> We Do</h1>
                    <img class="divider" src="../assets/img/divider/dividerGradient.png" alt="">
                    <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia,
                        there live the blind texts. Separated they live in Bookmarksgrove right at the coast of
                        the
                        Semantics, a large language ocean.Separated they live in Bookmarksgrove.Far far away,
                        behind
                        the word mountains, far from the countries Vokalia and Consonantia, there live the blind
                        texts. Separated they live in Bookmarksgrove.</p>
                    <ul>
                        <li><i class="fa-solid fa-circle fa-2xs dots" style="color: #00d9a6;"></i> Far far away, behind
                            the word mountains</li>
                        <li><i class="fa-solid fa-circle fa-2xs dots" style="color: #00d9a6;"></i> Large language ocean
                        </li>
                        <li><i class="fa-solid fa-circle fa-2xs dots" style="color: #00d9a6;"></i> Far from the
                            countries Vokalia and Consonantia</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.dots {
    font-size: 10px;
}
.ms-margin {
    margin-top: 200px;
    margin-bottom: 200px;
}

.row {
    margin-left: 0;
    margin-right: 0;
}

#doubleCardSection {


    position: relative;

    .cardProject {
        min-height: 900px;
    }

    .doubleCard1 {
        border-radius: 10px;
        max-width: 300px;
    }

    .doubleCard2 {
        max-width: 300px;
        border-radius: 10px;
        position: absolute;
        top: 50px;
        left: 150px;
    }
}

#doubleCardSection5 {
    position: relative;
    min-height: 700px;

    .numberClass {
        font-size: 100px;
    }

    .imgText {
        background-image: url("../assets/img/deskboy.jpg");
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        min-height: 600px;
        max-width: 40%;
        padding: 5% 5% 5% 5%;
        border-radius: 10px;
        color: white;
        position: absolute;
        top: 5%;
        left: 15%;
    }

    .onlyText {
        
        background-color: white;
        max-width: 40%;
        min-height: 600px;
        padding: 5% 5% 5% 5%;
        border-radius: 10px;
        box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
        position: absolute;
        top: 15%;
        left: 45%;
    }
}
</style>