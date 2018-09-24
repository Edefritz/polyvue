<template>
  <div class="tabs is-centered">
    <ul>
      <li @click="setTabIndex(1)" v-bind:class="{ 'is-active': tabIndex === 1 }">
        <a>Polyline</a>
      </li>
      <li @click="setTabIndex(2)" v-bind:class="{ 'is-active': tabIndex === 2 }">
        <a>GeoJSON</a>
      </li>
      <li @click="setTabIndex(3)" v-bind:class="{ 'is-active': tabIndex === 3 }">
        <a>Help</a>
      </li>
    </ul>
  </div>
</template>

<script>

import EventBus from "./EventBus";

export default{
  name: "Tabs",
  data() {
    return {
      tabIndex: 1
    }
  },
  methods:{
    setTabIndex(index){
      this.tabIndex = index;
      EventBus.$emit("tab-index-changed", index);
    }
  }
}

</script>

<style>
</style>
