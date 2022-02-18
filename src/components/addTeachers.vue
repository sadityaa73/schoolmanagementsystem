<template>
  <div class="addTeachers">
    <div class="form">
      <input type="text" placeholder="teacher name" v-model="teach.Name" />
      <input type="text" placeholder="subject offer" v-model="teach.Subject" />
      <button class="submit" @click="submit">Add Teacher</button>
    </div>
  </div>
</template>
<script>
import { mapActions } from "vuex";
export default {
  data: function () {
    return {
      teach: {
        Name: "",
        Subject: "",
      },
    };
  },
  methods: {
    ...mapActions(["addTeachers"]),
    submit() {
      this.addTeachers({
        Name: this.teach.Name,
        Subject: this.teach.Subject,
      });
    },
  },
};
</script>
<style scoped></style>
