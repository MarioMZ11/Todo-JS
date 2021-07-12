import './styles.css';
import {Todo, TodoList} from './js/classes/index';
import { crearTodoHtml } from './js/componentes';

export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));
//simplificado si el argumento del foreach es igual al argumento que se pasa por funcion se puede simplificar
todoList.todos.forEach(crearTodoHtml);