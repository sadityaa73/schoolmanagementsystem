<template>
  <div class="admin-teacher">
    <div class="teacher-count">
      <span class="fas fa-chalkboard-teacher"></span>
      <p
        v-for="teacher in allTeachers"
        :key="teacher.id"
        class="Admin-teacher-activity"
      >
        {{ teacher.id }}
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
  methods: {
    ...mapActions(["getTeachers"]),
  },
  computed: {
    ...mapGetters(["allTeachers"]),
  },
  created() {
    this.getTeachers();
  },
};
</script>
<style scoped>
.teacher-count {
  display: flex;
  border: 1px solid white;
  width: 102px;
  height: 83px;
  border-radius: 9px;
  justify-content: center;
  align-items: center;
}
.fa-chalkboard-teacher {
  font-size: 38px;
  color: orange;
}
.Admin-teacher-activity {
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
