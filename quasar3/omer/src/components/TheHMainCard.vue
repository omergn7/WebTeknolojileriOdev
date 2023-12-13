<template>
  <div class="q-pa-md">

 <div class="row items-start q-gutter-md">
      <q-responsive :ratio="10/10" class="col">
        <q-card class="column" flat bordered>
          <q-img class="col" src="https://img1-newbalance.mncdn.com/mnpadding/960/960/FFFFFF/newbalance/uploads/banner/double/ML408BS_mobile.jpg"></q-img>

          <q-card-section>
             <div class="mb-4 px-lg-2 p-3 doubleBannerText">
                                 <h3 class="q-pl-xs q-pt-xs">408</h3>
                                   <p class="body-large">2000'lerden ilham alan koşu tarzina taze bir bakiş.</p>
              </div>
 <div class="q-pa-md q-gutter-sm">
    <q-btn
      size="22px"
      class="q-px-xl q-pl-xs"
      color="red-10"
      label="SATIN AL"
    ></q-btn>
  </div>
          </q-card-section>
        </q-card>
      </q-responsive>

      <q-responsive :ratio="10/10" class="col">
        <q-card class="column" flat bordered>
          <q-img class="col" src="https://img1-newbalance.mncdn.com/mnpadding/960/960/FFFFFF/newbalance/products/uploads/banner/double/BB480LBB_mobile.jpg"></q-img>

          <q-card-section>
            <div class="mb-4 px-lg-2 p-3 doubleBannerText">
                                 <h3 class="q-pl-xs q-pt-xs">480</h3>
                                   <p class="body-large"> Zamansiz Bir Klasik</p>

            </div>
     <div class="q-pa-md q-gutter-sm">
    <q-btn
      size="22px"
      class="q-px-xl q-pl-xs"
      color="red-10"
      label="SATIN AL"
    ></q-btn>
     </div>
          </q-card-section>
        </q-card>
      </q-responsive>
    </div>
  </div>
 </template>

<script>
import { ref } from 'vue'

export default {
  setup () {
    return {
    slide: ref(1)
  }
  }
}
</script>
