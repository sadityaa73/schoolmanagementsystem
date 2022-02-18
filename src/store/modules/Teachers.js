import axios from "axios";
const state = {
    teachers: []
};
const getters = {
    allTeachers: state => state.teachers
};
const actions = {
    async getTeachers({ commit }) {
        const response = await axios.get("http://localhost:3000/teachers")
        commit("setTeachers", response.data);
    },
    async addTeachers({ commit }, teacher) {
        console.log(teacher);
        const response = await axios.post("http://localhost:3000/teachers", teacher);
        console.log(response);
        commit("newTeachers", response.data);
    }
};
const mutations = {
    setTeachers: (state, teachers) => (state.teachers = teachers),
    newTeachers: (state, teacher) => (state.teachers.unshift(teacher))
};

export default {
    state,
    getters,
    actions,
    mutations
}