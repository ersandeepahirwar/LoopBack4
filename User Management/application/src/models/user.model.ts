import { Entity, model, property } from "@loopback/repository";

@model()
export class User extends Entity {
  @property({
    type: "string",
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: "string",
    required: true,
  })
  name: string;

  @property({
    type: "string",
    required: true,
  })
  email: string;

  @property({
    type: "string",
    required: true,
  })
  phoneNumber: string;

  @property({
    type: "string",
    required: true,
  })
  password: string;

  @property({
    type: "string",
    required: true,
  })
  confirmPassword: string;

  @property({
    type: "date",
    required: true,
  })
  createdAt: string;

  @property({
    type: "date",
    required: true,
  })
  updatedAt: string;

  constructor(data?: Partial<User>) {
    super(data);
  }
}

export interface UserRelations {}

export type UserWithRelations = User & UserRelations;
