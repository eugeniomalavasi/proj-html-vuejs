<script>
export default {
    data() {
        return {
            cardContact: [
                {
                    name: "ADDRESS",
                    text: "123 Ave, Lorem City, site Country, The World",
                    icon: "fa-solid fa-location-dot",
                    
                },
                {
                    name: "PHONE",
                    text: "(001) 123456789 - 234567891",
                    mail: "info@phloxbusiness.com",
                    icon:"fa-solid fa-mobile-screen",
                    
                },
                {
                    name: "WORK HOUSE",
                    text: "Monday - Friday       09.00 - 23.00",
                    gg: "Sunday         09.00 - 16.00",
                    icon:"fa-regular fa-clock"
                    
                },
            ]
        }
    }
  
};
</script>

<template>
  <div class="row d-flex align-items-stretch mt-5 mr-0">
  <div class="col-md-4 mb-4 p-5" v-for="index in cardContact" :key="index.id">
    <div class="card h-100 d-flex flex-column p-2">
      <div class="card-body flex-grow-1 ">
        <div class="row">
          <div class="col-auto d-flex align-items-center">
            <i :class="index.icon"></i>
          </div>
          <div class="col">
            <h5 class="card-title">{{ index.name }} :</h5>
            <p class="card-text">{{ index.text }}</p>
            <p class="card-text">{{ index.mail }} {{ index.gg }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
        
    
   
</template>

<style lang="scss" scoped>



    i{
      font-size: 80px;
      color: #00d9a6;
    }


    

</style>
