import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";
import Contact from "../views/Contact.vue";
import NotFound from "../views/NotFound.vue";
import ProductDetails from "../views/ProductDetails.vue";


const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/contactez-nous",
    name: "Contact",
    component: Contact,
  },
  {
    path: "/contact",
    redirect: { name: "Contact" },
  },
  {
    path: "/products/:name",
    name: "product-details",
    component: ProductDetails,
    props: true,
  },
  {
    path: "/:catchAll(.*)",
    component: NotFound,
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
});

export default router;
