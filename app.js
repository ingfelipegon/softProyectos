const app = new Vue({
    el:'#app',
    data:{
      saludo:'GYM con VUE'
    },
    methods:{
        
    },
    computed:{
       
    }
})

Vue.component('saludo', {
  template: '<h3>Saludo de forma estatica</h3>'    
});