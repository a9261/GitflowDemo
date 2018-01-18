import { Component } from '@angular/core';
// import { Http } from '@angular/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  inputHints= 'What needs to be done?';
  todo='';
  todos: any[] = [];
  filterType='All';
  constructor(){
  }

  addTodo(){
    this.todos.push({
      text: this.todo,
      done: false,
    });
  }
  clearCompleted() {
    console.log('Recevied');
    this.todos = this.todos.filter(item=>{return !item.done;});
  }
  filterTypeChanged(filterType:string){
    this.filterType=filterType;
  }
}
