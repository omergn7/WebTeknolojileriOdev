<template>
  <q-page >
    <TheNavbar></TheNavbar>
    <TheLoginSignUp class="q-pt-none"></TheLoginSignUp>
    <TheFooter></TheFooter>

  </q-page>
</template>

<script lang="ts">
import { Todo, Meta } from 'components/models';
import TheFooter from 'src/components/TheFooter.vue';
import TheLoginSignUp from 'src/components/TheLoginSignUp.vue';
import TheNavbar from 'src/components/TheNavbar.vue';

import { defineComponent, ref } from 'vue';


export default defineComponent({
  name: 'IndexPage',
  components: { TheNavbar, TheLoginSignUp, TheFooter },
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
