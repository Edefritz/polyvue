<template>
    <div class="column container">
      <Tabs></Tabs>
      <PolylineTextArea></PolylineTextArea>
    </div>
</template>

<script>
    import PolylineTextArea from './PolylineTextArea'
    import Tabs from './Tabs'

    export default {
        data() {
            return {
                value: ""
            };
        },
        mounted() {

        },
        methods: {

        },
        name: "LeftContainer",
        components: {
            PolylineTextArea,
            Tabs
        }
    };
</script>
