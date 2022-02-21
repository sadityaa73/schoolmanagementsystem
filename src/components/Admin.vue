<template>
  <div class="admin-section">
    <div class="admin-showBox">
      <adminStudent></adminStudent>
      <adminTeacher></adminTeacher>
      <adminUpComing></adminUpComing>
    </div>
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
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1626544827763-d516dce335e2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1567&q=80");
  background-repeat: no-repeat;
  background-size: cover;
}
.admin-showBox {
  display: flex;
  justify-content: space-around;
  align-items: center;
  border: 1px solid white;
  width: 956px;
  height: 126px;
  border-radius: 19px;
  margin-left: 160px;
  margin-top: 28px;
  box-shadow: 0px 5px 26px 0px;
}
</style>
