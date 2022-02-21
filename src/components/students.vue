<template>
  <div class="students">
    <div class="student-list">
      <div class="student-list-filter">
        <span class="fas fa-search"></span
        ><input
          type="search"
          placeholder="enter by name or by roll ...."
          v-model="search"
          class="filter"
        />
        <button class="filter-search" @click="searched">Search</button>
      </div>
      <div class="student-list-header">
        <div class="student-name-header">
          <h2 class="student-list-header-h2">Name</h2>
        </div>
        <div class="student-name-header">
          <h2 class="student-list-header-h2">Roll</h2>
        </div>
        <div class="student-name-header">
          <h2 class="student-list-header-h2">Class</h2>
        </div>
        <div class="student-name-header">
          <h2 class="student-list-header-h2">Marks</h2>
        </div>
      </div>
      <ul v-if="search.length === 0" class="stu-lst">
        <li
          v-for="student in allStudents"
          :key="student.index"
          class="student-list-design"
        >
          <div class="student-name">{{ student.Name }}</div>
          <div class="student-roll">{{ student.Roll }}</div>
          <div class="student-standard">{{ student.Standard }}</div>
          <div class="student-marks">{{ student.Marks }}</div>
        </li>
      </ul>
      <ul v-else class="stu-lst">
        <li
          v-for="student in totalStudents"
          :key="student.index"
          class="student-list-design"
        >
          <div class="student-name">{{ student.Name }}</div>
          <div class="student-roll">{{ student.Roll }}</div>
          <div class="student-standard">{{ student.Standard }}</div>
          <div class="student-marks">{{ student.Marks }}</div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "students",
  components: {},
  data: function () {
    return {
      search: "",
      totalStudents: this.allStudents,
    };
  },
  methods: {
    ...mapActions(["getStudents"]),
    searched() {
      const studentNames = this.allStudents;
      console.log(this);
      var results = studentNames.filter(this.NamesFilter);
      console.log(results);
      this.totalStudents = results;
    },

    NamesFilter: function (studentNames) {
      console.log(studentNames);
      return studentNames.Name.startsWith(this.search);
    },
  },

  computed: {
    ...mapGetters(["allStudents"]),
  },
  created() {
    this.getStudents();
  },
};
</script>
<style scoped>
.students {
  display: flex;
  border: 1px solid;
  width: 100%;
  height: 626px;
  background-image: url("https://images.unsplash.com/photo-1615818499660-30bb5816e1c7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1632&q=80");
}
.student-list {
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
.student-list-filter {
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
.student-name-header {
  display: flex;
  border: 0px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
.student-list-header {
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
.student-list-header-h2 {
  color: white;
}
.student-list-design {
  display: flex;
  border: 1px groove;
  justify-content: flex-start;
  align-items: center;
  border-radius: 4px;
  width: 900px;
  height: 37px;
}
.student-name {
  display: flex;
  border: 1px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
.student-roll {
  display: flex;
  border: 1px groove;
  border-radius: 4px;
  width: 244px;
  height: 35px;
  justify-content: center;
  align-items: center;
}
.student-standard {
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
