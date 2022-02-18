<template>
  <div class="teachers-list">
    <div class="teach">
      <ul class="teachers-list">
        <li v-for="teacher in allTeachers" :key="teacher.id">
          {{ teacher.id }}|{{ teacher.Name }}|{{ teacher.Subject }}
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapGetters, mapActions } from "vuex";
export default {
  name: "teacher",
  methods: { ...mapActions(["getTeachers"]) },
  computed: { ...mapGetters(["allTeachers"]) },
  created() {
    this.getTeachers();
  },
};
</script>
<style scoped></style>
