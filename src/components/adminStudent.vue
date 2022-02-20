<template>
  <div class="admin-student">
    <div class="student-count">
      <span class="fas fa-user-graduate"></span>
      <p
        v-for="student in allStudents"
        :key="student.index"
        class="Admin-student-count"
      >
        {{ student.id }}
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data: function () {
    return {};
  },
  methods: { ...mapActions(["getStudents"]) },
  computed: { ...mapGetters(["allStudents"]) },
  created() {
    this.getStudents();
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
.Admin-student-count {
  font-family: math;
  font-size: 29px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 32px;
  margin-left: 7px;
}
</style>
