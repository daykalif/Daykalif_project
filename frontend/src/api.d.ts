declare namespace API {
  interface IRole {
    isAdmin: boolean;
    isEditor: boolean;
  }

  interface IUser {
    id: number;
    name: string;
    password?: string;
  }

  interface InitialState {
    mode: 'light' | 'dark';
    role?: IRole;
  }
}