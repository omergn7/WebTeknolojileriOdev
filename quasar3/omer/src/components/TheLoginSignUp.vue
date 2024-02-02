<template>
<div class="q-pa-md" style="max-width: 500px; margin-left: 200px;" >

 <q-tabs

       v-model="tab"
       dense
       class=" text-black q-pa-xls"
       active-color="red"
       indicator-color="red"

     >
       <q-tab name="Giriş" label="Giriş"></q-tab>
       <q-tab name="Kayıt Ol" label="Kayıt Ol"></q-tab>
     </q-tabs>

   <q-separator color=dark></q-separator>

 <q-tab-panels v-model="tab" animated>
 <q-tab-panel name="Giriş">
   <q-form class="q-gutter-md">
     <q-input
       color=black
       v-model="Emaill"
       label="*Eposta"
     ></q-input>

     <q-input
        color=black
        v-model="parola"
        label="*Parola"
        :type="isPwd ? 'sifre' : 'text'">
          <template v-slot:append>
          <q-icon
            :name="isPwd ? 'visibility_off' : 'visibility'"
            class="cursor-pointer"
            @click="isPwd = !isPwd"
          ></q-icon>
        </template>

        </q-input>

     <q-card-section class="text-right q-mx-none q-my-none q-px-none q-py-none">
           <a href="#" style="color:black;" class="text-black-0">Parolanızı mı unuttunuz</a>
         </q-card-section>

     <div class="q-mt-xsq-mx-none q-my-none q-px-none q-py-none">
     <div class="q-gutter-sm">
     <q-checkbox v-model="selection" val="red" label="Beni Hatırla" color="red" />
     </div>
     </div>


     <div>
       <q-btn @click="login()" label="Giriş" type="button" color="red"></q-btn>
     </div>
   </q-form>

 <q-card-section class="text-left q-mx-xs q-my-xs q-px-xs q-py-xs">

  <a href="#" style="color:black;" class="text-black-0">Hesabınız yok mu? Şimdi bir tane oluşturun</a>

         </q-card-section>
   </q-tab-panel>

   <q-tab-panel name="Kayıt Ol">
     <q-input color=dark v-model="ad" label="Adınız"></q-input>
     <q-input color=dark v-model="soyad" label="Soyadınız"></q-input>
     <q-input color=dark v-model="email" label="E-Mail"></q-input>
     <q-input color=dark v-model="ceptelefonu" label="Cep Telefonu"></q-input>
     <q-input
        color=black
        v-model="sifre"
        label="*Parola"
        :type="isPwd ? 'sifre' : 'text'">
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
       <q-btn @click="signup()" label="Giriş" type="Giriş" color="red"></q-btn>
     </div>
     </div>
     </q-tab-panel>

    </q-tab-panels>

 </div>
</template>

<script>
import { ref } from 'vue';
import { useMyStore } from 'src/stores/example-store';
import { getFirestore } from 'firebase/firestore';
import { auth } from 'src/boot/firebase';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { query, where, getDocs } from 'firebase/firestore';

export default {
  data() {
  return {
    Emaill: '',
    parola: '',
  };
},
  setup() {
    const sifre = ref('');
    const ad = ref('');
    const soyad = ref('');
    const email = ref(''); // Doğru değişken adı
    const ceptelefonu = ref('');
    const hata = ref(null);
    const myStore = useMyStore();
    const Emaill = ref('');
    const parola = ref('');

    const login = async () => {
      try {
        const auth = getAuth(); // Auth modülünü al

        // Kullanıcıyı email ve şifre ile giriş yap
        const userCredential = await signInWithEmailAndPassword(auth, Emaill.value, parola.value);
        const user = userCredential.user;

        // Kullanıcının Firestore'daki verisini al
        const firestore = getFirestore();
        const usersCollection = query(getFirestore(), 'users', where('uid', '==', user.uid));
        const userSnapshot = await getDocs(usersCollection);

        if (userSnapshot.empty) {
          console.error('Hatalı Giriş: Kullanıcı bulunamadı');
          return;
        }

        const userData = userSnapshot.docs[0].data();

        console.log('Giriş Başarılı', userData);
        // Burada başarıyla giriş yaptığınızda yönlendirme veya başka işlemler yapabilirsiniz.
      } catch (error) {
        console.error("Hata Mesajı :", error.message,console.log(Emaill.value));
      }
    };

    const signup = async () => {
      try {
        const payload = {
          ad: ad.value,
          soyad: soyad.value,
          email: email.value, // Doğru değişken adı
          ceptelefonu: ceptelefonu.value,
          sifre: sifre.value,
        };

        // Firestore'a ekleme işlemi
        await myStore.signup(payload);

        // Firebase Firestore'dan dönen değeri kontrol etmek için console.log ekleyebilirsiniz
        console.log("Veri Firestore'a eklendi:", payload);
      } catch (error) {
        console.error('Firebase Firestore Hatası:', error);
        hata.value = error.message;
      }
    };

    const onMainClick = () => {
      // Dropdown click event handler
    };


    return {

      ad,
      soyad,
      email,
      ceptelefonu,
      sifre,
      myStore,
      isPwd: ref(true),
      tab: ref('mails'),
      selection: ref(['white', 'red']),
      selectiona: ref(['white', 'red']),
      signup,
      onMainClick,
      hata,
      login, // login fonksiyonunu setup içinden return edin
    };

  },

};
</script>
