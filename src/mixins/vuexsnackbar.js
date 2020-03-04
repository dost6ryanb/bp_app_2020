import VuexSnackbar from "../components/VuexSnackbar"
import {mapMutations} from "vuex"

export const vuexsnackbarMixin = {
    components: {
        VuexSnackbar
    },
    created() {
        console.log('vuexsnackbarMixin')
    },
    methods: {
        ...mapMutations({
            $_vuexsnackbarMixin_showSnackbar : 'showSnackbar', /* Made verbose so that eslint wont nag */
            $_vuexsnackbarMixin_hideSnackbar : 'hideSnackbar', /* Made verbose so that eslint wont nag */
        })
    }
}