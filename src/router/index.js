import { createRouter, createWebHistory } from 'vue-router'
import GalleryList from '../views/GalleryList.vue'
import GalleryDetails from '../views/GalleryDetails.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'GalleryList',
    component: GalleryList,
  },
  {
    path: '/photo/:id',
    name: 'GalleryDetails',
    props: true,
    component: GalleryDetails,
  },
  {
    path: '/about',
    name: 'About',
    component: About,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
