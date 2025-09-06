import { ROLE } from ".";

export const DASHBOARD_LINKS = {
  [ROLE.ADMIN]: "/admin/overview",
  [ROLE.SUPER_ADMIN]: "/admin/overview",
  [ROLE.AGENT]: "/agent/overview",
  [ROLE.USER]: "/user/overview",
};
