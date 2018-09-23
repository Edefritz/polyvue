<template>
  <div class="">
    <textarea v-if="visible" v-on:input="onTextareaInput" v-model="value"></textarea>
  </div>
</template>

<script>
    import EventBus from "./EventBus";
    import polyline from "@mapbox/polyline";

    export default {
        data() {
            return {
                value: "",
                visible: true
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

            EventBus.$on("tab-index-changed", function (value) {
                console.log(value)
                if (value == 1){
                  me.visible = true
                } else {
                  me.visible = false
                }
            });
        },
        methods: {
            onTextareaInput() {
                EventBus.$emit("text-polyline-changed", this.value);
            },
            updatePolylineInputField(value) {
                // this.value = JSON.stringify(value, null, 2);
                this.value = polyline.fromGeoJSON(value, 5);

            },
            clearPolylineInputField(){
                this.value = ""
            },
            // updateCoordinatesField(value) {
            //   this.coordinates = this.covertPolylineToCoordinatesString(value);
            // },
            // covertPolylineToCoordinatesString(polylineString) {
            //     var latlngs = polyline.decode(polylineString, 5);
            //
            //     var str = "";
            //
            //     for (var i = 0; i < latlngs.length; i++) {
            //         str += "[" + latlngs[i] + "]";
            //         if (i !== latlngs.length - 1) {
            //             str += ",\n";
            //         }
            //     }
            //     return str;
            // }
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
