import { defineStore } from 'pinia';
import { db } from 'src/boot/firebase';
import { addDoc, collection } from 'firebase/firestore';

interface User {
  ad?: string;
  soyad?: string;
  Email?: string;
  ceptelefonu?: string;
  sifre?: string;
  
}

export const useMyStore = defineStore({
  id: 'myStore',
  state: () => ({
    user: {} as User,
  }),
  actions: {
    async signup(payload: User) {
      try {
        const docRef = await addDoc(collection(db, 'users'), payload);
        this.setUser(payload);
        console.log('Document added with ID: ', docRef.id);
      } catch (error) {
        console.error('Error adding document: ', error);
      }
    },
    setUser(user: User) {
      this.user = user;
    },
  },
});
