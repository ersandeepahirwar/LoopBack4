import { Filter, FilterExcludingWhere } from "@loopback/repository";
import { Todo } from "../models";
import { TodoRepository } from "../repositories";
export declare class TodoController {
    todoRepository: TodoRepository;
    constructor(todoRepository: TodoRepository);
    create(todo: Omit<Todo, "id">): Promise<Todo>;
    find(filter?: Filter<Todo>): Promise<Todo[]>;
    findById(id: string, filter?: FilterExcludingWhere<Todo>): Promise<Todo>;
    replaceById(id: string, todo: Todo): Promise<void>;
    deleteById(id: string): Promise<void>;
}
