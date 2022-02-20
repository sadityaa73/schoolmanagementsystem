<template>
  <div class="AddStudent">
    <div class="student-form">
      <div class="input-name">
        <input
          type="text"
          placeholder="student name"
          v-model="student.name"
          class="name"
        />
        <input
          type="number"
          placeholder="roll no"
          v-model="student.roll"
          class="roll"
        />
      </div>
      <div class="input-class-marks">
        <input
          type="number"
          placeholder="enter class"
          v-model="student.standard"
          class="class"
        />
        <input
          type="number "
          placeholder="enter marks"
          v-model="student.marks"
          class="marks"
        />
      </div>
      <button class="btn" @click="newStudent">add student</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  name: "addStudent",
  data: function () {
    return {
      student: {
        name: "",
        roll: "",
        standard: "",
        marks: "",
      },
    };
  },
  methods: {
    ...mapActions(["addStudent"]),
    newStudent() {
      this.addStudent({
        Name: this.student.name,
        Roll: this.student.roll,
        Standard: this.student.standard,
        Marks: this.student.marks,
      });
    },
  },
};
</script>
<style scoped>
.AddStudent {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  background-image: url("https://images.unsplash.com/photo-1645042770830-b698d978c49a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80");
  background-repeat: no-repeat;
  background-size: cover;
}
.student-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border: 1px groove;
  width: 795px;
  height: 406px;
  border-radius: 15px;
  box-shadow: 0px 5px 26px 0px;
}
.name {
  width: 202px;
  height: 21px;
  border-radius: 8px;
  border: 1px groove;
  margin-right: 20px;
  margin-bottom: 11px;
}
.roll {
  width: 202px;
  height: 21px;
  border-radius: 8px;
  border: 1px groove;
  margin-right: 20px;
  margin-bottom: 11px;
}
.class {
  width: 202px;
  height: 21px;
  border-radius: 8px;
  border: 1px groove;
  margin-right: 20px;
  margin-bottom: 11px;
}
.marks {
  width: 202px;
  height: 21px;
  border-radius: 8px;
  border: 1px groove;
  margin-right: 20px;
  margin-bottom: 11px;
}
</style>
