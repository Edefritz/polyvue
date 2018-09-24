<template>
    <div class="container">
        <h1 class="">What is this?</h1>
        <p>
            Polyvue is an polyline encoding and decoding utility based on Vue.js, Leaflet.js and the Bulma CSS
            Framework. Polyline data can be displayed on a map or converted to the GeoJSON format.
        </p>

        <h1 class="">What's a polyline?</h1>
        <p>
            The Polyline algorithm is a lossy compression algorithm that can store a set of coordinates as a single
            string and is very popular among Mapping APIs. There is a good explanation on the <a
                href="https://developers.google.com/maps/documentation/utilities/polylinealgorithm">Google Developers
            Website</a>
        </p>

        <h1 class="">How can I use this?</h1>
        <p>
            You can click the draw button to draw a line on the map. The text area to the left ist then updated with the
            polyline string based on what you have drawn.
        </p>
        <p>
            You could also paste a polyline string into the field and the map will be updated accordingly. For example this one:
            <span class="code">eqq_IsqzpAyAiAwA{B{CsDgDqEwBwBq@\yAfF{ApIaA~EUfBQvBWxCk@nEgAvJs@vHe@rF</span>
        </p>

    </div>
</template>

<script>
    export default {
        name: "Info"
    };
</script>

<style scoped>
    .container {
        width: 100%;
        padding-left: 5rem;
        padding-right: 5rem;
    }

    h1 {
        font-size: 1.5rem;
        font-weight: bold;
    }

    .code{
        font-family: monospace;
        /*font-size: .7rem;*/
    }
</style>