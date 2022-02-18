<template>
  <div class="mainContainer">
    <Header></Header>
    <side-bar></side-bar>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import sideBar from "./components/SideBar.vue";
export default {
  name: "App",
  components: {
    Header,
    sideBar,
  },
};
</script>

<style></style>
