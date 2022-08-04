import { Todo } from "./todo.class";

export class TodoList{
    constructor(){
        // this.todos=[];
        this.cargarLocalStorage();
    }
    nuevoTodo(todo){
        this.todos.push(todo);
        this.guardarLocalStorage();
    }
    eliminarTodo(id){
        this.todos = this.todos.filter( todo => todo.id != id );// Vamos hacer una copia del arreglo excluyendo a los de la condición 
        this.guardarLocalStorage();
    }
    marcaCompletado(id){
        for (const todo of this.todos) {

            if (todo.id == id) {

                todo.completado = !todo.completado;
                this.guardarLocalStorage();
                break;
            }
        }

    }
    eliminarCompletados(){
        this.todos = this.todos.filter( todo => !todo.completado )// Me devuelve un arreglo de todos los todos que no esten completados
        this.guardarLocalStorage();

    }
    guardarLocalStorage(){
        localStorage.setItem('todo', JSON.stringify(this.todos) );
    }
    cargarLocalStorage(){
        this.todos = (localStorage.getItem('todo')) 
                    ? JSON.parse(localStorage.getItem('todo')) 
                    : [];

        // this.todos = this.todos.map( obj => Todo.fromJson( obj ) );//Otra Forma
        this.todos = this.todos.map( Todo.fromJson );//Otra Forma
    }
}