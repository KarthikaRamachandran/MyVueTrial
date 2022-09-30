import { createRouter, createWebHistory } from "vue-router";
import QuickAccessView from "../views/QuickAccessView.vue";
import TimeEntryView from "../views/TimeEntryView.vue";
import MyInformationView from "../views/MyInformationView.vue";
import MyPayslipsView from "../views/MyPayslipsView.vue";
import LeaveView from "../views/LeaveView.vue";
import BenefitsView from "../views/BenefitsView.vue";
import OrganizationalChartView from "../views/OrganizationalChartView.vue";
import MyTeamView from "../views/MyTeamView.vue";
import Links_Data from "../assets/menuLinks.json";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [{
    path: "/quick_access",
    name: "Quick Access",
    component: QuickAccessView
  },{
    path: "/timesheet",
    name: "Time Entry",
    component: TimeEntryView
  },{
    path: "/my-information",
    name: "My Information",
    component: MyInformationView
  },{
    path: "/payslips",
    name: "Payslips",
    component: MyPayslipsView
  },{
    path: "/leaves",
    name: "Leave",
    component: LeaveView
  },{
    path: "/benefits",
    name: "Benefits",
    component: BenefitsView
  },{
    path: "/orgchart",
    name: "Organizational Chart",
    component: OrganizationalChartView
  },{
    path: "/my-team",
    name: "My Team",
    component: MyTeamView
  }]
  // routes: [
  //   {
  //     path: "/",
  //     name: "home",
  //     component: HomeView,
  //   },
  //   {
  //     path: "/about",
  //     name: "about",
  //     // route level code-splitting
  //     // this generates a separate chunk (About.[hash].js) for this route
  //     // which is lazy-loaded when the route is visited.
  //     component: () => import("../views/AboutView.vue"),
  //   },
  // ],
});

export default router;
