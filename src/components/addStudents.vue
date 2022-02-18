<template>
  <div class="AddStudent">
    <div class="student-form">
      <input type="text" placeholder="student name" v-model="student.name" />
      <input type="number" placeholder="roll no" v-model="student.roll" />
      <input
        type="number"
        placeholder="enter class"
        v-model="student.standard"
      />
      <input type="number " placeholder="enter marks" v-model="student.marks" />
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
<style scoped></style>
