import { createStore } from "vuex";

const url = "https://heathermtuedwa.github.io/json-data/database/";

export default createStore({
  state: {
    Project: null,
    resume: null,
    testimonials: null,
    skills:null,
  },
  getters: {},
  mutations: {
    setProject(state, Project) {
      state.Project = Project;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
    setTestimonial(state, testimonials) {
      state.testimonials = testimonials;
    },
    setSkills(state, skills) {
      state.skills = skills;
    },
    
  },
  actions: {
    async fetchProject(context){
      try{
        let result = await fetch(url)
        let results = await result.json()
        console.log(results)
        let Project = results.Project
        console.log(Project)
        if(Project){
          context.commit("setProject", Project)
        } else{
          console.log("ERROR")
        }
      } catch(e){

      }
    },

  async fetchTestimonials(context){
    try{
      let res = await fetch(url)
      let result = await res.json()
      console.log(result.testmonials);
      context.commit("setTestimonial", result.testmonials)
    } catch(e){  
    }
  },
  async fetchResume(context){
    try{
      let result = await fetch(url)
      let results = await result.json()
      console.log(results)
      let resume = results.resume
      console.log(resume)
      if(resume){
        context.commit("setResume",resume)
      } else{
        console.log("ERROR")
      }
    } catch(e){
      
    }
  },
  async fetchskills(context){
    try{
      let res = await fetch(url)
      let result = await res.json()
      console.log(result.skills);
      context.commit("setskills", result.skills)
    } catch(e){


    }
  }


}})
