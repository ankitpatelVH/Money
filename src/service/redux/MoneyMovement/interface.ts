export interface moneyReducerState {
  moneyData: Array<moneyArrayObj>;
}

export interface moneyArrayObj {
  name: string;
  status: string;
  category: string;
  carbon_footprint: number;
  fees: number;
  type: string;
  amount: number;
  currency: string;
  created_at: string;
  icon: string;
  brand_partner: string;
}
