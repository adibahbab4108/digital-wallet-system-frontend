import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import type { LucideIcon } from "lucide-react";
import type { ComponentType } from "react";

export interface StatCardProps {
  title: string;
  value: string | number;
  currency?: string;
  badgeText?: string;
  badgeIcon?: LucideIcon | ComponentType;
  footerTitle?: string;
  footerText?: string;
  footerIcon?: LucideIcon;
}

export default function StatCard({
  title,
  value,
  currency,
  badgeText,
  badgeIcon: BadgeIcon,
  footerTitle,
  footerText,
  footerIcon: FooterIcon,
}: StatCardProps) {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>{title}</CardDescription>
        <CardTitle className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
          {currency && <span>{currency}{" "}</span>}
          {value}
        </CardTitle>
        {badgeText && (
          <div className="mt-2">
            <Badge variant="outline" className="flex items-center gap-1">
              {BadgeIcon && <BadgeIcon className="size-4" />}
              {badgeText}
            </Badge>
          </div>
        )}
      </CardHeader>
      <CardFooter className="flex-col items-start gap-1.5 text-sm">
        {footerTitle && (
          <div className="line-clamp-1 flex gap-2 font-medium">
            {footerTitle}
            {FooterIcon && <FooterIcon className="size-4" />}
          </div>
        )}
        {footerText && (
          <div className="text-muted-foreground">{footerText}</div>
        )}
      </CardFooter>
    </Card>
  );
}
