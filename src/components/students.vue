<template>
  <div class="students">
    <div class="student-list">
      <ul class="stu-lst">
        <li v-for="student in allStudents" :key="student.index">
          {{ student.Name }}|{{ student.Roll }}|{{ student.Standard }}|{{
            student.Marks
          }}
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
  methods: {
    ...mapActions(["getStudents"]),
  },

  computed: { ...mapGetters(["allStudents"]) },
  created() {
    this.getStudents();
  },
};
</script>
<style scoped></style>
