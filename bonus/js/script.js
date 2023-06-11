const {createApp} = Vue;

createApp({
    data() {
      return{
        
        title_app: 'Vue Toobolist',
        new_task: [],
        tasks: [
          {
            text: 'Seguire lezione',
            done:false,
            edit_enable:false
          },
          {
            text: 'Pulire a terra',
            done:false,
            edit_enable:false
          },
          {
            text: 'Finire Batman',
            done:false,
            edit_enable:false
          },
          {
            text: 'Comprare cornetti',
            done:false,
            edit_enable:false
          },
          {
            text: 'Leggere libro',
            done:false,
            edit_enable:false
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
      },
      addTask(){
        let obj = {
          text: this.new_task,
          done: false
        }

        this.tasks.push(obj);

        this.new_task = '';
      },
      editTask(index){
        this.tasks[index].edit_enable = !this.tasks[index].edit_enable
      }
    }
    
  }).mount('#app');