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
                me.updatePolylineInputField(value)
            });

            EventBus.$on("draw-polyline-deleted", function () {
                me.clearPolylineInputField();
            });

            EventBus.$on("text-geojson-changed", function (value) {
                me.updatePolylineInputField(JSON.parse(value));
            });

        },
        methods: {
            onTextareaInput() {
                EventBus.$emit("text-polyline-changed", this.value);
            },
            updatePolylineInputField(value) {
                this.value = polyline.fromGeoJSON(value, 5);

            },
            clearPolylineInputField(){
                this.value = ""
            }
        },
        name: "PolylineTextArea",
        props: {
            msg: String
        }
    };
</script>

<style scoped>
  textarea{
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
