declare namespace API {
  interface IUser {
    id: number;
    name: string;
    password?: string;
  }

  interface Mode {
    mode: 'light' | 'dark';
  }
}