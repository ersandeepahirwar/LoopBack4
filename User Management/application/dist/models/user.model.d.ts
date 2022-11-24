import { Entity } from "@loopback/repository";
export declare class User extends Entity {
    id?: string;
    name: string;
    email: string;
    phoneNumber: string;
    password: string;
    confirmPassword: string;
    createdAt: string;
    updatedAt: string;
    constructor(data?: Partial<User>);
}
export interface UserRelations {
}
export declare type UserWithRelations = User & UserRelations;
