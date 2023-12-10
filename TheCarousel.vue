<!--
Forked from:
https://quasar.dev/vue-components/carousel#example--fullscreen
-->
<template>
  <div class="q-pt-md">
      <q-carousel
        height="600px"
        transition-prev="slide-right"
        transition-next="slide-left"
        swipeable
        animated
        arrows
        v-model="slide"
        infinite
      >
        <q-carousel-slide :name="1" img-src="https://img1-newbalance.mncdn.com/mnresize/1920/-/newbalance/products/uploads/banner/mainslider/1906DH_desktop.jpg">

              <h3 style="   margin: 0; padding: 0; margin-top: 180px; margin-left: 100px" > 1906 </h3>
              <q-btn class=" container q-px-xl q-py-xs" size="25px" style=" margin: 20; padding: 30; margin-top: 70px; margin-left: 100px;background: #cf0a2c; color: white" label="Keşfet">
              </q-btn>

        </q-carousel-slide>

        <q-carousel-slide :name="2" img-src="https://img1-newbalance.mncdn.com/newbalance/products/uploads/banner/mainslider/550NED-NEA_desktop_2.jpg">

          <h3 style="   margin: 0; padding: 0; margin-top: 180px; margin-left: 100px" > 990 </h3>
              <q-btn class=" container q-px-xl q-py-xs" size="25px" style=" margin: 20; padding: 30; margin-top: 70px; margin-left: 100px;background: #cf0a2c; color: white" label="Keşfet">
              </q-btn>

        </q-carousel-slide>


      </q-carousel>
    </div>
  </template>

    <script>
import { ref } from 'vue'

export default {
  setup () {
    return {
      slide: ref(1),
      fullscreen: ref(false)
    }
  }
}
</script>

