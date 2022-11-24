import { Filter, FilterExcludingWhere } from "@loopback/repository";
import { User } from "../models";
import { UserRepository } from "../repositories";
export declare class UserController {
    userRepository: UserRepository;
    constructor(userRepository: UserRepository);
    create(user: Omit<User, "id">): Promise<User>;
    find(filter?: Filter<User>): Promise<User[]>;
    findById(id: string, filter?: FilterExcludingWhere<User>): Promise<User>;
    replaceById(id: string, user: User): Promise<void>;
    deleteById(id: string): Promise<void>;
}
