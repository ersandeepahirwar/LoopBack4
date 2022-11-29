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
    jsonSchema: {
      pattern: "^[A-Z][a-z]+[ ][A-Z][a-z]+$",
    },
  })
  name: string;

  @property({
    type: "string",
    required: true,
    jsonSchema: {
      pattern: "^([a-z0-9]+)@([a-z0-9]+).([a-z]{2,7}).([a-z]{2,7})?$",
    },
  })
  email: string;

  @property({
    type: "string",
    required: true,
    jsonSchema: {
      pattern: "^[6-9][0-9]{9}$",
    },
  })
  phoneNumber: string;

  @property({
    type: "string",
    required: true,
    jsonSchema: {
      pattern: "((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,21})",
    },
  })
  password: string;

  @property({
    type: "string",
    required: true,
    jsonSchema: {
      pattern: "((?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%]).{8,21})",
    },
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

export interface UserRelations { }

export type UserWithRelations = User & UserRelations;
