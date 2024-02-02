<template>
  <q-page >
    <TheNavbar></TheNavbar>
    <TheCarousel></TheCarousel>
    <p style="font-size: 40px; margin-left: 50px; margin-top: 20px;">Outdoor ve Trail Ayakkabı</p>
    <TheCarouselCard></TheCarouselCard>
    <TheButton></TheButton>
    <TheHMainCard></TheHMainCard>
    <TheFooter></TheFooter>



  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import TheButton from 'src/components/TheButton.vue';
import TheCarousel from 'src/components/TheCarousel.vue';
import TheCarouselCard from 'src/components/TheCarouselCard.vue';
import TheFooter from 'src/components/TheFooter.vue';
import TheHMainCard from 'src/components/TheHMainCard.vue';
import TheNavbar from 'src/components/TheNavbar.vue';

import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'IndexPage',
  components: { TheNavbar, TheCarousel, TheCarouselCard, TheButton, TheHMainCard, TheFooter },
  methods: {
    handleClick() {
      console.log('Butona tıklandı!');
    }
  },

  setup () {
    const todos = ref<Todo[]>([
      {
        id: 1,
        content: 'ct1'
      },
      {
        id: 2,
        content: 'ct2'
      },
      {
        id: 3,
        content: 'ct3'
      },
      {
        id: 4,
        content: 'ct4'
      },
      {
        id: 5,
        content: 'ct5'
      }
    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>
