import About from "./views/About.vue";
import Login from "./views/LoginScreen.vue";
import Classes from "./views/MainScreen.vue";

export default [
  {
    path: "/",
    name: "Home",
    component: () => lazyLoadView(import("./views/Home.vue")),
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/about",
    name: "About",
    component: About,
  },
  {
    path: "/classes",
    redirect: "/classes/1ve423d", // 1ve423d => default code of first class
  },
  {
    path: "/classes/:code",
    name: "Classes",
    component: Classes,
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "message",
        alias: [""],
        name: "Message",
        component: () => lazyLoadView(import("./views/MessageScreen.vue")),
      },
      {
        path: "files",
        name: "Files",
        component: () => import("./views/Files.vue"),
      },
      {
        path: "people",
        name: "People",
        component: () => import("./views/People.vue"),
      },
      {
        path: "information",
        name: "Information",
        component: () => import("./views/ClassInformation.vue"),
      },
      {
        path: "settings",
        name: "Settings Class",
        component: () => import("./views/SettingsClassScreen.vue"),
      },
    ],
  },
  {
    path: "*",
    name: "Coming soon",
    component: () => import("./views/comingSoon.vue"),
  },
  {
    path: "/settings",
    redirect: "/settings/profile",
  },
  {
    path: "/settings",
    alias: ["/settings/profile"],
    name: "SettingsAccountScreen",
    component: () => import("./views/SettingsAccountScreen.vue"),
    meta: {
      requiresAuth: true,
    },
    children: [
      {
        path: "profile",
        name: "SettingsProfileScreen",
        component: () => import("./views/SettingsProfileScreen.vue"),
      },
      {
        path: "message",
        name: "SettingsMessage",
        component: () => import("./views/SettingsMessageScreen.vue"),
      },
      {
        path: "notifications",
        name: "SettingsNotification",
        component: () => import("./views/SettingsNotificationScreen.vue"),
      },
    ],
  },
];
function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: require("./views/LoadingScreen.vue").default,
    delay: 4000,
    error: require("./views/TimeoutScreen.vue").default,
    timeout: 10000,
  });

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children);
    },
  });
}
