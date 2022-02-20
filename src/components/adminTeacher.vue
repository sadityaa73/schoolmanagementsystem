<template>
  <div class="admin-teacher">
    <div class="teacher-count">
      <span class="fas fa-chalkboard-teacher"></span>
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
.teacher-count {
  display: flex;
  border: 1px solid white;
  width: 102px;
  height: 83px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
}
.fa-chalkboard-teacher {
  font-size: 38px;
  color: orange;
}
</style>
