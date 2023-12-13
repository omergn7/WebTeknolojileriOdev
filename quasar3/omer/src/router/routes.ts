import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue') },
      {path: 'comp1', component: () => import('components/TheLoginSignUp.vue') },
      {path: 'comp2', component: () => import('components/TheCarousel.vue') },
      {path: 'comp3', component: () => import('components/TheCard.vue') },
      {path: 'comp4', component: () => import('components/TheComp1.vue') },
      {path: 'comp5', component: () => import('components/TheCarouselCard.vue') },
      {path: 'comp6', component: () => import('components/TheFooter.vue') },
      {path: 'comp7', component: () => import('components/TheHMainCard.vue') },
      {path: 'comp8', component: () => import('components/TheNavbar.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
