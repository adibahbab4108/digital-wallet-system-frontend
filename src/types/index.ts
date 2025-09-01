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

export type TRole = (typeof ROLE)[keyof typeof ROLE];
export type TUserStatus = (typeof USER_STATUS)[keyof typeof USER_STATUS];
export type TAgentStatus = (typeof AGENT_STATUS)[keyof typeof AGENT_STATUS];

export interface IAuth {
  provider?: "google" | "credentials" | "admin";
  providerId?: string;
}

export interface IUser {
  _id?:string
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

export interface IWallet {
  _id: string;
  user: IUser;
  balance: number;
  currency: string;
  walletStatus: "ACTIVE" | "INACTIVE" | string;
  __v: number;
}
export interface TransactionType {
  SEND: "SEND"; //user action
  TOP_UP: "TOP_UP"; //user action
  WITHDRAW: "WITHDRAW"; //user action
  CASH_IN: "CASH_IN"; //agent action
  CASH_OUT: "CASH_OUT"; // agent action
  RECEIVE: "RECEIVE"; //user action
}
export interface ITransaction {
  _id: string;
  type: "SEND" | "RECEIVE" | string;
  status: "COMPLETED" | "PENDING" | "FAILED" | string;
  amount: number;
  fee: number;
  commission: number;
  senderWallet: IWallet | null;
  receiverWallet: IWallet | null;
  initiatedBy: IUser;
}
