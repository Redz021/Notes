import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/Login.vue')
  },
  {
    path: '/student',
    name: 'studentIndex',
    component: () => import('../views/student/studentIndex.vue'),
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'courses',
        name: 'studentCourses',
        component: () => import('../views/student/studentCourses.vue')
      },
      {
        path: 'reports',
        name: 'studentReports',
        component: () => import('../views/student/studentReports.vue')
      }
    ]
  },
  {
    path: '/teacher',
    name: 'teacherIndex',
    component: () => import('../views/teacher/teacherIndex.vue'),
    meta: {
      requireAuth: true
    },
    children: [
      {
        path: 'courses',
        name: 'teacherCourses',
        component: () => import('../views/teacher/teacherCourses.vue')
      },
      {
        path: 'reports',
        name: 'teacherReports',
        component: () => import('../views/teacher/teacherReports.vue')
      }
    ]
  }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
});
import userDataService from '../services/userDataService';

router.beforeEach((to, from, next) => {
  // console.log(store.state);
  if (to.meta.requireAuth) {
    let stat = -1;
    userDataService
      .validate()
      .then(res => {
        stat = res.data.code;
        if (stat == 0) {
          router.push('/login');
        } else {
          next();
        }
      })
      .catch(err => {
        console.error(err);
      });
  } else {
    next();
  }
});

export default router;
