import { CURRENCY } from "@/constants";
import StatCard from "./StatCard";
import { useGetMyWalletQuery } from "@/redux/features/wallet/wallet.api";
import { IconTrendingUp } from "@tabler/icons-react";

export default function UserSectionCards() {
  const { data: myWallet, isLoading } = useGetMyWalletQuery(undefined);
  if (isLoading) return <h1>Loading...</h1>;

  const { data } = myWallet;
  console.log(data);
  return (
    <div className="*:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card dark:*:data-[slot=card]:bg-card grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-4">
      <StatCard
        title="Current Balance"
        value={data?.balance}
        currency={CURRENCY.BDT}
        badgeIcon={IconTrendingUp}
        badgeText="+0%"
      />

      {/* Transaction summary */}
      {data?.transactionSummary.length > 0 ? (
        data?.transactionSummary.map(
          (transaction: { type: string; totalAmount: number }, idx: number) => (
            <StatCard
              key={idx}
              title={`Total ${transaction.type}`}
              value={transaction.totalAmount}
              currency={CURRENCY.BDT}
              badgeIcon={IconTrendingUp}
              badgeText="+0%"
            />
          )
        )
      ) : (
        <>
          <StatCard
            title="You have never made any transaction"
            value="No transaction Found"
          />
        </>
      )}

    </div>
  );
}
