
import { Todo } from "./todo.class";

export class TodoList{


    constructor(){
        this.cargarDatosLocalStorage();
    }

    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarDatosLocalStorage();
    }

    eliminarTodo(id){

        this.todos = this.todos.filter(todo => todo.id != id );
        this.guardarDatosLocalStorage();
    }

    marcarCompletado(id){

        for(const todo of this.todos){

            if(todo.id == id){
                todo.completado = !todo.completado;
                this.guardarDatosLocalStorage();
                break;
            }
        }
    }

    eliminarCompletados(){
        this.todos = this.todos.filter(todo => !todo.completado );
        this.guardarDatosLocalStorage();
    }

    guardarDatosLocalStorage(){

        localStorage.setItem('todo', JSON.stringify(this.todos));

    }

    cargarDatosLocalStorage(){

        this.todos = (localStorage.getItem('todo')) ? this.todos = JSON.parse( localStorage.getItem('todo')) : this.todos = [];

        //this.todos = this.todos.map(obj => Todo.fromJson(obj));
        this.todos = this.todos.map(Todo.fromJson);
    }


}

