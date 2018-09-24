<template>
    <div class="column container">
        <Tabs></Tabs>
        <PolylineTextArea v-show="selectedTab == 1"></PolylineTextArea>
        <GeoJsonTextArea v-show="selectedTab == 2"></GeoJsonTextArea>
    </div>
</template>

<script>
    import PolylineTextArea from './PolylineTextArea'
    import GeoJsonTextArea from './GeoJsonTextArea'
    import EventBus from "./EventBus";
    import Tabs from './Tabs'

    export default {
        data() {
            return {
                value: "",
                selectedTab: 1
            };
        },
        mounted() {
            var me = this;
            EventBus.$on("tab-index-changed", function (value) {
                console.log("tab index has changed", value);
                me.selectedTab = value;
            });

        },
        methods: {
            updateSelectedTab: function (value) {
                this.selectedTab = value;
            }
        },
        name: "LeftContainer",
        components: {
            PolylineTextArea,
            GeoJsonTextArea,
            Tabs
        }
    };
</script>
