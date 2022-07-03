import axios from 'axios';

// 用户角色身份
export type UserRoleType = 'user' | 'admin';

// 返回
export interface GetUserRoleRes {
  userType: UserRoleType;
}

export interface FetchUserRes {
  id: string;
  name: string;
}

// 获取用户角色身份
export const getUserRole = async () => {
  return axios.get<GetUserRoleRes>('https://mysite.com/api/role');
};

// 获取用户信息
export const fetchUser = async () => {
  return axios.get<FetchUserRes>('https://mysite.com/api/users');
};
