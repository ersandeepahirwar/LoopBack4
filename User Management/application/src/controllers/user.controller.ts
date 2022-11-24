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

import { User } from "../models";

import { UserRepository } from "../repositories";

export class UserController {
  constructor(
    @repository(UserRepository)
    public userRepository: UserRepository
  ) {}

  @post("/users")
  @response(200, {
    description: "User has been created successfully",
    content: { "application/json": { schema: getModelSchemaRef(User) } },
  })
  async create(
    @requestBody({
      content: {
        "application/json": {
          schema: getModelSchemaRef(User, {
            title: "NewUser",
            exclude: ["id"],
          }),
        },
      },
    })
    user: Omit<User, "id">
  ): Promise<User> {
    return this.userRepository.create(user);
  }

  @get("/users")
  @response(200, {
    description: "All users have been found successfully",
    content: {
      "application/json": {
        schema: {
          type: "array",
          items: getModelSchemaRef(User, { includeRelations: true }),
        },
      },
    },
  })
  async find(@param.filter(User) filter?: Filter<User>): Promise<User[]> {
    return this.userRepository.find(filter);
  }

  @get("/users/{id}")
  @response(200, {
    description: "User has been found successfully",
    content: {
      "application/json": {
        schema: getModelSchemaRef(User, { includeRelations: true }),
      },
    },
  })
  async findById(
    @param.path.string("id") id: string,
    @param.filter(User, { exclude: "where" })
    filter?: FilterExcludingWhere<User>
  ): Promise<User> {
    return this.userRepository.findById(id, filter);
  }

  @put("/users/{id}")
  @response(204, {
    description: "User has been updated successfully",
  })
  async replaceById(
    @param.path.string("id") id: string,
    @requestBody() user: User
  ): Promise<void> {
    await this.userRepository.replaceById(id, user);
  }

  @del("/users/{id}")
  @response(204, {
    description: "User has been deleted successfully",
  })
  async deleteById(@param.path.string("id") id: string): Promise<void> {
    await this.userRepository.deleteById(id);
  }
}
