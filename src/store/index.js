import { createStore } from "vuex";

const url = "https://heathermtuedwa.github.io/json-data/database/";

export default createStore({
  state: {
    project: null,
    resume: null,
    testimonial: null,
  },
  getters: {},
  mutations: {
    setProject(state, project) {
      state.project = project;
    },
    setResume(state, resume) {
      state.resume = resume;
    },
    setTestimonial(state, testimonial) {
      state.testimonial = testimonial;
    },
  },
  actions: {
    async fetchProject(context){
      try{
        let result = await fetch(url)
        let results = await result.json()
        console.log(results)
        let project = results.Project
        console.log(project)
        if(project){
          context.commit("setProject", project)
        } else{
          console.log("ERROR")
        }
      } catch(e){

      }
    }
  },
  async fetchtestimonal(context){
    try{
      let result = await fetch(url)
      let results = await result.json()
      console.log(results)
      let testimonial = results.testimonial
      console.log(testimonial)
      if(testimonial){
        context.commit("setTestimonial", testimonial)
      } else{
        console.log("ERROR")
      }
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
  modules: {},
})