export const ROLE = {
  SUPER_ADMIN: "SUPER_ADMIN",
  ADMIN: "ADMIN",
  USER: "USER",
  AGENT: "AGENT",
} as const;

export const USER_STATUS = {
  ACTIVE: "ACTIVE",
  INACTIVE: "INACTIVE",
  BLOCKED: "BLOCKED",
} as const;
export const AGENT_STATUS = {
  PENDING: "PENDING",
  APPROVED: "APPROVED",
  SUSPENDED: "SUSPENDED",
} as const;
export const TRANSACTION_TYPE = {
  ALL:"ALL",
  SEND: "SEND", //user action
  TOP_UP: "TOP_UP", //user action
  WITHDRAW: "WITHDRAW", //user action
  CASH_IN: "CASH_IN", //agent action
  CASH_OUT: "CASH_OUT", // agent action
  RECEIVE: "RECEIVE", //user action
} as const;
