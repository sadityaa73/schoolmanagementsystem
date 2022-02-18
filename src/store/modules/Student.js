import axios from "axios";
const state = {
    students: []
};
const getters = {
    allStudents: state => state.students,
};
const actions = {
    async getStudents({ commit }) {
        const response = await axios.get("http://localhost:3000/students")
        commit("setStudents", response.data);
    },
    async addStudent({ commit }, student) {
        console.log
        const response = await axios.post("http://localhost:3000/students", student)
        commit("newStudents", response.data);
    }
};
const mutations = {
    setStudents: (state, students) => (state.students = students),
    newStudents: (state, student) => {
        state.students.unshift(student)
        state.student = Object.assign({}, state, {});
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}