const {createApp} = Vue;

createApp({
    data() {
      return{
        
        title_app: 'Vue Toobolist',
        tasks: [
          {
            text: 'Seguire lezione',
            done:false
          },
          {
            text: 'Pulire a terra',
            done:false
          },
          {
            text: 'Finire Batman',
            done:false
          },
          {
            text: 'Comprare cornetti',
            done:false
          },
          {
            text: 'Leggere libro',
            done:true
          },
        ]



      }
    },
    methods: {
      changeTaskStatus(index){
        this.tasks[index].done = !this.tasks[index].done
      },
      deleteTask(index){
        this.tasks.splice(index,1);
      }
    },
    
  }).mount('#app');