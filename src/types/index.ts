import { ForwardRefExoticComponent, RefAttributes } from "react";
import { Icon, IconProps } from "@tabler/icons-react";

export interface ServiceItem {
  title: string;
  icon: ForwardRefExoticComponent<IconProps & RefAttributes<Icon>>;
  color: string;
  description?: string;
}

export interface ReviewItem extends ServiceItem {
  id: number;
}
