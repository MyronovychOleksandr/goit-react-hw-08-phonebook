import { lazy } from "react";

export default [
  {
    path: "/",
    exact: true,
    label: "Home",
    component: lazy(() => import("./views/Home.js")),
    private: false,
    restricted: false,
  },
  {
    path: "/register",
    exact: true,
    label: "Register",
    component: lazy(() => import("./views/Register.js")),
    private: false,
    restricted: true,
  },
  {
    path: "/login",
    exact: true,
    label: "Login",
    component: lazy(() => import("./views/Login.js")),
    private: false,
    restricted: true,
  },
  {
    path: "/phonebook",
    exact: true,
    label: "Phonebook",
    component: lazy(() => import("./views/Phonebook.js")),
    private: true,
    restricted: false,
  },
];
