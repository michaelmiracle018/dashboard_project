import React, { lazy } from "react";

// const Ecommerce = lazy(() => import("./pages/Ecommerce"));
const Orders = lazy(() => import("./pages/Orders"));
const Employees = lazy(() => import("./pages/Employees"));
const Kanban = lazy(() => import("./pages/Kanban"));
const Editor = lazy(() => import("./pages/Editor"));
const Calendar = lazy(() => import("./pages/Calendar"));
const ColorPicker = lazy(() => import("./pages/ColorPicker"));
const Line = lazy(() => import("./pages/Charts/Line"));
const Area = lazy(() => import("./pages/Charts/Area"));
const Pie = lazy(() => import("./pages/Charts/Pie"));
const Bar = lazy(() => import("./pages/Charts/Bar"));
const Financial = lazy(() => import("./pages/Charts/Financial"));
const ColorMapping = lazy(() => import("./pages/Charts/ColorMapping"));
const Pyramid = lazy(() => import("./pages/Charts/Pyramid"));
const Stacked = lazy(() => import("./pages/Charts/Stacked"));
const Customers = lazy(() => import("./pages/Customers"));

const coreRoutes = [
  {
    path: "/orders",
    title: "orders",
    component: Orders,
  },
  {
    path: "/employees",
    title: "Employees",
    component: Employees,
  },
  {
    path: "/kanban",
    title: "Kanban",
    component: Kanban,
  },
  {
    path: "/editor",
    title: "Editor",
    component: Editor,
  },
  {
    path: "/calendar",
    title: "Calendar",
    component: Calendar,
  },
  {
    path: "/colorPicker",
    title: "ColorPicker",
    component: ColorPicker,
  },
  {
    path: "/line",
    title: "Line",
    component: Line,
  },
  {
    path: "/area",
    title: "Area",
    component: Area,
  },
  {
    path: "/financial",
    title: "Financial",
    component: Financial,
  },
  {
    path: "/colorMapping",
    title: "ColorMapping",
    component: ColorMapping,
  },
  {
    path: "/pyramid",
    title: "Pyramid",
    component: Pyramid,
  },
  {
    path: "/stacked",
    title: "Stacked",
    component: Stacked,
  },
  {
    path: "/customers",
    title: "Customers",
    component: Customers,
  },
  {
    path: "/pie",
    title: "Pie",
    component: Pie,
  },
  {
    path: "/bar",
    title: "Bar",
    component: Bar,
  },
];

const routes = [...coreRoutes];
export default routes;
