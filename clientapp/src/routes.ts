import { RouteConfig } from 'vue-router';
import Home from './components/Home.vue';
import World from './components/World.vue';

const routes: RouteConfig[] = [
  {
    component: Home,
    name: 'Home',
    path: '/',
    meta: {
      menuBar: true,
    },
  },
  {
    component: World,
    name: 'World',
    path: '/world/:id',
    meta: {
      menuBar: true,
    },
  },
];

export default routes;
