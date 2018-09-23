<template>
  <div class="tabs is-centered">
    <ul>
      <li @click="tabIndex = 1" v-bind:class="{ 'is-active': tabIndex == 1 }">
        <a>Polyline</a>
      </li>
      <li @click="tabIndex = 2" v-bind:class="{ 'is-active': tabIndex == 2 }">
        <a>GeoJSON</a>
      </li>
    </ul>
  </div>
</template>

<script>

export default{
  name: "Tabs",
  data() {
    return {
      tabIndex: 1
    }
  }
}

</script>

<style>
</style>
