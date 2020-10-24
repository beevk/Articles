import Vue from 'vue';
import VueRouter from 'vue-router';
import Home from '../views/Home.vue';
import ArticleDetails from '../views/ArticleDetails.vue';
import NotFound from '../views/Error404.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/article/:name',
    name: 'ArticleDetails',
    component: ArticleDetails,
  },
  {
    path: '*',
    name: '404',
    component: NotFound,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
