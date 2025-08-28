import type { AGENT_STATUS, ROLE, USER_STATUS } from "@/constants";
import type { ComponentType } from "react";

export interface IResponse<T> {
  statusCode: number;
  success: boolean;
  message: string;
  data: T;
}
export interface ISidebarItem {
  title: string;
  items: {
    title: string;
    url: string;
    component: ComponentType;
  }[];
}

export type TRole = typeof ROLE[keyof typeof ROLE];
export type TUserStatus = typeof USER_STATUS[keyof typeof USER_STATUS];
export type TAgentStatus = typeof AGENT_STATUS[keyof typeof AGENT_STATUS];


export interface IAuth {
  provider?: "google" | "credentials" | "admin";
  providerId?: string;
}


export interface IUser {
  name?: string;
  email: string;  
  password?: string;
  phone?: string;
  picture?: string;
  address?: string;
  isDeleted?: boolean;
  isVerified?: boolean;
  userStatus?: TUserStatus;
  agentStatus?: TAgentStatus;
  role: TRole;
  auths: IAuth[];
}

