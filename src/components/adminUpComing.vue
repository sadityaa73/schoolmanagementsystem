<template>
  <div class="admin-upComing">
    <div class="upComing-activities">
      <span class="fas fa-calendar-check"></span>
      <p class="Admin-activity"></p>
    </div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {};
  },
};
</script>
<style scoped>
.upComing-activities {
  display: flex;
  border: 1px solid white;
  width: 102px;
  height: 83px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
}
.fa-calendar-check {
  font-size: 38px;
  color: orange;
}
</style>
