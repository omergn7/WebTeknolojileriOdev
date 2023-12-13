<template>
<div class="q-pa-md ">
  <q-layout class="layaout" view="lHh lpr lFf" container style="height: 500px;">
     <q-header  style= "background-color: black; height:110px ; width:1800px; position:static;">
      <q-toolbar>
        <q-toolbar-title class=" uyeoltext text-h6 q-pt-lg" style="text-align:center"> Üye ol, yeni sezonu ve koleksiyonlarımızı sen keşfet!
        </q-toolbar-title>
      </q-toolbar>
       <q-toolbar> <q-btn
          class="q-px-xl q-py-xs"
          style="position: absolute; top: -40px; left: 1125px;"
          label="Üye Ol"
          color="red-10"
          @click="open('right')"
          size="22px"
          square
             >

            </q-btn>


             </q-toolbar>
  </q-header>


    <q-page-container class="page-container">





      <q-dialog v-model="dialog" :position="position">
        <q-card class="uyeolkarti" style="width: 500px; height: 1000px;">
     <q-card-section>
       <div  class="cancelbtn">
        <q-btn icon="close" flat  dense v-close-popup></q-btn>
         </div>

       <q-ıcon class="nb_icon">
      <svg  xmlns="http://www.w3.org/2000/svg" width="70" height="200" fill="red" class="box" viewBox="24 24 500 500">
<path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z"/>
   </svg>
        </q-ıcon>

        <div class="text1">Üye ol,  yeni sezonu ve koleksiyonlarımızı sen keşfet!.</div>
        <div class="text2">Kampanya ve yeniliklerden ilk önce haberdar olmak için kayıt olun.</div>
         <div class="q-pa-md" style="max-width: 400px">

  <q-form
    @submit="onSubmit"
    @reset="onReset"
    class="q-gutter-lg"
  >
    <q-input
      color="black"
      v-model="mail"
      label="E-Mail"
      :rules="[ val => val && val.length > 0 ]"
    ></q-input>

    <q-checkbox v-model="selection" label="Kampanya, ürün ve yeniliklerden haberdar edilmek için tarafıma e-posta ve/veya SMS gönderilmesine açık rızamla izin veriyorum.E-posta adresiniz, e-bülten üyesi olarak kampanya, ürün ve yeniliklerden haberdar edilebilmeniz için alınmaktadır. Kişisel verilerin işlenmesi ile ilgili detaylı bilgiye buradan ulaşabilirsiniz." color="red"></q-checkbox>
    </q-form>
</div>
         <div>
           <q-btn class="aboneolbtn" outline style="color:red; width:250px; height:50px;" label="Abone Ol"></q-btn>
         </div>
      </q-card-section>
    </q-card>
    </q-dialog>





      <q-page >

          <div class="footer-alt">
      <a href="#" style="color:black;">Kargo Takip</a>
      <br><br>
      <a href="#" style="color:black;">Bize Ulaşın</a>
      <br><br>
      <a href="#" style="color:black;">Mağazalar</a>
       </div>
    <div class="kurumsal">
      <strong> Hakkımızda </strong>
      <br><br>
      <a href="#" style="color:black;">Veri Politikası</a>
      <br><br>
      <a href="#" style="color:black;">KVKK</a>
      <br><br>
      <a href="#" style="color:black;">Ticari Ünvan</a>
      <br><br>
      <a href="#" style="color:black;">Gizlilik ve Çerez</a>
      <br><br>
      <a href="#" style="color:black;">Çerez Ayarları</a>
    </div>
    <div class="musteri_iliskileri">
      <strong>Müşteri İlişkileri</strong>
      <br><br>
      <a href="#" style="color:black;">İade ve Değişim</a>
      <br><br>
      <a href="#" style="color:black;">Sıkça Sorunlan Sorular</a>
      <br><br>
      <a href="#" style="color:black;">İşlem Rehberi Sıkça</a>
      <br><br>
      <a href="#" style="color:black;">Mesafeli Satış Sözleşmesi</a>
      <br><br>
      <a href="#" style="color:black;">Ürün İnceleme</a>
      <br><br>
      <a href="#" style="color:black;">Gizlilik Sözleşmesi</a>
      <br><br>
      <a href="#" style="color:black;">Kullanıcı Sözleşmesi</a>
      <br><br>
      <a href="#" style="color:black;">Ürün Bakımı</a>
    </div>
      <div class="nb_icon">
       <q-icon>
      <svg  xmlns="http://www.w3.org/2000/svg" width="70" height="70" fill="red" class="box" viewBox="0 0 -700 -700">
<path d="M12.169 10.306l1.111-1.937 3.774-.242.132-.236-3.488-.242.82-1.414h6.47c1.99 0 3.46.715 2.887 2.8-.17.638-.979 2.233-3.356 2.899.507.06 1.76.616 1.54 2.057-.384 2.558-3.69 3.774-5.533 3.774l-7.641.006-.38-1.48 4.005-.28.137-.237-4.346-.264-.467-1.755 6.178-.363.137-.231-11.096-.693.534-.925 11.948-.775.138-.231-3.504-.231m5 .385l1.1-.006c.738-.005 1.502-.34 1.783-1.018.259-.632-.088-1.171-.55-1.166h-1.067l-1.266 2.19zm-1.27 2.195l-1.326 2.305h1.265c.589 0 1.64-.292 1.964-1.128.302-.781-.253-1.177-.638-1.177h-1.266zM6.26 16.445l-.77 1.315L0 17.77l.534-.923 5.726-.402zm.385-10.216l4.417.006.336 1.248-5.276-.33.523-.924zm5 2.245l.484 1.832-7.542-.495.528-.92 6.53-.417zm-3.84 5.281l-.957 1.661-5.32-.302.534-.924 5.743-.435z"/>


</svg>
</q-icon>

   <p> Spor ayakkabıdan daha büyük bir şey için mücadele ediyoruz.
<br>Tutkularının peşine kapılanları temsil ediyoruz. <br>Sporu geliştiriyoruz.
İnsanları ve gezegeni koruyoruz. <br>Birlikte, dünyadaki topluluklarda anlamlı bir değişime öncülük ediyoruz.<br> Şimdi ya da asla: Anı yaşa.
   </p>
</div>
       </q-page>

    </q-page-container>
  </q-layout>
</div>
 </template>
 <style >
.text1{
  font-size:large;
  padding: 0px 70px 0px;
}
.text2{
  margin-top:15px;
  padding: 0px 40px 0px;
}

 .footer-alt {
  margin-left:300px;
  margin-top:60px;
}

.kurumsal {
margin-left:530px;
margin-top:-106px;
}

.musteri_iliskileri {
margin-left:760px;
margin-top:-234px;
}

.nb_icon{
margin-left:1250px;
margin-top:-382px;
}

.uyeoltext{
margin-top:10px;
margin-right:100px;
}
.uyeolbotunu{
 margin-left:1105px;
 margin-top:-75px;

}

.uyeolkarti {
margin-top:-50px;
}

.page-container{
margin-top:-100px;
}

.layaout{
margin-left:100px;

}
.aboneolbtn:hover{
  border: 2px solid #fa0101;
}

.aboneolbtn{
   margin-left:100px;
}

 </style>

<script>
import { ref } from 'vue'

export default {
  setup () {
    const dialog = ref(true)
    const position = ref('top')

    return {

      confirm: ref(false),
      prompt: ref(false),
      address: ref(''),
      dialog,
      position,

      open (pos) {
        position.value = pos
        dialog.value = true
      }


    }
  }
}
</script>
