export interface IUsers {
  id?: number;
  username: string;
  vocation: string;
  level: number;
  password?: string;
}

export interface ILogin extends IUsers {
  username: string;
  password: string;
}