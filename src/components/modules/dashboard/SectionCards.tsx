
import { useGetWalletQuery } from "@/redux/features/wallet/wallet.api";
import { Skeleton } from "@/components/ui/skeleton";
import { useGetAllUsersQuery } from "@/redux/features/admin/admin.api";
import type { IUser, TRole } from "@/types";
import { CURRENCY, ROLE, USER_STATUS } from "@/constants";
import StatCard from "./StatCard";

export function SectionCards() {
  const { data: walletDetails, isLoading } = useGetWalletQuery(undefined);
  const { data: allUsers } = useGetAllUsersQuery(undefined);
  if (isLoading) return <Skeleton />;
  const { balance } = walletDetails.data;

  const numberOfActiveAccounts = (role: TRole) => {
    return allUsers.data.filter(
      (user: IUser) =>
        user.role === role && user.userStatus === USER_STATUS.ACTIVE
    ).length;
  };

  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <StatCard
        title="Current Balance"
        value={balance}
        currency={CURRENCY.BDT}
      />
      <StatCard
        title="Active Agents"
        value={numberOfActiveAccounts(ROLE.AGENT)}
      />
      <StatCard
        title="Active Users"
        value={numberOfActiveAccounts(ROLE.USER)}
      />

      {/* <Card className="@container/card">
        <CardHeader>
          <CardDescription>Number of Active User</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {numberOfActiveAccounts(ROLE.USER)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card> */}
      {/* <Card className="@container/card">
        <CardHeader>
          <CardDescription>Number of Active Agent</CardDescription>
          <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
            {numberOfActiveAccounts(ROLE.AGENT)}
          </CardTitle>
          <CardAction>
            <Badge variant="outline">
              <IconTrendingUp />
              +12.5%
            </Badge>
          </CardAction>
        </CardHeader>
        <CardFooter className="flex-col items-start gap-1.5 text-sm">
          <div className="line-clamp-1 flex gap-2 font-medium">
            Strong user retention <IconTrendingUp className="size-4" />
          </div>
          <div className="text-muted-foreground">Engagement exceed targets</div>
        </CardFooter>
      </Card> */}
    </div>
  );
}
