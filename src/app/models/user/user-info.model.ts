export interface Permission {
  isAdmin: boolean;
  isEditor: boolean;
  isUser: boolean;
}

export interface UserInfo {
  name: string;
  fullName: string;
  age: number;
  address: string;
  avartar: string;
  email: string;
  phone: string;
  permission: Permission;
}

export interface UserState {
  userInfo: UserInfo | null;
}

export const initialState: UserState = {
  userInfo: null,
};