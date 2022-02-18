import Vue from 'vue'
import Vuex from 'vuex'
import Student from "./modules/Student.js"
import Teacher from "./modules/Teachers.js"


Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        Student,
        Teacher,


    }
})