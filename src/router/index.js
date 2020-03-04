import Vue from 'vue'
import VueRouter from 'vue-router'
import store from '../store'

Vue.use(VueRouter)

const routes = [
    //#### Site Specific Routes
    {
        path: '/',
        name: 'home',
        component: () => import('../views/Home')
    },
    {
        path: '/about',
        name: 'about',
        component: () => import('../views/About.vue')
    },
    //#### User routes
    {
        path: '/me',
        name: 'me',
        component: () => import('../views/Me.vue')
    },
    {
        path: '/account_created',
        name: 'account_created',
        component: () => import('../views/Account_Created.vue')
    },
    {
        path: '/account_activate/:token',
        name: 'account_activate',
        component: () => import('../views/Account_Activate.vue')
    },
    //##### Auth Routes
    {
        path: '/login',
        name: 'login',
        component: () => import('../views/Login.vue')
    },
    {
        path: '/register',
        name: 'register',
        component: () => import('../views/Register.vue')
    },
    {
        path: '/logout',
        name: 'logout',
        component: () => import('../views/Logout.vue')
    },
    //##### Modules Routes
    {
        path: '/rainfall',
        name: 'rainfall',
        component: () => import('../views/Rainfall.vue')
    },
    {
        path: '/waterlevel',
        name: 'waterlevel',
        component: () => import('../views/Waterlevel.vue')
    },
    {
        path: '/devices',
        name: 'devices',
        redirect: {name: 'dashboard'},
        component: () => import('../views/DevicesContainer.vue'),
        children: [
            {
                path: 'dashboard',
                name: 'dashboard',
                component: () => import('../views/Dashboard.vue')
            },
            {
                path: 'more',
                component: () => import('../views/Devices.vue'),
                children: [
                    {
                        path: 'list',
                        name: 'device-list',
                        component: () => import('../components/Device/DeviceList.vue')
                    },
                    {
                        path: 'map',
                        name: 'device-map',
                        component: () => import('../components/Device/DeviceMap.vue'),
                    }
                ]
            }
        ]
    }, {
        path: '/device/:dev_id',
        name: 'device-peek',
        component: () => import('../components/Device/DeviceDataLatest.vue'),
        props: true
    },

    {
        path: '/archive',
        name: 'archive',
        redirect: {name: 'archive-map'},
        component: () => import('../views/Archive.vue'),
        children: [
            {
                path: 'map',
                name: 'archive-map',
                component: () => import('../components/Archive/ArchiveMap.vue')
            },
            // {
            //   path: 'downloader',
            //   name: 'archive-downloader',
            //   component: () => import('../components/Archive/ArchiveDownloader.vue')
            // }
        ]
    },
    {
        path: '/alerts',
        name: 'alerts',
        component: () => import('../views/Alerts.vue')
    },
    {
        path: '/iec',
        name: 'iec',
        component: () => import('../views/IEC.vue')
    },
    //Error Pages
    {
        path: '*',
        name: '404',
        component: () => import('../views/NotFound.vue')
    },
    {
        path: '/403',
        name: '403',
        component: () => import('../views/403.vue')
    },
    {
        path: '/debug',
        name: 'debug',
        component: () => import('../views/Debug.vue')
    },

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

router.beforeEach((to, from, next) => {
    store.commit('showLoader');
    next();
});

//router.afterEach((to, from) => {
router.afterEach(() => {
    setTimeout(() => {
        store.commit('hideLoader');
        //store.commit('clearErrors')
    }, 1000);
});

export default router
