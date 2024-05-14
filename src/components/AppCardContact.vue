<script>
export default {
    data() {
        return {
            cardContact: [
                {
                    name: "ADDRESS",
                    text: "123 Ave, Lorem City, site Country, The World",
                    
                },
                {
                    name: "PHONE",
                    text: "(001) 123456789 - 234567891",
                    mail: "info@phloxbusiness.com",
                    
                },
                {
                    name: "WORK HOUSE",
                    text: "Monday - Friday       09.00 - 23.00",
                    gg: "Sunday         09.00 - 16.00",
                    
                },
            ]
        }
    }
  
};
</script>

<template>
  <div class="row d-flex align-items-center mt-0 mr-0"v-for="index in cardContact">
        <div class="col">
          <i class="fa-solid fa-location-dot"></i>
        </div>
        <div class="col">
          <div class="card-body" >
            <h5 class="card-title">{{index.name}}</h5>
            <p class="card-text">
             {{ index.text }}
            </p>
            <p class="card-text">
              {{ index.mail }} {{ index.gg }}
            </p>
          </div>
        </div>
    </div>
        
    
   
</template>

<style lang="scss" scoped>

.col {
text-align: center;

    .fa-solid{
      font-size: 100px;
      color: #00d9a6;
    }

}
    

</style>
