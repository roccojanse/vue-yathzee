import { createRouter, createWebHistory } from 'vue-router';
import SplashView from '@views/SplashView.vue';
import TitleView from '@views/TitleView.vue';
import GameView from '@views/GameView.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'splashview',
      component: SplashView,
    },
    {
      path: '/title',
      name: 'titleview',
      component: TitleView,
    },
    {
      path: '/game',
      name: 'gameview',
      component: GameView,
    },
    // {
    //   path: '/about',
    //   name: 'about',
    //   // route level code-splitting
    //   // this generates a separate chunk (About.[hash].js) for this route
    //   // which is lazy-loaded when the route is visited.
    //   component: () => import('../views/AboutView.vue'),
    // },
  ],
});

export default router;
