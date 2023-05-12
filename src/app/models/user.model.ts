import { Role } from './roles.model';

export interface User {
  username: string;
  role: Role;
}

export interface UserWithToken extends User {
  token: string;
}
