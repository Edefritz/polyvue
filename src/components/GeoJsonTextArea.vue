<template>
    <div class="">
        <textarea spellcheck="false" v-on:input="onTextareaInput" v-model="value"></textarea>
    </div>
</template>

<script>
    import EventBus from "./EventBus";
    import polyline from "@mapbox/polyline";

    export default {
        data() {
            return {
                value: ""
            };
        },
        mounted() {
            const me = this;
            EventBus.$on("draw-polyline-created", function (value) {
                me.updateInputField(value)
            });

            EventBus.$on("draw-polyline-deleted", function () {
                me.clearInputField();
            });

            EventBus.$on("text-polyline-changed", function (value) {
                me.updateInputField(polyline.toGeoJSON(value, 5));
            });
        },
        methods: {
            onTextareaInput() {
                EventBus.$emit("text-geojson-changed", this.value);
            },
            updateInputField(value) {
                this.value = JSON.stringify(value, null, 2);

            },
            clearInputField() {
                this.value = ""
            }
        },
        name: "GeoJsonTextArea",
        props: {
            msg: String
        }
    };
</script>

<style scoped>
    textarea {
        height: 300px;
        width: 100%;
        border: 0;
        resize: none;
        padding: 5px;
        color: white;
        background-color: rgb(13, 14, 28);
        font-family: monospace;
    }
</style>
