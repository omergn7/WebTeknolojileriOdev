<template>
  <q-page >

   <TheNavbar></TheNavbar>
   <q-layout class="flex-container">
      <!-- Sol Taraftaki Component -->
      <q-page-container class="flex-item custom-width">
        <TheComp1></TheComp1>
      </q-page-container>

      <!-- Sağ Taraftaki Component -->
      <q-page-container class="flex-item">
        <TheCard></TheCard>
      </q-page-container>
    </q-layout>
    <TheFooter></TheFooter>

  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import TheCard from 'src/components/TheCard.vue';
import TheComp1 from 'src/components/TheComp1.vue';
import TheFooter from 'src/components/TheFooter.vue';
import TheNavbar from 'src/components/TheNavbar.vue';

import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'IndexPage',
  components: { TheNavbar, TheComp1, TheCard, TheFooter },
  setup () {
    const todos = ref<Todo[]>([

    ]);
    const meta = ref<Meta>({
      totalCount: 1200
    });
    return { todos, meta };
  }
});
</script>
<style scoped>
.flex-container {
  display: flex;
  justify-content: space-between; /* Component'ler arasında boşluk bırakmak için */
}

.flex-item {
  flex: 1; /* Eşit genişlik için */
  margin-right: 0px; /* İstediğiniz boşluğu ayarlayabilirsiniz */

}
.custom-width {
  width: 50px; /* İstediğiniz genişliği ayarlayabilirsiniz */
  flex: 0 0 300px;
}
</style>
