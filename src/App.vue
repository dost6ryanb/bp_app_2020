<template>
    <v-app>
        <v-navigation-drawer
                app
                v-model="drawer"
                clipped
                temporary
                color="primary"
                dark
        >
            <v-list>
                <v-list-item class="py-4">
                    <v-row no-gutters>
                        <v-col cols="12">
                            <h2 class="headline font-weight-medium">Bantay Panahon</h2>
                        </v-col>
                        <v-col cols="12">
                            <h3 class="body-1 font-weight-light">by DOST VI</h3>
                        </v-col>
                    </v-row>
                </v-list-item>
                <template v-for="item in menuSideItems">
                    <v-list-group
                            v-if="item.children"
                            :key="item.title"
                            :prepend-icon="item.icon"
                            no-action
                            color="white"
                    >
                        <template v-slot:activator>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ item.title }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item
                                v-for="(child, i) in item.children"
                                :key="i"
                                :to="child.link"
                                exact
                                dense
                        >
                            <v-list-item-action v-if="child.icon">
                                <v-icon>{{ child.icon }}</v-icon>
                            </v-list-item-action>
                            <v-list-item-content>
                                <v-list-item-title>
                                    {{ child.title }}
                                </v-list-item-title>
                            </v-list-item-content>
                        </v-list-item>
                    </v-list-group>
                    <v-list-item
                            v-else
                            :key="item.title"
                            :to="item.link"
                            exact

                    >
                        <v-list-item-action>
                            <v-icon>{{ item.icon }}</v-icon>
                        </v-list-item-action>
                        <v-list-item-content>
                            <v-list-item-title>
                                {{ item.title }}
                            </v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </template>
            </v-list>
        </v-navigation-drawer>
        <v-app-bar
                app
                clipped-left
                color="primary"
                dark
        >
            <v-app-bar-nav-icon @click="drawer = !drawer" class="d-lg-none"></v-app-bar-nav-icon>

            <v-toolbar-title class="pl-0 pr-4 mx-0">
                <router-link tag="span" style="cursor: pointer" :to="{name: 'home'}" exact>
                    Bantay Panahon
                </router-link>
            </v-toolbar-title>
            <v-toolbar-items class="d-none d-lg-flex">
                <template v-for="(item, i) in menuSideItems">
                    <v-menu v-if="'children' in item" :key="i" offset-y>
                        <template v-slot:activator="{on}">
                            <v-btn v-on="on" :key="item.title" text>
                                {{item.title}}
                            </v-btn>
                        </template>
                        <v-list>
                            <v-list-item
                                    v-for="children in item.children" :key="item.title + children.title"
                                    :to="children.link" exact
                            >
                                <v-list-item-title>{{children.title}}</v-list-item-title>
                            </v-list-item>
                        </v-list>
                    </v-menu>
                    <v-btn v-else text :key="item.title" :to="item.link" exact>{{item.title}}</v-btn>
                </template>
            </v-toolbar-items>
            <v-spacer></v-spacer>

            <v-btn small depressed color="secondary">
                Region 8
            </v-btn>
            <v-menu
                    left
                    bottom
            >
                <template v-slot:activator="{ on }">
                    <v-btn icon v-on="on">
                        <v-icon>{{icons.mdiDotsVertical}}</v-icon>
                    </v-btn>
                </template>

                <v-list>
                    <v-list-item
                            v-for="n in 5"
                            :key="n"
                            @click="() => {}"
                    >
                        <v-list-item-title>Option {{ n }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>
        </v-app-bar>

        <!-- Sizes your content based upon application components -->
        <v-content>
            <vuex-snackbar></vuex-snackbar>
            <v-progress-linear
                    :active="loader"
                    indeterminate
                    absolute
                    top
                    height="6"
                    color="accent"
                    class="loader"
            ></v-progress-linear>

            <!-- Provides the application the proper gutter -->
            <v-container class="pa-0" fluid>
                <router-view></router-view>
            </v-container>
        </v-content>

        <v-footer class="d-none d-lg-flex" color="primary" app fixed clipped-left>
            <span class="white--text ml-2">&copy; 2019 by DOST VI</span>
        </v-footer>
    </v-app>
</template>

<script>
    import {
        mdiDotsVertical,
        mdiHome,
        mdiMap,
        mdiCloud,
        mdiWaves,
        mdiHistory,
        mdiChartBar,
        mdiViewList,
        mdiArchive,
        mdiInformation,
        mdiHeart
    } from '@mdi/js';
    import {mapState} from 'vuex'
    import {vuexsnackbarMixin} from "./mixins/vuexsnackbar"


    export default {
        name: 'App',
        mixins: [vuexsnackbarMixin],
        created() {
            //this is a comment
            console.log('Hello from App.vue in vuetify 2.0')
        },
        computed: {
            ...mapState(['loader'])
        },
        data() {
            return {
                icons: {
                    mdiDotsVertical,
                    mdiHeart
                },
                menuSideItems: [
                    {icon: mdiHome, title: 'Home', link: {name: 'home'}},
                    {icon: mdiCloud, title: 'Rainfall', link: {name: 'rainfall'}},
                    {icon: mdiWaves, title: 'Waterlevel', link: {name: 'waterlevel'}},
                    {
                        icon: mdiInformation,
                        title: 'Devices',
                        link: {name: 'devices'},
                        children: [
                            {icon: mdiChartBar, title: 'Dashboard', link: {name: 'dashboard'}},
                            {icon: mdiViewList, title: 'List of Devices', link: {name: 'device-list'}},
                            {icon: mdiMap, title: 'Devices Map', link: {name: 'device-map'}}
                        ]
                    },
                    {
                        icon: mdiHistory,
                        title: 'Archive',
                        link: {name: 'archive'},
                        children: [
                            {icon: mdiArchive, title: 'Archive Map', link: {name: 'archive-map'}},
                            // {icon: 'cloud_download', title: 'Downloader', link: {name: 'archive-downloader'}},
                        ]
                    },
                    //{icon: 'warning', title: 'Alerts', link: {name: 'alerts'}},
                    // {icon: 'help', title: 'IEC', link: {name: 'iec'}},
                    {icon: mdiInformation, title: '[DEBUG]', link: {name: 'debug'}},
                ],
                menuMoreItems: [],
                drawer: false,
            }
        },
        methods: {}
    };
</script>

<style scoped>
    .loader {
        /*position: absolute;*/
        z-index: 5;
    }
</style>
