<template>
  <div class="teacher-main">
    <div class="teachers-list">
      <div class="teachers-list-filter">
        <span class="fas fa-search"></span
        ><input
          type="search"
          placeholder="enter by name or by roll ...."
          v-model="search"
          class="filter"
        />
        <button class="filter-search" @click="searched">Search</button>
      </div>
      <div class="teachers-list-header">
        <div class="teachers-name-header">
          <h2 class="teachers-list-header-h2">Id</h2>
        </div>
        <div class="teachers-name-header">
          <h2 class="teachers-list-header-h2">Name</h2>
        </div>
        <div class="teachers-name-header">
          <h2 class="teachers-list-header-h2">Subject</h2>
        </div>
        <div class="teachers-name-header">
          <h2 class="teachers-list-header-h2"></h2>
        </div>
      </div>
      <div class="teach">
        <ul v-if="search.length === 0" class="teacher">
          <li
            v-for="teacher in allTeachers"
            :key="teacher.id"
            class="teacher-list"
          >
            <div class="teacher-id">{{ teacher.id }}</div>
            <div class="teacher-name">{{ teacher.Name }}</div>
            <div class="teacher-subject">{{ teacher.Subject }}</div>
          </li>
        </ul>
        <ul v-else class="teacher">
          <li
            v-for="teacher in totalTeachers"
            :key="teacher.id"
            class="teacher-list"
          >
            <div class="teacher-id">{{ teacher.id }}</div>
            <div class="teacher-name">{{ teacher.Name }}</div>
            <div class="teacher-subject">{{ teacher.Subject }}</div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "teacher",
  data: function () {
    return {
      search: "",
      totalTeachers: this.allTeachers,
    };
  },
  methods: {
    ...mapActions(["getTeachers"]),
    searched() {
      const teacherNames = this.allTeachers;
      console.log(this);
      var results = teacherNames.filter(this.NamesFilter);
      console.log(results);
      this.totalTeachers = results;
    },

    NamesFilter: function (teacherNames) {
      console.log(teacherNames);
      return teacherNames.Name.startsWith(this.search);
    },
  },
  computed: { ...mapGetters(["allTeachers"]) },
  created() {
    this.getTeachers();
  },
};
</script>
<style scoped>
.teacher-main {
  display: flex;
  border: 1px solid;
  width: 100%;
  height: 626px;
  background-image: url("https://images.unsplash.com/photo-1615818499660-30bb5816e1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80");
}
.teacher-list {
  display: flex;
}
.teachers-list {
  display: flex;
  flex-direction: column;
  border: 1px groove;
  border-radius: 16px;
  width: 1037px;
  height: 557px;
  box-shadow: 0px 5px 26px 0px;
  margin: 32px;
  margin-left: 120px;
}
.teachers-list-filter {
  display: flex;
  justify-content: center;
  align-items: center;
  border-right: 1px solid;
  width: 900px;
  height: 42px;
  border-radius: 7px;
  margin-left: 39px;
  margin-top: 32px;
  margin-bottom: -15px;
  background-color: orange;
}
.filter {
  border-radius: 4px;
  width: 230px;
  height: 32px;
  border: 1px groove;
}
.filter-search {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 66px;
  height: 25px;
  border-radius: 10px;
  border: 1px groove;
  margin-left: 11px;
}
.teachers-name-header {
  display: flex;
  border: 0px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
.teachers-list-header {
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid;
  width: 900px;
  height: 26px;
  border-radius: 7px;
  margin-left: 39px;
  margin-top: 32px;
  margin-bottom: -15px;
  background-color: black;
}
.teachers-list-header-h2 {
  color: white;
}
.teachers-list-design {
  display: flex;
  border: 1px groove;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  width: 900px;
  height: 37px;
}
.teacher-name {
  display: flex;
  border: 1px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
.teacher-id {
  display: flex;
  border: 1px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
.teacher-subject {
  display: flex;
  border: 1px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
.student-marks {
  display: flex;
  border: 1px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
</style>
