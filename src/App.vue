<template>
    <div id="app">
        <div class="columns is-marginless is-gapless is-fullheight">
                <PolylineText></PolylineText>
                <PolylineMap></PolylineMap>
        </div>
    </div>
</template>

<script>

    import PolylineMap from './components/Map.vue'
    import PolylineText from './components/LeftContainer.vue'


    export default {
        name: 'app',
        data: function () {
            return {
                count: 0
            }
        },
        components: {
            PolylineText,
            PolylineMap
        }
    }
</script>

<style>

</style>
