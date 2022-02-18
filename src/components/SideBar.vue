<template>
  <div class="main-container">
    <div class="LeftSideContainer">
      <div class="Admin">
        <span class="fas fa-user"></span>
        <h2 @click="BtnAdmin">
          {{ AdminBtn ? "Adminstration" : "Adminstration" }}
        </h2>
      </div>
      <div class="admin-sub">
        <ul v-if="AdminBtn">
          <li class="sub-admin">Student</li>
          <li class="sub-admin">Teacher</li>
        </ul>
      </div>
      <div class="Student">
        <span class="fas fa-user-graduate"></span>
        <h2>Student</h2>
      </div>
      <div class="Faculty">
        <span class="fas fa-chalkboard-teacher"></span>
        <h2>Faculty</h2>
      </div>
      <div class="Academics">
        <span class="fas fa-chart-line"></span>
        <h2>Academics</h2>
      </div>
    </div>
    <addStudents></addStudents>
  </div>
</template>
<script>
import { addStudents } from "./addStudents.vue";
export default {
  name: "sideBar",
  components: { addStudents },
  data: function () {
    return { AdminBtn: false };
  },
  methods: {
    BtnAdmin() {
      this.AdminBtn = !this.AdminBtn;
    },
  },
};
</script>
<style scoped>
.main-container {
  display: flex;
  border: 1px solid;
  height: 628px;
}
.LeftSideContainer {
  display: flex;
  flex-direction: column;
  border: 1px solid;
  width: 302px;
}
.Admin {
  display: flex;
  border: 1px solid;
  width: 301px;
  height: 71px;
}
.Admin:hover {
  background: skyblue;
}
.fa-user {
  color: black;
  font-size: 31px;
  margin-left: 18px;
  margin-top: 17px;
  margin-right: 18px;
}
.Student {
  display: flex;
  border: 1px solid;
  width: 301px;
  height: 71px;
}
.fa-user-graduate {
  color: black;
  font-size: 31px;
  margin-left: 18px;
  margin-top: 17px;
  margin-right: 18px;
}
.Faculty {
  display: flex;
  border: 1px solid;
  width: 301px;
  height: 71px;
}
.fa-chalkboard-teacher {
  color: black;
  font-size: 31px;
  margin-left: 18px;
  margin-top: 17px;
  margin-right: 18px;
}
.Academics {
  display: flex;
  border: 1px solid;
  width: 301px;
  height: 71px;
}
.fa-chart-line {
  color: black;
  font-size: 31px;
  margin-left: 18px;
  margin-top: 17px;
  margin-right: 18px;
}
.RightSideContainer {
  display: flex;
  border: 1px solid;
  display: flex;
  border: 1px solid;
  width: 1117px;
  background-color: rgb(179, 224, 241);
}
.admin-sub {
  margin-bottom: 16px;
  margin-top: -16px;
}
.sub-admin {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 300px;
  margin-left: -40px;
  height: 50px;
  font-size: 28px;
  font-family: sans-serif;
}
</style>
