import Vue from 'vue';
import router from './../router'
import VueAnalytics from 'vue-analytics'

Vue.use(VueAnalytics, {
    //id: 'UA-66488872-3', // beta
    id: 'UA-66488872-4', // staging
    router,
    debug: {
        enabled: false, //!isProd,
        sendHitTask: process.env.NODE_ENV === 'production'
    }
})