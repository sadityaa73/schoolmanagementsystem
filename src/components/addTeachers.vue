<template>
  <div class="addTeachers">
    <div class="teacher-form">
      <input
        type="text"
        placeholder="teacher name"
        v-model="teach.Name"
        class="name"
      />
      <input
        type="text"
        placeholder="subject offer"
        v-model="teach.Subject"
        class="subject"
      />
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
<style scoped>
.addTeachers {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
}
.teacher-form {
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
.subject {
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
