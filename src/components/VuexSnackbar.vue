<template>
    <v-snackbar
            :value="isvisible"
            :color="color"
            bottom
            :timeout="timeout"
            :class="$vuetify.breakpoint.mdAndUp ? 'mb-10' : 'mb-6'"
    >
        {{ text !== '' ? text : '...'}}
    </v-snackbar>
</template>

<script>
    import {mapState} from 'vuex'

    export default {
        name: "VuexSnackbar",
        computed: {
            ...mapState({
                isvisible: state => state.snackbar.visible,
                color: state => state.snackbar.color,
                text: state => state.snackbar.text,
                timeout: state => state.snackbar.timeout
            })
        }
    }
</script>

<style scoped>

</style>