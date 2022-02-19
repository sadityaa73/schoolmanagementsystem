<template>
  <div id="mainContainer">
    <div class="topNav">
      <span class="fas fa-school"></span>
      <h2>School Management System</h2>
    </div>
  </div>
</template>
<script>
export default {
  name: "Header",
  data: function () {
    return {};
  },
};
</script>
<style scoped>
#main-container {
  display: flex;
}
.topNav {
  display: flex;
  border: 1px solid black;
  background-color: skyblue;
}
.fa-school {
  display: flex;
  font-size: 40px;
  justify-content: center;
  margin-top: 11px;
  margin-left: 20px;
  margin-right: 22px;
}
</style>
