<template>
  <div class="admin-section">
    <adminStudent></adminStudent>
    <adminTeacher></adminTeacher>
    <adminUpComing></adminUpComing>
  </div>
</template>
<script>
import adminStudent from "./adminStudent.vue";
import adminTeacher from "./adminTeacher.vue";
import adminUpComing from "./adminUpComing.vue";
export default {
  name: "Admin",
  components: {
    adminStudent,
    adminTeacher,
    adminUpComing,
  },
  data: function () {
    return {};
  },
};
</script>
<style scoped>
.admin-section {
  display: flex;
  border: 1px solid;
}
</style>
