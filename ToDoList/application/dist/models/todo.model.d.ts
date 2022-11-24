import { Entity } from "@loopback/repository";
export declare class Todo extends Entity {
    id?: string;
    title: string;
    description: string;
    isComplete: boolean;
    createdAt: string;
    updatedAt: string;
    constructor(data?: Partial<Todo>);
}
export interface TodoRelations {
}
export declare type TodoWithRelations = Todo & TodoRelations;
