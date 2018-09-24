<template>
    <div class="column is-half is-fullheight">
        <div id="map"></div>
    </div>
</template>

<script>
    import L from 'leaflet';
    import 'leaflet-draw';
    import polyline from '@mapbox/polyline'
    import EventBus from './EventBus';

    export default {
        name: "PolylineMap",
        mounted() {
            const me = this;
            this.initMap();
            EventBus.$on("text-polyline-changed", function (polylineString) {
                me.drawPolylineOnMap(polylineString)
            });
            EventBus.$on("text-geojson-changed", function (geojson) {
                let polylineString = polyline.fromGeoJSON(JSON.parse(geojson), 5);
                me.drawPolylineOnMap(polylineString);
            });
        },
        methods: {
            initMap() {
                let me = this;
                let mapboxUrl = "https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=";
                let mapboxAccessToken = "pk.eyJ1IjoiZWRlZnJpdHoiLCJhIjoiVHdNbEFfWSJ9.S7ADvM5VLk5jXNhqWjgsVg";
                let attribution = '© <a href="https://www.mapbox.com/about/maps/">Mapbox</a> © <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> <strong><a href="https://www.mapbox.com/map-feedback/" target="_blank">Improve this map</a></strong>'
                this.map = L.map("map").setView([52.5271, 13.4153], 16);
                this.editableLayers = new L.FeatureGroup().addTo(this.map);

                L.tileLayer(
                    mapboxUrl + mapboxAccessToken,
                    {
                        maxZoom: 18,
                        attribution: attribution
                    }
                ).addTo(this.map);


                let options = {
                    position: 'bottomleft',
                    draw: {
                        polyline: {
                            shapeOptions: {
                                weight: 5
                            }
                        },
                        polygon: false,
                        rectangle: false,
                        circle: false,
                        marker: false,
                        circlemarker: false
                    }
                };

                this.drawControl = new L.Control.Draw(options);
                this.map.addControl(this.drawControl);

                this.map.on(L.Draw.Event.CREATED, function (e) {
                    EventBus.$emit("draw-polyline-created", e.layer.toGeoJSON());
                    me.editableLayers.addLayer(e.layer);
                });

                this.map.on(L.Draw.Event.DRAWSTART, function () {
                    if (me.editableLayers) {
                        me.editableLayers.eachLayer(function (l) {
                            me.editableLayers.removeLayer(l);
                            EventBus.$emit("draw-polyline-deleted", "");
                        })
                    }
                });

            },

            drawPolylineOnMap(polylineString) {
                let latlngs = polyline.decode(polylineString);
                if (this.editableLayers.getLayers().length > 0) {
                    this.editableLayers.getLayers()[0].setLatLngs(latlngs)
                } else {
                    L.polyline(latlngs).addTo(this.editableLayers);
                }

                if (this.editableLayers.getBounds().isValid()) {
                    this.map.fitBounds(this.editableLayers.getBounds());
                }
            }
        }
    };
</script>


<style scoped>
    #map {
        min-height: 100vh;
        /* Prevent map elements to be selected */
        user-select: none;
        -ms-user-select: none;
        -moz-user-select: none;
        -webkit-user-select: none;
    }

</style>
