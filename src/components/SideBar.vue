<template>
  <div class="main-container">
    <div class="LeftSideContainer">
      <div class="Adminstration">
        <span class="fas fa-user-gear"></span>
        <h2 @click="selected = 'Admin'" class="a">Adminstration</h2>
      </div>
      <div class="Admin">
        <span class="fas fa-user-plus"></span>
        <h2 @click="BtnAdmin">
          {{ AdminBtn ? "New Entry" : "New Entry" }}
        </h2>
      </div>
      <div class="admin-sub">
        <ul v-if="AdminBtn">
          <li class="sub-admin">
            <h2 @click="selected = 'addStudents'">Student</h2>
          </li>
          <li class="sub-admin">
            <h2 @click="selected = 'addTeachers'">Teacher</h2>
          </li>
        </ul>
      </div>
      <div class="Student">
        <span class="fas fa-user-graduate"></span>
        <h2 @click="selected = 'students'">Student</h2>
      </div>
      <div class="Faculty">
        <span class="fas fa-chalkboard-teacher"></span>
        <h2 @click="selected = 'teachers'">Faculty</h2>
      </div>
      <div class="Academics">
        <span class="fas fa-chart-line"></span>
        <h2>Academics</h2>
      </div>
    </div>
    <keep-alive>
      <component :is="selected"></component>
    </keep-alive>
  </div>
</template>
<script>
import Admin from "./Admin.vue";
import addStudents from "./addStudents.vue";
import addTeachers from "./addTeachers.vue";
import students from "./students.vue";
import teachers from "./teachers.vue";
export default {
  name: "sideBar",
  components: { Admin, addStudents, addTeachers, students, teachers },
  data: function () {
    return { AdminBtn: false, BtnStudent: false, selected: "Admin" };
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
  background-color: skyblue;
}
.Adminstration {
  display: flex;
  border: 1px solid;
  width: 301px;
  height: 71px;
}
.fa-user-gear {
  color: black;
  font-size: 31px;
  margin-left: 18px;
  margin-top: 17px;
  margin-right: 18px;
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
.Adminstration :hover {
  background-color: skyblue;
}
.Student :hover {
  background: skyblue;
}
.Academics :hover {
  background: skyblue;
}
.admin-sub h2 {
  font-family: serif;
  font-size: 23;
}
.fa-user-plus {
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
  margin-top: 0px;
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
.sub-admin {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 301px;
  margin-left: -40px;
  height: 61px;
  margin-top: 0px;
  padding: 0px;
}
</style>
