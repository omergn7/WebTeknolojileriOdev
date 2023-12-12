<template>
  <div class="q-pa-sm" style="
   width: 300px;
   height: 1200px;
   background: white;">
    <q-tree
      class="q-pr-xl q-gutter-sm"
      :nodes="simple"
      node-key="label"
      :filter="filter"
      default-expand-all
      no-connectors
    />
    <q-separator></q-separator>

    <q-btn dense flat unelevated outline style="
   width: 290px;
   height: 40px;" class="Card-expand" @click="dropDownOpen = !dropDownOpen" >
    <a style=" position: absolute ;
  left: 0px;
  padding: 4px; ">Beden </a>

    </q-btn>
    <div style="
   width: 300px;
   height: 350px;
   background: white;" class="Card-read-more q-pl-xs" v-if="dropDownOpen">
    <q-btn class=" q-pa-md q-ma-xs ab" v-for="n in 25" :key="n" outline style="color:rgb(206, 204, 204);" label="30"></q-btn>

    </div>


    <q-separator></q-separator>



    <q-btn dense flat unelevated outline style="
   width: 290px;
   height: 40px;" class="Card-expand" @click="dropDownOpen2 = !dropDownOpen2" >
    <a style=" position: absolute;
  left: 0px;
  padding: 4px;">Renk </a>

    </q-btn>

    <div style="
   width: 300px;
   height: 200px;
   background: white;" class="Card-read-more q-pl-xs" v-if="dropDownOpen2">

    <q-list class="list1 ">
      <q-item>
        <q-item-section>
        <ul>
        <li style="color:black; font-size: 200%; "><a href="#" style="color:black; font-size: 43%;" >Siyah</a></li>
        <li style="color:orange; font-size: 200%; "><a href="#" style="color:black; font-size: 43%;" >Turuncu</a></li>
        <li style="color:blue; font-size: 200%; "><a href="#" style="color:black; font-size: 43%;" >Mavi</a></li>
        <li style="color:purple; font-size: 200%; "><a href="#" style="color:black; font-size:43%;" >Mor</a></li>
      </ul>
        </q-item-section>
      </q-item>
    </q-list>


     <q-list class="list2">
      <q-item>
        <q-item-section>
        <ul>
        <li style="color:grey; font-size: 200%; "><a href="#" style="color:black; font-size: 43%;" >Gri</a></li>
        <li style="color:green; font-size: 200%; "><a href="#" style="color:black; font-size: 43%;" >Yeşil</a></li>
        <li style="color:brown; font-size: 200%; "><a href="#" style="color:black; font-size: 43%;" >Kahverengi</a></li>
        <li style="color:red; font-size: 200%; "><a href="#" style="color:black; font-size: 43%;" >Kırmızı</a></li>
      </ul>
        </q-item-section>
      </q-item>
    </q-list>


    </div>

    <q-separator></q-separator>

    <q-btn dense flat unelevated outline style="
   width: 290px;
   height: 40px;" class="Card-expand" @click="dropDownOpen3 = !dropDownOpen3" >
    <a style=" position: absolute;
  left: 0px;
  padding: 4px;">Cinsiyet </a>

    </q-btn>
    <div style=" font-family:'Arial';
  font-weight: bold;
  font-size: 11px;
   width: 300px;
   height: 350px;
   background: white;" class="Card-read-more q-pl-xs" v-if="dropDownOpen3">
     <div>
     <q-checkbox size="30px" v-model="selection1" label="Erkek" color="red" />
     </div>
     <div>
     <q-checkbox size="30px" v-model="selection2" label="Kadın" color="red" />
     </div>
     <div>
     <q-checkbox size="30px" v-model="selection3"  label="Unisex" color="red" />
     </div>

    </div>
    <q-separator></q-separator>


    </div>


</template>

<script>
import { ref } from 'vue'

export default {

  data: () => ({
    dropDownOpen: false,
    dropDownOpen2: false,
    dropDownOpen3: false,
  }),
  setup () {
    const filter = ref('')
    const filterRef = ref(null)

    return {
      filter,
      filterRef,
      selection1: ref(true),
      selection2: ref(true),
      selection3: ref(true),

      simple: [
        {


              label: 'Çocuk',
              children: [
                { label: 'Ayakkabi' },
                { label: 'Aksesuar' }
              ]
            },
            {
              label: 'Erkek',
              children: [
                { label: 'Spor Giyim' },
                { label: 'Ayakkabi' },
                { label: 'Aksesuar' }

              ]
            },
            {
              label: 'Kadın',
              children: [
                { label: 'Spor Giyim' },
                { label: 'Aksesuar' },
                { label: 'Ayakkabi' }
              ]
            },
            {
              label: 'Sürdürebilirlik',
              children: [
                { label: '' },

              ]
            }


      ],


    }
  }
}
</script>
<style lang="css" scoped>
.Card {
  min-width: 150px;
  background: white;
  border: 1px solid rgba(0, 0, 0, 0.5);
  margin: 10px;
}
.Card p {
  margin: 20px;
}

.Card-expand {
  display: flex;
  justify-content: flex-end;
  font-family:'Arial';
  font-weight: bold;
  font-size: 11px;
  border-left: none;
  border-right: none;
}
.Card-expand button {
  margin: 10px;
}

.Card-read-more {
  height: 70px;
}
.list2{
  margin-left:95px;
  margin-top:-212px;
}
.list1{
  margin-left:-30px;
  margin-top:-30px;
}



</style>
