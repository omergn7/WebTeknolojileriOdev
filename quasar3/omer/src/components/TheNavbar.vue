<template>
  <div class="q-pa-md">
    <q-toolbar class="bg-white text-black">
      <q-ıcon>
        <svg class="icon" xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="red" viewBox="0 0 24 24">
 <path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z"/>
</svg>
         <q-tooltip class="tooltip">
      New Balance
            </q-tooltip>
      </q-ıcon>

      <q-tabs class="q-pl-xl tabsmenu bg-white text-black"
        v-model="tab"
        active-color = "red-8"
        inline-label
      >
       <q-tab class="indirim" color="primary" label="YENİLER">
        <q-menu :style="{ backgroundColor: 'white', color: 'black'}">
          <q-list style="min-width: 500px" >
            <q-item clickable>
              <q-item-section>Erkek</q-item-section>
            </q-item>
            <q-item clickable >
              <q-item-section>Kadın</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>çocuk</q-item-section>
            </q-item>
            <q-item clickable >
              <q-item-section>Bere</q-item-section>
            </q-item>

            <q-item clickable >
              <q-item-section>Run Your Way</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-tab>
        <q-tab class="indirim" color="primary" label="ERKEK">
        <q-menu :style="{ backgroundColor: 'white', color: 'black'}">
          <q-list style="min-width: 500px">
            <q-item clickable>
              <q-item-section>Ayakkabı</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Giyim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>Aksesuar</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Koleksiyonlar</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-tab>
        <q-tab class="indirim" color="primary" label="KADIN">
        <q-menu :style="{ backgroundColor: 'white', color: 'black'}">
          <q-list style="min-width: 500px">
            <q-item clickable>
              <q-item-section>Ayakkabı</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Giyim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>Aksesuar</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Koleksiyonlar</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-tab>
        <q-tab class="indirim" color="primary" label="ÇOCUK">
        <q-menu :style="{ backgroundColor: 'white', color: 'black'}">
          <q-list style="min-width: 500px">
           <q-item clickable>
              <q-item-section>Ayakkabı</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>Aksesuar</q-item-section>
            </q-item>
             <q-item clickable>
              <q-item-section>Koleksiyonlar</q-item-section>
            </q-item>
          </q-list>
        </q-menu>
      </q-tab>

        <q-tab class="indirim" label="İNDİRİM">
        <q-menu :style="{ backgroundColor: 'white', color: 'black'}">
          <q-list style="min-width: 500px">
            <q-item clickable>
              <q-item-section>Tüm İndirimli Ürünler</q-item-section>
            </q-item>
            <q-item clickable>
              <q-item-section>%60'a Varan İndirim</q-item-section>
            </q-item>

            <q-item clickable>
              <q-item-section>%40'a Varan İndirim</q-item-section>
            </q-item>

          </q-list>
        </q-menu>
      </q-tab>
        <q-tab color="primary" label="BLOG">
        <q-menu :style="{ backgroundColor: 'white', color: 'black'}">
          <q-list style="min-width: 100px">

          </q-list>
        </q-menu>
      </q-tab>
      </q-tabs>


<q-input class="bg-grey-3 q-gutter-yl-xs column offset-4" square outlined v-model="text" color ="black" placeholder="Ara">
         <template v-slot:append>
          <q-icon name="search"></q-icon>
        </template>
     </q-input>

 <div class="q-pl-xl"  style="font-size: 3em" >
   <q-tooltip>
      My account
            </q-tooltip>
<svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664z"/>
       </svg>
  </div>
      <q-tabs class="q-pl-xl"  >
        <q-tab name="gırıs" label="GİRİŞ"></q-tab>
        <q-separator vertical ></q-separator>
        <q-tab name="uyelık" label="ÜYELİK"></q-tab>

      </q-tabs>
  <q-avatar clickable name="cart" icon="shopping_cart" >
    <q-tooltip>
      Card icon
            </q-tooltip>
          <q-badge color="red-8" floating>0</q-badge>
        </q-avatar>
      </q-toolbar>
  <q-separator></q-separator>
    </div>
 
   </template>
   <style>
 .tabsmenu {
  transform: translateX(250px) 
}


.indirim {
  label-color:red;
}

.indirim:hover {
  border-bottom: 2px solid red;
  text-color:	#800000
}
.menu {
    position: relative;
    display: inline-block;
}

.acilir-menu {
    display: none;
    position: absolute;
    min-width: 400px;
}

.menu:hover .acilir-menu {
    display: block;
}

.tooltip {
  transform: translateX(250px) 
}
   </style>

  <script>
  import { ref } from 'vue'

  export default {
    setup () {

   return {

     search: ref('')
     }
   }
  }
  </script>
