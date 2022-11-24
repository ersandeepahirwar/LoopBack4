import { Filter, FilterExcludingWhere, repository } from "@loopback/repository";

import {
  post,
  param,
  get,
  getModelSchemaRef,
  put,
  del,
  requestBody,
  response,
} from "@loopback/rest";

import { Todo } from "../models";

import { TodoRepository } from "../repositories";

export class TodoController {
  constructor(
    @repository(TodoRepository)
    public todoRepository: TodoRepository
  ) {}

  @post("/todos")
  @response(200, {
    description: "Todo has been created successfully",
    content: { "application/json": { schema: getModelSchemaRef(Todo) } },
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(Todo, {
            title: "NewTodo",
            exclude: ["id"],
          }),
        },
      },
    })
    todo: Omit<Todo, "id">
  ): Promise<Todo> {
    return this.todoRepository.create(todo);
  }

  @get("/todos")
  @response(200, {
    description: "All Todos have been found successfully",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(Todo, { includeRelations: true }),
        },
      },
    },
  })
  async find(@param.filter(Todo) filter?: Filter<Todo>): Promise<Todo[]> {
    return this.todoRepository.find(filter);
  }

  @get("/todos/{id}")
  @response(200, {
    description: "Todo has been found successfully",
    content: {
      "application/json": {
        schema: getModelSchemaRef(Todo, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string("id") id: string,
    @param.filter(Todo, { exclude: "where" })
    filter?: FilterExcludingWhere<Todo>
  ): Promise<Todo> {
    return this.todoRepository.findById(id, filter);
  }

  @put("/todos/{id}")
  @response(204, {
    description: "Todo has been updated successfully",
  })
  async replaceById(
    @param.path.string("id") id: string,
    @requestBody() todo: Todo
  ): Promise<void> {
    await this.todoRepository.replaceById(id, todo);
  }

  @del("/todos/{id}")
  @response(204, {
    description: "Todo has been deleted successfully",
  })
  async deleteById(@param.path.string("id") id: string): Promise<void> {
    await this.todoRepository.deleteById(id);
  }
}
