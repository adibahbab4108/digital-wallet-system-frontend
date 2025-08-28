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
