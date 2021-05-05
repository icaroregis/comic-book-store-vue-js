import Vue from "vue";
import VueRouter from "vue-router";
import ComicBookList from "../views/ComicBookList.vue";
import ComicDetails from "../views/ComicDetails.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "ComicBookList",
    component: ComicBookList,
  },
  {
    path: "/comicdetails",
    name: "ComicDetails",
    component: ComicDetails,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
