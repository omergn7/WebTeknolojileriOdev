<template>
<div class="q-pa-md" style="max-width: 500px">

 <q-tabs
       v-model="tab"
       dense
       class=" text-black"
       active-color="red"
       indicator-color="red"

     >
       <q-tab name="Giriş" label="Giriş"></q-tab>
       <q-tab name="Kayıt Ol" label="Kayıt Ol"></q-tab>
     </q-tabs>

   <q-separator color=dark></q-separator>

 <q-tab-panels v-model="tab" animated>
 <q-tab-panel name="Giriş">
   <q-form
     @submit="onSubmit"
     @reset="onReset"
     class="q-gutter-md"
   >
     <q-input
       color=black
       v-model="text1"
       label="*Eposta"
     ></q-input>

     <q-input
        color=black
        v-model="password"
        label="*Parola"
        :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          ></q-icon>
        </template>

        </q-input>

     <q-card-section class="text-right q-mx-none q-my-none q-px-none q-py-none">
           <u class="text-black-0">Parolanızı mı unuttunuz</u>
         </q-card-section>

     <div class="q-mt-xsq-mx-none q-my-none q-px-none q-py-none">
     <div class="q-gutter-sm">
     <q-checkbox v-model="selection" val="red" label="Beni Hatırla" color="red" />
     </div>
     </div>


     <div>
       <q-btn label="Giriş" type="Giriş" color="red"></q-btn>
     </div>
   </q-form>

 <q-card-section class="text-left q-mx-xs q-my-xs q-px-xs q-py-xs">
           <u class="text-black-0">Hesabınız yok mu? Şimdi bir tane oluşturun</u>
         </q-card-section>
   </q-tab-panel>

   <q-tab-panel name="Kayıt Ol">
     <q-input color=dark v-model="text3" label="Adınız"></q-input>
     <q-input color=dark v-model="text4" label="Soyadınız"></q-input>
     <q-input color=dark v-model="text5" label="E-Mail"></q-input>
     <q-input color=dark v-model="text6" label="Cep Telefonu"></q-input>
     <q-input
        color=black
        v-model="password"
        label="*Parola"
        :type="isPwd ? 'password' : 'text'">
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          ></q-icon>
        </template>

        </q-input>
     <h1 class="text-subtitle2">Parola Gereksinimleri</h1>
     <ul class="text-left">
     <li >Minumum 6 karakter</li>
     <li>En az bir büyük harf</li>
     <li>En az bir küçük harf</li>
     <li>En az bir sayı</li>
     <li>En az bir özel karakter (! @ # $ % &)</li>
  </ul>
     <div class="q-gutter-y-xs">
     <div>
     <q-checkbox v-model="selection" val="red" label="Üyelik Sözleşmesini ve Kişisel Verilerimin Korunması'nı ve Aydınlatma Metnini okudum, kabul ediyorum" color="red" />
     </div>

     <div>
     <q-checkbox v-model="selectiona" val="red" label="Kampanyalar ile ilgili eposta mesajlarını almak istiyorum ve Sms ile özel indirimlerden haberdar olmak istiyorum, Açık Rıza Metnini,okudum kabul ediyorum." color="red" />
     </div>

     <div>
       <q-btn label="Giriş" type="Giriş" color="red"></q-btn>
     </div>
     </div>
     </q-tab-panel>

    </q-tab-panels>

 </div>
</template>

<script>
import { ref } from 'vue'

export default {
  setup () {


const name = ref(null)
const age = ref(null)
const accept = ref(false)

return {
  text1: ref(''),
  password: ref(''),
  isPwd: ref(true),
  text3: ref(''),
  text4: ref(''),
  text5: ref(''),
  text6: ref(''),
  text7: ref(''),


  tab: ref('mails'),
  splitterModel: ref(20),
  selection: ref([ 'white', 'red' ]),
  selectiona: ref([ 'white', 'red' ]),
  onSubmit () {
        if (accept.value !== true) {
          $q.notify({
            color: 'red-5',
            textColor: 'white',
            icon: 'warning',
            message: 'Zorunlu alanları doldurunuz'
          })
        }
        else {
          $q.notify({
            color: 'green-4',
            textColor: 'white',
            icon: 'cloud_done',
            message: 'Submitted'
          })
        }
      },

  onReset () {
    name.value = null
    age.value = null
    accept.value = false
  }

}
  }
}
</script>
