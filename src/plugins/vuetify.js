import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdiSvg',
  },
  theme: {
    themes: {
      light: {
        /*primary: '#3f51b5',
        secondary: '#FF9800',
        accent: '#2196f3',
        error: '#f44336',
        info: '#03a9f4',
        success: '#4caf50',
        warning: '#607d8b',*/
        primary: '#2196f3',
        secondary: '#FF9800',
        accent: '#FFC107',
        error: '#f44336',
        warning: '#ffc107',
        info: '#00bcd4',
        success: '#4caf50'
      },
    },
    dark: false
  },
});
