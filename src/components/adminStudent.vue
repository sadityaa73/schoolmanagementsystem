<template>
  <div class="admin-student">
    <div class="student-count">
      <span class="fas fa-user-graduate"></span>
      <p class="Admin-activity">{{}}</p>
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
.student-count {
  display: flex;
  border: 1px solid white;
  width: 102px;
  height: 83px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
}
.fa-user-graduate {
  font-size: 38px;
  color: orange;
}
</style>
