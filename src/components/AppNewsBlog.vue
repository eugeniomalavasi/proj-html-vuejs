<script>
export default {

}
</script>

<template>
<div class="ms_container mt-5">
<h1 class="title text-center mb-3">Latest News & Our <span class="title-color">Blog</span></h1>
<div class="d-flex align-item-center justify-content-center mb-5">
    <img class="divider-size" src="../assets/img/divider/dividerGradient.png" alt="">
</div>

        <div class="row gap-5 d-flex justify-content-center align-items-center ps-0 pe-0">
            <div class="ms_card col-3">
                <img class="fill-img" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/serious-businesswoman-with-documents-talking-on-P9Q6LX6-1400x788.jpg"
                    alt="">
                    <div class="card-info">
                        <h5 class="fs-6">May 24, 2018 by Alex</h5>
                        <h4><i class="fa-solid fa-circle fa-2xs fs-6" style="color: #00d9a6;"></i> Marketing Ideas</h4>
                    </div>
            </div>

            <div class="ms_card col-3">
                <img class="fill-img" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/Businessman-at-the-desk-in-his-office-resting.-1400x788.jpg"
                    alt="">
                    <div class="card-info">
                        <h5 class="fs-6">May 24, 2018 by Alex</h5>
                        <h4><i class="fa-solid fa-circle fa-2xs fs-6" style="color: #00d9a6;"></i> Marketing Ideas</h4>
                    </div>
            </div>

            <div class="ms_card col-3">
                <img class="fill-img" src="https://demo.phlox.pro/business-2/wp-content/uploads/sites/57/2018/05/simple-home-office-with-tree-PBXRXYB-large-1400x788.jpg"
                    alt="">
                    <div class="card-info">
                        <h5 class="fs-6">May 24, 2018 by Alex</h5>
                        <h4><i class="fa-solid fa-circle fa-2xs fs-6" style="color: #00d9a6;"></i> Marketing Ideas</h4>
                    </div>
            </div>


            <div>

            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.ms_card {
    border-radius: 20px;
    padding: 0;
    border-radius: 20px;
    position: relative;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);


    h5 {
        color: gray;
    
}
}
.card-info {
    padding: 60px 40px;
    top: 70%;
    left: 10%;
    right: 10%;
    background-color: white;
    border-radius: 20px;
    position: absolute;
}

.fill-img {
    object-fit: cover;
    border-radius: 20px;
}

.ms_container {
    width: 90%;
}

</style>